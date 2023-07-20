import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Forma from 'components/Forma/Forma';
import Filter from 'components/Filter/Filter';
import ContactsAll from 'components/Contacts/Contacts';
import GlobalTitle from 'components/Wrapper/Title';
import { fetchContacts } from 'redux/contacts/services-API';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <HelmetProvider>
        <GlobalTitle title="Phonebook" />
        <Forma />
        <GlobalTitle title="Contacts" />
        <Filter />
        <ContactsAll />
      </HelmetProvider>
    </>
  );
};

export default Contacts;
