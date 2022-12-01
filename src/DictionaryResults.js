import React from "react";
import DictionaryPhonetics from "./DictionaryPhonetics";
import DictionaryMeaning from "./DictionaryMeaning";

import "./DictionaryResults.css";

export default function DictionaryResults(props) {
    if (props.results) {
        return (
            <div className="DictionaryResults">
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
            </div>
        );
    } else {
        return null;
    }
}
