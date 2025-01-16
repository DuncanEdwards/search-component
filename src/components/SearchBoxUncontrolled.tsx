import { StyledButton, StyledDiv, StyledLabel } from "./SearchBox.styled";

export type SearchBoxUncontrolledProps = {
  initialSearch?: string;
  onChange: (value: string) => void;
};

export const SearchBoxUncontrolled = ({
  onChange,
  initialSearch,
}: SearchBoxUncontrolledProps) => {
  console.log("implement me!", { initialSearch, onChange });

  return (
    <StyledDiv>
      <StyledLabel>Search:</StyledLabel>
      <input id="search" type="text" />
      <StyledButton type="submit">Search</StyledButton>
    </StyledDiv>
  );
};
