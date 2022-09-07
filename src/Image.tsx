import { Blurhash } from 'react-blurhash';

import style from './Image.module.css';

type ImageProps = {
  hash: string;
  aspectRatio?: string;
} & React.ComponentPropsWithoutRef<'img'>;

const Image: React.FC<ImageProps> = ({
  src,
  hash,
  aspectRatio = '16 / 9',
  onLoad,
  ...props
}) => {
  return (
    <div
      className={style.wrapper}
      style={{
        // @ts-ignore
        '--aspect-ratio': aspectRatio,
      }}
    >
      <img
        className={style.img}
        src={src}
        onLoad={(e) => {
          e.currentTarget.style.opacity = '1';
          onLoad?.(e);
        }}
        {...props}
      />
      <Blurhash
        hash={hash}
        className={style.blurhash}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
    </div>
  );
};

export default Image;
