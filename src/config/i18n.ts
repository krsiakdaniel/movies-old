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
          about: {
            text1: 'Hi. My name is',
            text2:
              'and I really like movies. I watched just in cinema 100 movies in 10 years.',
            title: 'About',
          },
          alt: {
            movies: 'Movies',
            noMovie: 'No movie',
            page404: 'Page not found',
            TMDb: 'TMDb',
          },
          error: {
            page404: {
              text: 'Sorry but it looks like this page does not exist.',
              title: '404',
            },
          },
          footer: {
            country: 'Czech Republic',
            madeBy: 'by',
            madeIn: 'Made in',
            api:
              'This product uses the TMDb API but is not endorsed or certified by TMDb.',
          },
          home: {
            loadMore: 'More…',
            popularMovies: 'Popular Movies',
            searchResults: 'Search Results',
          },
          movie: {
            actors: 'Actors',
            budget: 'Budget',
            director: 'Director',
            rating: 'Rating',
            revenue: 'Revenue',
            runningTime: 'Running time',
          },
          breadcrumb: {
            home: 'Home',
          },
          noMovieFound: {
            title: 'No movies found',
            text: 'Please use search.',
          },
          search: {
            placeholder: 'Search…',
          },
          shared: {
            app: {
              author: 'Krsiak Daniel',
              title: 'Movies',
            },
          },
        },
      },
    },
  });

export { i18n };
