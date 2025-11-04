import { createContext,useState } from "react";

const ThemeContext = createContext();

const themes = {
    light: {
        backgroundColor : 'white',
        color : 'black'
    },
    dark : {
        backgroundColor : 'black',
        color : 'white'
    }
}

export const ThemeProvider = ({children}) => {
    const [currentTheme , setCurrentTheme] = useState('light');

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    const themeValue = {
        theme : themes[currentTheme],
        currentTheme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={themeValue}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContext;