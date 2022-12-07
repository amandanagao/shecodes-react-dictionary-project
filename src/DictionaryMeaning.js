import React from "react";

import "./DictionaryMeaning.css";

export default function DictionaryMeaning(props) {
    return (
        <div className="DictionaryMeaning">
            <h5>{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map((definition, index) => {
                return (
                    <div key={index}>
                        <div className="DictionaryMeaning-definition">
                            {definition.definition}
                        </div>
                        <div className="DictionaryMeaning-example">
                            {definition.example}
                        </div>
                    </div>
                );
            })}

            {props.meaning.synonyms.map((synonym, index) => {
                return (
                    <span key={index} className="DictionaryMeaning-synonyms">
                        {synonym}
                    </span>
                );
            })}
        </div>
    );
}
