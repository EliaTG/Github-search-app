import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon, faSun, faMagnifyingGlass, faLocationDot,faTwitter, faLink, faBuilding} from '@fortawesome/free-solid-svg-icons'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from '../themes/themes'



const StyledApp = styled.div``;
   
export default function Header({handleSearch, hasError, hasLoading}) {
       
        const [isVisible, setIsVisible] = useState(false)
        const [theme, setTheme] = useState("light");
        const [username, setUsername] = useState('')
    // Dark mode effect
        const themeToggler = () => {
            theme === 'light' ? setTheme('dark') : setTheme('light')
        }
    
        function handleSubmit(e){
           e.preventDefault()
           handleSearch(username)
    
        }
        return(
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles/>
    <StyledApp>
    <div className='container'>
        <header>
            <nav>
                    <h1 className='logo'>devfinder</h1>
                    <div className="darkmode">
                        <button onClick={() => setIsVisible(!isVisible)}>
                            {isVisible ? 
                            <div className="switch-light" onClick={() => themeToggler()}>
                                <span className='light darkmode'>light</span>
                                <FontAwesomeIcon className='light darkmode'  icon={faSun}/>
                            </div>
                            :  
                            <div className="switch-dark" onClick={() => themeToggler()}>
                                <span className='dark darkmode'>dark</span>
                                <FontAwesomeIcon className="dark darkmode moonIcon"   icon={faMoon}/>
                            </div>
                            
                            }
                        </button>
                    </div>
            </nav>
            <div className="search-bar">
                <form action="" onSubmit={handleSubmit}>
                    <div className="icon">
                         <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </div>
                    <p className='userNotFound'></p>
                    <input className='inputSearch' placeholder='Search Github username...' type="text" value={username} 
                    onChange={e => (setUsername(e.target.value))}  />
                    {hasError && <span className='userNotFound'>No result found</span>}
                    <button className='btnSearch' disabled={hasLoading}>
                        {hasLoading ? 'searching' : 'search'}
                    </button>
                </form >
            </div>
        </header>
      </div>
    </StyledApp>
   </ThemeProvider>
  )
}
