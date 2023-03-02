import { Text, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from 'redux/Filter/filerSelectors';
import { searchContact } from 'redux/Filter/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const onSearch = event => {
    const value = event.target.value;
    dispatch(searchContact(value));
  };

  return (
    <div>
      <Text fontSize="xl" textAlign="center">
        Find contacts by name:
      </Text>
      <Input
        w={350}
        mb={10}
        mt={3}
        type="text"
        name="filterTerm"
        value={search}
        onChange={onSearch}
      />
    </div>
  );
}

export default Filter;
