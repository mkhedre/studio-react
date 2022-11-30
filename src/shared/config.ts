import './initial-config';

import './endpoint-events';

import { trans } from '@mongez/localization';
import { ApplicationConfigurations, setAppConfigurations } from '@mongez/react';
import Root from 'design-system/layouts/Root';

const appConfigurations: ApplicationConfigurations = {
  localization: {
    defaultLocaleCode: process.env.REACT_APP_DEFAULT_LOCALE_CODE,
    fallback: process.env.REACT_APP_FALLBACK_LOCALE_CODE,
    locales: {
      ar: {
        direction: 'rtl',
        name: 'العربية',
      },
      en: {
        direction: 'ltr',
        name: 'English',
      },
    },
  },
  helmet: {
    appName: process.env.REACT_APP_NAME,
    appendAppName: true,
    appNameSeparator: ' | ',
    translatable: true,
    translationFunction: trans,
    translateAppName: true,
  },
  router: {
    basePath: process.env.REACT_APP_PRODUCTION_BASE_PATH,
    notFound: {
      mode: 'render',
    },
    // preloader: LoadingPage,
    rootComponent: Root,
    localeCodes: ['en', 'ar'],
  },
  vendors: {
    google: {
      key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      maps: {
        mapContainerStyle: {
          height: '400px',
          width: '100%',
        },
        options: {
          zoomControl: true,
        },
        center: {
          lat: 24.713552,
          lng: 46.675297,
        },
        libraries: ['places'],
        requestOptions: {
          location: { lat: () => 30, lng: () => 31 } as google.maps.LatLng,
          radius: 20000000,
          types: ['address'],
        },
      },
    },
  },
};

setAppConfigurations(appConfigurations);
