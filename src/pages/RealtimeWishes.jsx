import { useQuery } from 'react-query';
import { fetchWishes } from '../db/api';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import Wishes from '../components/Realtime-wishes/Wishes';

const Container = tw.main`
    w-full
    h-screen
`;

const LoadingTextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  p {
    text-align: center;
    color: ${(props) => props.theme.textColor};
  }
`;

export default function RealtimeWishes() {
  const { isLoading, data } = useQuery('wishes', () => fetchWishes(), { refetchInterval: 5000 });
  return (
    <Container>
      {isLoading ? (
        <LoadingTextContainer>
          <p>소원 쪽지를 불러오고 있습니다...</p>
        </LoadingTextContainer>
      ) : (
        <Wishes data={data} />
      )}
    </Container>
  );
}
