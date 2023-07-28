import { Dispatch, SetStateAction } from "react";

interface ISearchUserBarProps {
  value: string;
  setSearchValue:Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<string>>;
}
export const SearchUserBar = ({ value, setValue, setSearchValue }: ISearchUserBarProps) => {

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setSearchValue(value);
  }

  return (
    <>
      <form>
        <input id="searchUserBar" value={value} onChange={handleSearchChange}/>
        <button type="submit" onClick={handleSearch}>Search</button>
      </form>
    </>
  )
}