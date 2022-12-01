import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./DictionarySearch.css";

export default function DictionarySearch() {
    const [keyword, setKeyword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Searching for "${keyword}" definition`);
        callAxios();
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function callAxios() {
        //documentation: https://https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="DictionarySearch">
            <form className="DictionarySearch-form" onSubmit={handleSubmit}>
                <InputGroup>
                    <Form.Control onChange={handleKeyword} />
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup>
            </form>
        </div>
    );
}
