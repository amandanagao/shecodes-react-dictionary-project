import React from "react";

import "./DictionaryPhonetics.css";

export default function DictionaryPhonetics(props) {
    console.log(props.phonetics);
    return (
        <div className="DictionaryPhonetics">
            {props.phonetics.text}{" "}
            <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
                Listen
            </a>
        </div>
    );
}
