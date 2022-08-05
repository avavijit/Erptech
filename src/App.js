import Routers from './navigation/Router'
import ThemeProvider from './ThemeProvider'
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { store } from '../src/store';
import { Provider } from 'react-redux';
import { saveState } from "../src/utility/browser-storage";
import { debounce } from "debounce";

// All CSS
import "./assets/css/font-awesome/all.min.css"
import "./assets/css/flaticon/flaticon.css"
import "./assets/css/bootstrap/bootstrap.min.css"
import "./assets/css/owl-carousel/owl.carousel.min.css"
import "./assets/css/swiper/swiper.min.css"
import "./assets/css/animate/animate.min.css"
import "./assets/css/magnific-popup/magnific-popup.css"
import "./assets/css/style.css"

store.subscribe(
  debounce(() => {
    saveState('redux', store.getState());
  }, 800)
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Routers />
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default App;