import styled from 'styled-components';

const Page = styled.div`
  /*
  position: fixed;
  height: 100%;
  width: 100%;
  */
  height: 100vh;
  width: 100vw;
`;

export const HomePage = styled(Page)`
  background: #e8e8e8;
`;

export const LoginPage = styled(Page)`
  background: #e8e8e8;
`;

export const NotFoundPage = styled(Page)`
  background: #e8e8e8;
  text-align: center;
`;

export const Nav = styled.section`
  width: 100%;
  height: 1.28rem;
  justify-content: space-around;
`;

export const Button = styled.div`
  border: 1px solid #8a8989;
  border-radius: .3rem;
  width: 5rem;
  margin: 0 auto;
  line-height: 1rem;
  font-size: 20px;
  color: #8a8989;
`;
