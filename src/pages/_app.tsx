import type { AppProps } from 'next/app';
import '../styles/global.css';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
