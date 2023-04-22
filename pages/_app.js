import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <> 
      <Component {...pageProps} /> 
      <footer>
        <p>© 2023 Barnes General Contracting</p>
      </footer>
    </>
  );
  }
