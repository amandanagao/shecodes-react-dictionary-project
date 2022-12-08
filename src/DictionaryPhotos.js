import React from "react";

import "./DictionaryPhotos.css";

export default function DictionaryPhotos(props) {
    if (props.photos) {
        return (
            <div className="DictionaryPhotos">
                <section>
                    <div className="row">
                        {props.photos.map((photo, index) => {
                            return (
                                <div className="col-4" key={index}>
                                    <a
                                        href={photo.src.original}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={photo.src.landscape}
                                            alt={photo.alt}
                                        />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        );
    } else {
        return null;
    }
}
