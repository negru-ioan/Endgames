import {  useState, createContext } from "react";
import games from "../utils/games";
import { useEffect } from "react";

export const SearchContext = createContext();

function SearchContextProvider({ children }){
    const [search, setSearch] = useState("");
    const [ searchArray, setSearchArray] = useState([]);

    function handleSearch(value){
        setSearchArray(searchGame(value));
    }

    function searchGame(str){
        return games.filter(game => {
            return new RegExp(`${str}`, 'gi').test(game.title)
        })  
    }

    useEffect(() => {
      setSearchArray(searchGame(search));  
    },[search])

    return (<SearchContext.Provider value={{ setSearchArray, search, searchArray, handleSearch,setSearch }}>
        {children}
      </SearchContext.Provider>)
}

export default SearchContextProvider;