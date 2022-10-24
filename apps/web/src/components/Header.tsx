import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import {
  PlasmicHeader,
  DefaultHeaderProps,
} from './plasmic/integration/PlasmicHeader';

export interface HeaderProps extends DefaultHeaderProps {}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Header_ = (props: HeaderProps, ref: HTMLElementRefOf<'div'>) => (
  <PlasmicHeader root={{ ref }} {...props} />
);

const Header = React.forwardRef(Header_);

export default Header;
