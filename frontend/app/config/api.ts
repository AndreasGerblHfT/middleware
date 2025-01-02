const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '192.168.0.148:3000' // Backend im Netzwerk oder der Cloud
    : 'http://localhost:3000';    // Lokales Backend für Entwicklung

export default API_BASE_URL;

