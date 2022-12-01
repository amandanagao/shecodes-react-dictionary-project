import React from "react";

import "./DictionaryMeaning.css";

export default function DictionaryMeaning(props) {
    return (
        <div className="DictionaryMeaning">
            <h5>{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map((definition, index) => {
                return (
                    <div key={index}>
                        <strong>Definition:</strong> {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                    </div>
                );
            })}
            {props.meaning.synonyms.map((synonym, index) => {
                if (synonym) {
                    if (index === 0) {
                        return (
                            <span>
                                <strong>Synonyms:</strong>{" "}
                                <span
                                    key={index}
                                    className="DictionaryMeaning-synonyms"
                                >
                                    {synonym}
                                </span>
                                {" | "}
                            </span>
                        );
                    } else {
                        return (
                            <span>
                                <span
                                    key={index}
                                    className="DictionaryMeaning-synonyms"
                                >
                                    {synonym}
                                </span>
                                {" | "}
                            </span>
                        );
                    }
                } else {
                    return null;
                }
            })}
        </div>
    );
}
