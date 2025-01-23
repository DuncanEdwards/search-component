import { StyledButton, StyledDiv, StyledLabel } from "./SearchBox.styled";
import { SearchBoxUncontrolledProps } from "./SearchBoxUncontrolled";

export type SearchBoxApi = {
  clear: () => void;
};

export type SearchBoxUseImperative = {
  initialSearch?: string;
  onSearch: (value: string) => void;
};

export const SearchBoxUncontrolled = ({
  onSearch,
  initialSearch,
}: SearchBoxUncontrolledProps) => {
  console.log("implement me!", { initialSearch, onSearch });

  return (
    <StyledDiv>
      <StyledLabel>Search:</StyledLabel>
      <input id="search" type="text" />
      <StyledButton type="submit">Search</StyledButton>
    </StyledDiv>
  );
};
