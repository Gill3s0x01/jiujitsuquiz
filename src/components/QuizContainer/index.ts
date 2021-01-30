import styled from 'styled-components'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
    border-radius: 10px;
  }
`;

export default QuizContainer