import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// https://react.i18next.com/getting-started
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          headerTitle: 'Movies',
          navHome: 'Home',
          search: 'Search...',
          homeMovies: 'Popular Movies',
          homeResults: 'Search Results',
          homeLoadMore: 'More...',
          movieActors: 'Actors',
          noResultsTitle: 'No such movie',
          noResultsText: 'Seems there is no movie with the name you searched.',
          noResultsLink: 'Go back to homepage',
          error404Title: '404',
          error404Text: 'Sorry but it looks like the page does not exist.',
          footerTmdb:
            'This product uses the TMDb API but is not endorsed or certified by TMDb.',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
