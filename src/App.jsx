import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import NewPage from "./components/NewPage";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacter = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacter(info.prev);
  };
  const onNext = () => {
    fetchCharacter(info.next);
  };
  useEffect(() => {
    fetchCharacter(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container mt-5">
        <NewPage
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <NewPage
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
