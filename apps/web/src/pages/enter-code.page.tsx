import * as React from 'react';
import * as ph from '@plasmicapp/host';

import { useRouter } from 'next/router';

import { PlasmicEnterCode } from '../components/plasmic/integration/PlasmicEnterCode';

const EnterCode = () => (
  <ph.PageParamsProvider
    params={useRouter()?.query}
    query={useRouter()?.query}
  >
    <PlasmicEnterCode />
  </ph.PageParamsProvider>
);

export default EnterCode;
