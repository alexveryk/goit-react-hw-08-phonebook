import { nanoid } from 'nanoid';
import { FilterContainer } from './Filter.styled';
import { FilterLabel } from './Filter.styled';
import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setFilter(filter));

  const handleIputСhange = event => {
    handleFilterChange(event.currentTarget.value);
  };

  const idForm = nanoid(5);

  return (
    <FilterContainer>
      <FilterLabel htmlFor={idForm}>Find contacts by name</FilterLabel>
      <FilterInput type="text" id={idForm} onChange={handleIputСhange} />
    </FilterContainer>
  );
};
