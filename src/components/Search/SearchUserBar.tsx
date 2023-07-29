import { Dispatch, SetStateAction } from "react";
import {
  StyledSearchButton,
  StyledSearchForm,
  StyledSearchInput,
} from "./styles";

interface ISearchUserBarProps {
  value: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<string>>;
}
export const SearchUserBar = ({
  value,
  setValue,
  setSearchValue,
}: ISearchUserBarProps) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setSearchValue(value);
  };

  return (
    <StyledSearchForm>
      <StyledSearchInput
        id="searchUserBar"
        value={value}
        onChange={handleSearchChange}
        placeholder="write user login"
      />
      <StyledSearchButton type="submit" onClick={handleSearch}>
        Search
      </StyledSearchButton>
    </StyledSearchForm>
  );
};
