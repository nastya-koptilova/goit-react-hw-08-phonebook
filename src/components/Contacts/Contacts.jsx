import {
  List,
  ListIcon,
  ListItem,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react';
import { MdPerson, MdPersonOff } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/Filter/filerSelectors';
import { deleteContact } from 'redux/Contacts/contactsOperations';

function Contacts() {
  const dispatch = useDispatch();
  const filterContact = useSelector(selectFilterContacts);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <List spacing={10} boxShadow="lg" p="6" rounded="md" bg="white" pt={10}>
        {filterContact.map(({ name, id, number }) => {
          return (
            <div key={id}>
              <ListItem
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={10}
              >
                <Text>
                  <ListIcon as={MdPerson} w={6} h={6} color="green.500" />
                  {name}: {number}
                </Text>
                <Button
                  leftIcon={<MdPersonOff />}
                  ml={5}
                  colorScheme="blue"
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </Button>
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
    </>
  );
}

export default Contacts;
