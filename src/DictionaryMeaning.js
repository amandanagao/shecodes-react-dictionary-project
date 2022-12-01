import React from "react";

export default function DictionaryMeaning(props) {
    return (
        <div className="DictionaryMeaning">
            <h5>
                <em>{props.meaning.partOfSpeech}</em>
            </h5>
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
                    return (
                        <ul key={index}>
                            <li>{synonym}</li>
                        </ul>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}
