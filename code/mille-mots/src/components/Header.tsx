import React from 'react';
import styled from 'styled-components';
import { NUMBER_WORDS, WORD_LENGTH } from "../util/words";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
`;
const ContainerFirst = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  margin-right: 20px;
`;

const Stats = styled.div`
  font-size: 14px;
`;

function Header({ remaining, guesses, limit }: { remaining: number, guesses: number, limit: number }) {
  return (
    <Container>
      <ContainerFirst>
        <Title>Kilordle by <a href="https://github.com/jonesnxt/kilordle" target="_blank">jones</a> repris et mis en français</Title>
        <Stats>Essais: {guesses}/{limit} | Nombre de mots non trouvés: {remaining}/{NUMBER_WORDS}</Stats>
      </ContainerFirst>
      <span>Pas de déclinaison de verbes ni de pluriel ou féminin. Les mots à {WORD_LENGTH} cases vertes sont validés automatiquement.</span>
    </Container>
  );
}

export default Header;
