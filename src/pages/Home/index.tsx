import { PokeballIconSmall } from "../../assets/pokeball"
import styles from "./styles.module.scss"
import { PokemonList } from "../../assets/components/PokemonList"
import { useContext } from "react"
import { PokemonContext } from "../.././assets/context/PokemonContext"
import { Pagination } from "../../assets/components/Pagination"
import { usePagination } from "../../assets/hooks/usePagination"
import { Filters } from "../../assets/components/Filters"

export const Home = () => {
    const { pokemonsFiltered } = useContext(PokemonContext);
    const { page, nextPage, previousPage, backToHome } = usePagination();
  
    let perPage = 12;
  
    return (
      <div className={styles.home}>
        <header>
          <div onClick={backToHome}>
            <PokeballIconSmall />
            <span>Pokédex</span>
          </div>
        </header>
        <Filters />
        <PokemonList
          page={page}
          perPage={perPage}
          pokemonsUrls={pokemonsFiltered}
        />
        <Pagination
          page={page}
          perPage={perPage}
          nextPage={nextPage}
          previousPage={previousPage}
          maxItems={pokemonsFiltered?.length!}
        />
      </div>
    );
  };