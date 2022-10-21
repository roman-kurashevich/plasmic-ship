import { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

import * as ph from '@plasmicapp/host';
import { useRouter } from 'next/router';

import queryClient from 'query-client';
import shipTheme from 'theme/ship-theme';
import { globalStyles } from 'theme/globalStyles';

// import { PlasmicHomepage } from '../../components/plasmic/integration/PlasmicHomepage';
import PageConfig from './PageConfig';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Ship</title>
    </Head>
    <QueryClientProvider client={queryClient}>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <MantineProvider
          theme={shipTheme}
          withGlobalStyles
          withNormalizeCSS
        >
          <ModalsProvider>
            <NotificationsProvider autoClose={10000}>
              {/* @ts-ignore */ }
              <Global styles={globalStyles} />
              <PageConfig>
                <Component {...pageProps} />
              </PageConfig>
            </NotificationsProvider>
          </ModalsProvider>
          <ReactQueryDevtools position="bottom-right" />
        </MantineProvider>
      </ph.PageParamsProvider>
    </QueryClientProvider>
  </>
);

export default App;
