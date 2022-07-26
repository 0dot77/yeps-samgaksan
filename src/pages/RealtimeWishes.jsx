import { useQuery } from 'react-query';
import { fetchWishes } from '../db/api';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import Wishes from '../components/Realtime-wishes/Wishes';

const Container = tw.main`
    w-full h-screen
`;

const LoadingTextContainer = tw.div`
     border-red-300
`;

const LoadingText = tw.p`
    text-cyan-400
`;

export default function RealtimeWishes() {
  const { isLoading, data } = useQuery('wishes', () => fetchWishes(), { refetchInterval: 5000 });
  return (
    <Container>
      {isLoading ? (
        <LoadingTextContainer>
          <LoadingText>소원 쪽지를 불러오고 있습니다...</LoadingText>
        </LoadingTextContainer>
      ) : (
        <Wishes data={data} />
      )}
    </Container>
  );
}
