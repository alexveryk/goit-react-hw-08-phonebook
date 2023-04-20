// import { ContactLst } from './ContactLst/ContactList';
// import { Filter } from './Filter/Filter';
// import { PhonebookForm } from './PhonebookForm/PhoneForm';
// import { AppContainer } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Contacts } from '../pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
  // <AppContainer>
  //   <h1>Phonebook</h1>
  //   <PhonebookForm />
  //   <h2>Contacts</h2>
  //   <Filter />
  //   {isLoading && !error && <b>Request in progress...</b>}
  //   <ContactLst />
  // </AppContainer>
};
