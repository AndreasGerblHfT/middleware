import React, { useState, useEffect } from 'react';
import fetchExampleData from './services/api';


export default function ExampleComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchExampleData();
        setData(result);
      } catch (err: any) {
        // Benutzerfreundliche Fehlermeldung
        setError('Daten konnten nicht geladen werden. Bitte versuchen Sie es später erneut.');
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <h1>Beispiel-Daten</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Laden...</p>
      )}
    </div>
  );
}
