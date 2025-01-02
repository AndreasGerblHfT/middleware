import api from './api';

// Beispiel: Daten abrufen
export const fetchExampleData = async () => {
    try {
      // Endpoint muss hier korrekt angegeben werden
      const response = await api.get('/api/example'); 
      return response.data;
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten:', error);
      throw error;
    }
  };
  
