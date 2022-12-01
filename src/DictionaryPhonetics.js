import React from "react";

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
