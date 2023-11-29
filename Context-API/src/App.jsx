import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme';
import { Theme } from './components/ThemeBtn';
import { Card } from './components/Card';

const toggleContainerStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '5px',
  marginBottom: '10px',
  paddingRight: '15px',
};

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = ()=>{
    setThemeMode("light");
  }
  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-bs-theme', themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='container mt-4'>
        <div className="col-sm-12 p-5 d-flex justify-content-center align-items-center flex-column">
          <div className="col-sm-12 col-md-3" style={toggleContainerStyles}>
                <Theme/>
          </div>
          <div className="col-sm-12 col-md-3">
              <Card/>
          </div>
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
