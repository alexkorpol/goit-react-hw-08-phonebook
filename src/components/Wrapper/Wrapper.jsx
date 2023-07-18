
// !==============Было у меня
// import React from 'react';
// import { Container } from './Wrapper.styled';
// import PropTypes from 'prop-types';

//  const Wrapper = ({ children }) => {
//   return (
//     <Container>
//       <main>{children}</main>
//     </Container>
//   );
// };

// Wrapper.propTypes = {
//    children: PropTypes.any.isRequired,
// };

// export default Wrapper;

// Wrapper.propTypes = {
//   children: PropTypes.array.isRequired
// };

// !=====================

// ! новое !!!!
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {AppBar} from '../AppBar/AppBar';

export const Wrapper = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Wrapper;

// Old
// import React from 'react';
// import { Container } from './Layout.styled';
// import PropTypes from 'prop-types';

//  const Layout = ({ children }) => {
//   return (
//     <Container>
//       <main>{children}</main>
//     </Container>
//   );
// };

// Layout.propTypes = {
//    children: PropTypes.any.isRequired,
// };

// export default Layout;


// new
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

// import {AppBar} from '../AppBar/AppBar';

// export const Layout = () => {
//   return (
//     <>
//       <AppBar />
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };
