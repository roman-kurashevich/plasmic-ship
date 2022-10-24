import * as React from 'react';
import * as ph from '@plasmicapp/host';

import { useRouter } from 'next/router';

import { PlasmicSetup } from '../components/plasmic/integration/PlasmicSetup';

const Setup = () => (
  <ph.PageParamsProvider
    params={useRouter()?.query}
    query={useRouter()?.query}
  >
    <PlasmicSetup />
  </ph.PageParamsProvider>
);

export default Setup;
