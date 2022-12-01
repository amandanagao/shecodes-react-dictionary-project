import React from "react";

export default function DictionaryMeaning(props) {
    console.log(props.meaning);
    return (
        <div className="DictionaryMeaning">
            <h5>
                <em>{props.meaning.partOfSpeech}</em>
            </h5>
            {props.meaning.definitions.map((definition, index) => {
                return (
                    <div key={index}>
                        <p>
                            {definition.definition}
                            <br />
                            <em>{definition.example}</em>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
