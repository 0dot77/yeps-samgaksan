import { Text } from '@react-three/drei';

export default function Wishes({ data: { Korean = {} } }) {
  const fontProps = {
    font: 'assets/fonts/mainfont.ttf',
    fontSize: 1,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };

  function getRandomNumber(max, min) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
  }

  return Object.keys(Korean)?.map((eachWish, index) => (
    <Text
      key={index}
      color={'white'}
      {...fontProps}
      children={eachWish}
      position={[getRandomNumber(-10, 10), getRandomNumber(-10, 10), getRandomNumber(-10, 10)]}
      rotation={[0, getRandomNumber(-360, 360), 0]}
    />
  ));
}
