import { styled } from "styled-components";

const StyledTag = styled.div`
  padding: 0.5rem 0;

  & span {
    margin-right: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <StyledTag>
      {tags.map((tag: string) => (
        <span key={`tag-${tag}-index`}>{tag}</span>
      ))}
    </StyledTag>
  );
};

