import DictionarySearch from "./DictionarySearch";

import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="App-header">Dictionary</header>
                <DictionarySearch />
                <footer className="App-footer">
                    This project was coded by Amanda Nagao and is{" "}
                    <a href="https://github.com/amandanagao/shecodes-react-dictionary-project">
                        {" "}
                        open-sourced on GitHub
                    </a>
                </footer>
            </div>
        </div>
    );
}
