import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

export const App = () => {
  return (
    <>
      <h1 style={{ marginLeft: '800px' }}>Phonebook</h1>
      <ContactsForm />
      <h1 style={{ marginLeft: '800px' }}>Contacts</h1>
      <Filter />
      <ContactsList />
    </>
  );
};
