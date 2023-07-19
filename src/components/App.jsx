// import { useSelector } from 'react-redux';
// import Contacts from './Contacts';
// import Forma from './Forma';
// import Filter from './Filter';
// import Wrapper from './Wrapper';
// import { Title } from './Wrapper/Wrapper.styled';
// import { selectError, selectIsLoading } from 'redux/selectors';



// function App() {
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   return (
//     <Wrapper>
//       <Title>Phonebook</Title>
//       <Forma />
//       {isLoading && !error && <b>Request in progress...</b>}

//       <Title>Contacts</Title>
//       <Filter />
//       <Contacts />
//     </Wrapper>
//   );
// }

// export default App;
// ! Old is up!
// ! New is down
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';
import Wrapper from './Wrapper/Wrapper';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';



const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};


// ! =========
// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { useAuth } from 'hooks';
// import { refreshUser } from 'redux/auth/operation';
// import { Layout } from 'components/Layout/Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';

// const HomePage = lazy(() => import('../pages/Home/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const Contacts = lazy(() => import('../pages/Contacts'));

// export const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />

//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/contacts"
//           element={
//             <PrivateRoute redirectTo="/login" component={<Contacts />} />
//           }
//         />
//       </Route>
//       <Route path="*" element={<HomePage />} />
//     </Routes>
//   );
// };
