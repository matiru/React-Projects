import useLocalStorage from "./useLocalStorage";
import './theme.css';

export default function LightDarkMode(){


    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme(){
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }



    return(
        <div className = 'light-dark-mode' data-theme ={theme}>
            <div className = 'light-dark-mode__container'>
                <p>Hello World</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    );
}