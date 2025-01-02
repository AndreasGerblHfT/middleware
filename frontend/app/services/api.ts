import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Timeout für Anfragen (optional)
});

// Response-Interceptor
api.interceptors.response.use(
  (response) => {
    // Erfolgreiche Antwort
    console.log(`[SUCCESS] ${response.status}: ${response.statusText}`);
    return response;
  },
  (error) => {
    // Fehlerbehandlung basierend auf Statuscode
    if (error.response) {
      const { status, data } = error.response;

      // Beispiel: Statuscode-Spezifische Behandlung
      switch (status) {
        case 400:
          console.error('Bad Request:', data.message || 'Ungültige Anfrage.');
          break;
        case 401:
          console.error('Unauthorized: Bitte einloggen.');
          break;
        case 403:
          console.error('Forbidden: Zugriff verweigert.');
          break;
        case 404:
          console.error('Not Found: Ressource nicht gefunden.');
          break;
        case 500:
          console.error('Internal Server Error: Problem auf dem Server.');
          break;
        default:
          console.error(`Unbekannter Fehler (${status}):`, data.message || error.message);
      }
    } else if (error.request) {
      // Kein Serverantwort
      console.error('Keine Antwort vom Server erhalten:', error.message);
    } else {
      // Allgemeiner Fehler
      console.error('Fehler bei der Anfrage:', error.message);
    }

    // Fehler weitergeben (optional)
    return Promise.reject(error);
  }
);

export default api;
