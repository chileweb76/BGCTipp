import '@/styles/globals.scss'
import Header from '../components/header'
import Footer from '../components/footer'


export default function App({ Component, pageProps }) {
  return (
    <> 
      <Header />
      <Component {...pageProps} /> 
      <Footer />
    </>
  );
  }
