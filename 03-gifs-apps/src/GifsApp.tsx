import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const { searches, gifs, handleSearch, handleTermClicked } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gifs perfecto"
      />

      {/* Search */}
      <SearchBar placeHolderInput="Buscar algo" onQuery={handleSearch} />

      {/* Busquedas previas */}
      <PreviousSearches searches={searches} onLabelClick={handleTermClicked} />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
