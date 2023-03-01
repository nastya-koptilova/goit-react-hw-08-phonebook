import {
  List,
  ListIcon,
  ListItem,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectFilterContacts } from 'redux/selectors';
import { MdPerson, MdPersonOff } from 'react-icons/md';

export function Contacts() {
  const dispatch = useDispatch();
  const filterContact = useSelector(selectFilterContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List spacing={10} boxShadow="lg" p="6" rounded="md" bg="white" pt={10}>
      {filterContact.map(({ name, id, tel }) => {
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
                {name}: {tel}
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
  );
}
