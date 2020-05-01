import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// https://react.i18next.com/getting-started
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: {
          aboutText1: 'Hi. My name is',
          aboutText2:
            'and I really like movies. I watched just in cinema 100 movies in 10 years.',
          aboutTitle: 'About',
          altMovies: 'Movies',
          altTMDb: 'TMDb',
          appAuthorName: 'Krsiak Daniel',
          error404Text: 'Sorry but it looks like the page does not exist.',
          error404Title: '404',
          footerMadeBy: 'by',
          footerMadeIn: 'Made in',
          footerTmdb:
            'This product uses the TMDb API but is not endorsed or certified by TMDb.',
          headerTitle: 'Movies',
          homeLoadMore: 'More…',
          homeMovies: 'Popular Movies',
          homeResults: 'Search Results',
          linkHome: 'Go back to homepage',
          movieActors: 'Actors',
          navHome: 'Home',
          noSearchResultsText:
            'Seems there is no movie with the name you searched.',
          noSearchResultsTitle: 'No such movie',
          search: 'Search…',
        },
      },
    },
  });

export { i18n };
