import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../../plasmic-init';

const PlasmicHost = () => PLASMIC && <PlasmicCanvasHost />;

export default PlasmicHost;
