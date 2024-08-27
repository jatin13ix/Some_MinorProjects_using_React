import { useContext, createContext } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: ()=>{}
})

export default ThemeContext