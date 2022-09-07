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
          const image = e.currentTarget;
          /* Simula o carregamento lento da imagem */
          setInterval(() => {
            image.style.opacity = '1';
          }, 3000);

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
