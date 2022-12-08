import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "./DictionaryResults";
import DictionaryPhotos from "./DictionaryPhotos";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import "./DictionarySearch.css";

export default function DictionarySearch() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [photos, setPhotos] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        callAxios();
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    function errorCheck(error) {
        if (error.response.status === 404) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a valid word!",
            });
            setResults(null);
            setPhotos(null);
        }
    }

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function callAxios() {
        //documentation: https://https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse).catch(errorCheck);

        //documentation: https://www.pexels.com/api/documentation/
        let pexelsApiKey =
            "563492ad6f917000010000013f3ecd975716427dbbc80ce3c8c8e424";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios
            .get(pexelsApiUrl, { headers: headers })
            .then(handlePexelsResponse);
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
                    Suggested words: game, cat, cake, ocean...
                </div>
            </section>
            <DictionaryResults results={results} />
            <DictionaryPhotos photos={photos} />
        </div>
    );
}
