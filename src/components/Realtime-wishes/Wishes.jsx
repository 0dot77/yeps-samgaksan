import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const WishContainer = tw.section`
  w-full h-full flex
`;

const WishBox = tw.ul`
  w-full h-full p-12 overflow-y-scroll
`;

const Wish = tw.li`
  flex justify-center align-middle w-full min-h-100px bg-slate-50 rounded-lg mb-5 shadow-lg shadow-indigo-500/40
`;

const WishText = tw.p`
  p-8 text-2xl text-blue-300 font-sans
`;

export default function Wishes({ data: { Korean = {} } }) {
  return (
    <WishContainer>
      <WishBox>
        {Object.keys(Korean)?.map((eachWish, index) => (
          <Wish key={index}>
            <WishText>{eachWish}</WishText>
          </Wish>
        ))}
      </WishBox>
    </WishContainer>
  );
}
