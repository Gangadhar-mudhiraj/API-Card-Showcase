import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';

function Container({ data }) {
    const [info, setInfo] = useState([]);
    const [inputText, setInputText] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    // Set initial info when data changes
    useEffect(() => {
        if (data) {
            setInfo(data);
        }
    }, [data]);

    const changeInputText = (e) => {
        const value = e.target.value;
        setInputText(value);

        // Filter suggestions as user types
        if (value) {
            const filteredSuggestions = data.filter((i) =>
                i.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSearch = () => {
        if (inputText) {
            const filteredData = data.filter((i) =>
                i.name.toLowerCase().includes(inputText.toLowerCase())
            );
            setInfo(filteredData);
        } else {
            setInfo(data); // Reset to all data if input is empty
        }
        setSuggestions([]); // Clear suggestions after search
    };

    const handleSuggestionClick = (suggestion) => {
        setInputText(suggestion.name);
        const filteredData = data.filter((i) =>
            i.name.toLowerCase().includes(suggestion.name.toLowerCase())
        );
        setInfo(filteredData);
        setSuggestions([]); // Clear suggestions after selection
    };

    return (
        <main>
            <div id='inputSearch'>
                <div className='search'>
                    <input
                        type="text"
                        value={inputText}
                        onChange={changeInputText}
                        placeholder="Search Pokémon..."
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                {/* Display suggestions dropdown */}
                {suggestions.length > 0 && (
                    <div className="list">
                        <ul>
                            {suggestions.map((s, idx) => (
                                <li
                                    key={idx}
                                    style={{ cursor: "pointer", padding: "5px" }}
                                    onClick={() => handleSuggestionClick(s)}
                                >
                                    {s.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div id='cardContainer'>
                {info.length > 0 ? (
                    info.map((i, idx) => (
                        <Card key={idx} card={i} />
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </main>
    );
}

export default Container;
