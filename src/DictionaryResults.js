import React from "react";
import DictionaryPhonetics from "./DictionaryPhonetics";
import DictionaryMeaning from "./DictionaryMeaning";

import Card from "react-bootstrap/Card";
import "./DictionaryResults.css";

export default function DictionaryResults(props) {
    if (props.results) {
        return (
            <div className="DictionaryResults">
                <Card className="DictionaryResults-card">
                    <h2>{props.results.word}</h2>
                    {props.results.phonetics.map((phonetic, index) => {
                        return (
                            <div key={index}>
                                <DictionaryPhonetics phonetics={phonetic} />
                            </div>
                        );
                    })}
                    {props.results.meanings.map((meaning, index) => {
                        return (
                            <div key={index}>
                                <DictionaryMeaning meaning={meaning} />
                            </div>
                        );
                    })}
                </Card>
            </div>
        );
    } else {
        return null;
    }
}
