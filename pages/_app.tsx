import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import generateStore from "../redux/store";

const store = generateStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
const makestore = () => store

const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
