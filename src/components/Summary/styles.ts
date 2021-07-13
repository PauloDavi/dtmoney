import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
`;

interface CardSummaryProps {
  background: 'green' | 'red' | 'shape';
  color: 'green' | 'red' | 'shape';
}

export const CardSummary = styled.div<CardSummaryProps>`
  background: var(--${(props) => props.background});
  padding: 1.5rem 2rem;
  border-radius: var(--border-radius);
  color: var(
    --${(props) => (props.background === 'shape' ? 'text-title' : 'shape')}
  );

  transition: background 0.2s;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    color: var(--${(props) => props.color});
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;
