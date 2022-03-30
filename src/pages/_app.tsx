import '../styles/tailwind.css';
import 'antd/dist/antd.less';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

// disable async validator logs
const warn = console.warn;
console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].startsWith('async-validator:')) return;

    warn(...args);
};

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
