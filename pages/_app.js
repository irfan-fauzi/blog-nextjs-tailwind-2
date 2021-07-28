import 'tailwindcss/tailwind.css'
import { KontenProvider } from '../context/ContextKonten'

function MyApp({ Component, pageProps }) {
  return(
    <KontenProvider>
      <Component {...pageProps} />
    </KontenProvider>
  ) 
}

export default MyApp
