import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "./DictionaryResults";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./DictionarySearch.css";

export default function DictionarySearch() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        callAxios();
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function callAxios() {
        //documentation: https://https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="DictionarySearch">
            <section>
                <h1>What word do you want to look up?</h1>
                <form className="DictionarySearch-form" onSubmit={handleSubmit}>
                    <InputGroup>
                        <Form.Control
                            onChange={handleKeyword}
                            placeholder="Search for a word"
                        />
                        <Button variant="outline-secondary">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </InputGroup>
                </form>
                <div className="DictionarySearch-hint">
                    Suggested words: game, cat, wine, yoga...
                </div>
            </section>
            <DictionaryResults results={results} />
        </div>
    );
}
