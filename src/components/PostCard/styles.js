import styled from '@emotion/styled'

export const PostCard = styled.div`
  width: 100%;
  height: 100%;
  margin: 0.5rem 1rem;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-soft);
  background: var(--background-fade);
  box-shadow: var(--shadow-main) var(--background-dark);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

export const PostCardImage = styled.img`
  width: 100%;
  border-top-left-radius: var(--radius-soft);
  border-top-right-radius: var(--radius-soft);
`

export const PostCardHeading = styled.h3`
  margin: 0 1rem;
  padding: 0.25rem 0;
  color: var(--foreground-light);
  text-shadow: 1px 2px 2px var(--background-dark);
`

export const PostCardDate = styled.h6`
  font-family: var(--font-family-alt);
  margin: 0;
  padding: 0.25rem 1rem;
  color: var(--contrast);
`

export const PostCardDescription = styled.div`
  height: 4rem;
  overflow: hidden;
  margin: 1rem 1rem 0;
  
  h5 {
    margin: 0;
    padding: 0;
  }
`

export const PostCardFooter = styled.div`
  color: var(--background);
  padding: 0.3rem;
  font-size: 0.6rem;
  
  span {
    margin: 0 0.3rem;  
  }
`
