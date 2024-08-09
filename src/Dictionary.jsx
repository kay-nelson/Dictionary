import React, { useState, useEffect } from 'react';
import "./Homepage.css"

export default function Homepage(){
    const [word, setWord] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

  const fetchDefinition = (searchTerm) => {
    setLoading(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setWord(data[0].meanings);
        } else {
          setWord([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchDefinition(query);
    }
  };
  const handleSearchClick = () => {
    fetchDefinition(query);
  };

    return(
      <>
        <div className='HomepageAfterLogin'>
    
      <h1>Dictionary Search</h1>
      <h2>Welcome Back User</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a word and press Enter"
      />
      <button onClick={handleSearchClick}>Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        word.length > 0 ? (
          word.map((meanings, index) => (
            <div key={index}>
              <p><strong>{meanings.partOfSpeech}:</strong> {meanings.definitions[0].definition}</p>
            </div>
          ))
        ) : (
          <p>No definitions found.</p>
        )
        
      )}
    </div>
     <div className='WordBank'>
      <h3> Previous Word Bank</h3>


     </div>
    </>
    )

}