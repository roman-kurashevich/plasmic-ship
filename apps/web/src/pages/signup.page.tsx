import * as React from 'react';
import * as ph from '@plasmicapp/host';

import { useRouter } from 'next/router';

import { PlasmicSignup } from '../components/plasmic/integration/PlasmicSignup';

const Signup = () => (
  <ph.PageParamsProvider
    params={useRouter()?.query}
    query={useRouter()?.query}
  >
    <PlasmicSignup
      signUpButton={{
        // eslint-disable-next-line no-console
        onClick: () => console.log('Hello!!!'),
      }}
    />
  </ph.PageParamsProvider>
);

export default Signup;
