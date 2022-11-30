import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./DictionarySearch.css";

export default function DictionarySearch() {
    const [keyword, setKeyword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Searching for "${keyword}" definition`);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="DictionarySearch">
            <form onSubmit={handleSubmit}>
                <InputGroup>
                    <Form.Control onChange={handleKeyword} />
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup>
            </form>
        </div>
    );
}
