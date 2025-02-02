import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import GlobalStyles from './../styles/GlobalStyles';
import '../styles/index.css';

const App = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
);

export default App;
