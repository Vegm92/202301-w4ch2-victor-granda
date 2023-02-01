import "bootstrap/dist/css/bootstrap.min.css";
import GifDisplay from "./components/GifDisplay/GifDisplay";
import "./App.css";
import { giphyStructure } from "./types";
import SearchForm from "./components/SearchForm/SearchForm";

function App(): JSX.Element {
  const getCategory = async (category: string) => {
    return await fetchApiGiphy(category);
  };

  const fetchApiGiphy = async (category: string): Promise<giphyStructure> => {
    const apiKeyRandom = `https://api.giphy.com/v1/gifs/random?api_key=cZ8TbhxPOkajAzC2IMRx8AOsdTK0S93v&tag=${category}&rating=g`;
    const response = await fetch(`${apiKeyRandom}`);
    const randomGif = (await response.json()) as giphyStructure;
    return randomGif;
  };
  return (
    <>
      <SearchForm getCategory={getCategory} />
      <div className="row">
        <GifDisplay />
      </div>
      <div className="row">
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
    </>
  );
}

export default App;
