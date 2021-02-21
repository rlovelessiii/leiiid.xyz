import styled from '@emotion/styled'

export const ProjectCard = styled.div`
  width: 100%;
  height: 100%;
  margin: 0.5rem 1rem;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-hard);
  background: var(--background-fade);
  box-shadow: var(--shadow-main) var(--background-dark);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

export const ProjectCardImage = styled.img`
  width: 100%;
  border-top-left-radius: var(--radius-hard);
  border-top-right-radius: var(--radius-hard);
`

export const ProjectCardHeading = styled.h3`
  margin: 0 1rem;
  padding: 0;
  color: var(--foreground);
  text-shadow: 1px 2px 2px var(--background-dark);
`

export const ProjectCardDescription = styled.div`
  height: 8rem;
  margin: 0 1rem 1.2rem;
  overflow: hidden;
  
  h5 {
    font-family: var(--font-family-alt);
    color: var(--contrast);
  }
`

export const ProjectCardFooter = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0;
  margin: 0;
  padding: 0.3rem;
  color: var(--foreground);
`

export const ProjectCardStat = styled.div`
  padding: 0;
  font-size: 0.7rem;
  
  span {
    padding: 0 0.3rem;
  }
  
  &:last-of-type {
    font-size: 0.6rem;
    color: var(--background);
    position: absolute;
    right: 0.3rem;
    bottom: 0.2rem;
    padding: 0.3rem;
  }
`
