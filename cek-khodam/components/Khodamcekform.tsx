import React, { useState } from 'react';

const KhodamCheckForm: React.FC = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const res = await fetch('http://localhost:8080/api/cek-khodam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4">
      <label htmlFor="name" className="mb-2">Nama:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 mb-4 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Cek Khodam</button>
      {result && <p className="mt-4">Hasil: {result}</p>}
    </form>
  );
};

export default KhodamCheckForm;
