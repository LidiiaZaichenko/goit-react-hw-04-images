import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchbarStyled,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value );
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <div>
      <SearchbarStyled>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <AiOutlineSearch size={32} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </SearchForm>
      </SearchbarStyled>
    </div>
  );
};


