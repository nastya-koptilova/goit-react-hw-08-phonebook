import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectFilterContacts } from 'redux/selectors';
import { Item, Title, Button, Span } from './Contacts.Styled';

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
    <ul>
      {filterContact.map(({ name, id, tel }) => {
        return (
          <Item key={id}>
            <Span />
            <Title>
              {name}: {tel}
            </Title>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </ul>
  );
}
