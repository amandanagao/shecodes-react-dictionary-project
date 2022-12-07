import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import "./DictionaryPhonetics.css";

export default function DictionaryPhonetics(props) {
    if (props.phonetics.audio) {
        return (
            <div className="DictionaryPhonetics">
                <span className="DictionaryPhonetics-text">
                    {props.phonetics.text}
                </span>
                <span className="DictionaryPhonetics-audio">
                    <a
                        href={props.phonetics.audio}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </a>
                </span>
            </div>
        );
    } else {
        return null;
    }
}
