import "bootstrap/dist/css/bootstrap.min.css";
import GifDisplay from "./components/GifDisplay/GifDisplay";
import "./App.css";
import { giphyStructure } from "./types";

function App(): JSX.Element {
  const fetchApiGiphy = async (category: string): Promise<giphyStructure> => {
    const apiKeyRandom = `https://api.giphy.com/v1/gifs/random?api_key=cZ8TbhxPOkajAzC2IMRx8AOsdTK0S93v&tag=${category}&rating=g`;
    const response = await fetch(`${apiKeyRandom}`);
    const randomGif = (await response.json()) as giphyStructure;
    return randomGif;
  };
  const getCategory = async (category: string) => {
    return await fetchApiGiphy(category);
  };
  getCategory("cats");
  return (
    <div className="container">
      <form className="search-form">
        <div className="row">
          <label htmlFor="search" className="col-1 col-form-label">
            Search:{" "}
          </label>
          <div className="col-4">
            <input type="text" id="search" className="search form-control" />
          </div>
          <button type="submit" className="btn btn-info btn-sm col-1">
            Go
          </button>
        </div>
      </form>
      <div className="row">
        <GifDisplay />
      </div>
      <div className="row">
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
    </div>
  );
}

export default App;
