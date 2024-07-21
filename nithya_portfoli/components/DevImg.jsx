import Image from 'next/image';


const DevImg = ({containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <img src={imgSrc} fill priority alt=''/>
    </div>
  );
};

export default DevImg;