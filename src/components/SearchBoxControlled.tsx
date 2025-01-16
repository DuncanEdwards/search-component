import { StyledButton, StyledDiv, StyledLabel } from "./SearchBox.styled";

export type SearchBoxControlledProps = {
  search: string;
  setSearch: (value: string) => void;
  commitSearch: () => void;
};

export const SearchBoxControlled = ({
  search,
  setSearch,
  commitSearch,
}: SearchBoxControlledProps) => {
  console.log("implement me!", { search, setSearch, commitSearch });

  return (
    <StyledDiv>
      <StyledLabel>Search:</StyledLabel>
      <input id="search" type="text" />
      <StyledButton type="submit">Search</StyledButton>
    </StyledDiv>
  );
};
