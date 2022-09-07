import './App.css';
import dog from './assets/dog.jpg';

import Image from './Image';

export function App2() {
  return (
    <div className="App">
      <h1>React BlurHash Demo</h1>

      <Image src={dog} hash="L%Nm~It7tlof~VWBV@fk%gogaKax" />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        tincidunt sagittis dolor et consectetur. Nulla facilisi. Maecenas sed
        aliquam elit. Aenean a nulla sit amet ante congue pulvinar. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Aliquam eu massa placerat, efficitur velit non, gravida
        augue. Suspendisse in nibh tristique libero consectetur posuere a non
        eros. Nullam at elit ac turpis finibus lacinia nec aliquet dolor.
        Interdum et malesuada fames ac ante ipsum primis in faucibus .
      </p>

      <Image
        src="https://picsum.photos/seed/picsum/760/235"
        hash="LiN9;7~AIpNGxa%1xaxu9aM|jENG"
        aspectRatio="760/235"
      />
      <p>
        Duis euismod lorem at dolor consectetur, ut sodales odio scelerisque.
        Phasellus vel tortor vitae massa laoreet iaculis sed auctor felis.
        Aliquam erat volutpat. Ut malesuada vulputate ipsum sed vulputate. Donec
        imperdiet sit amet diam in feugiat. Suspendisse in aliquet purus, eu
        pulvinar nisl. Sed sed dapibus augue. Cras semper aliquam orci, et
        congue mi fermentum vitae. Sed viverra lectus vel arcu rutrum, quis
        commodo ante euismod. Vivamus tincidunt posuere nisi id fermentum hv.
      </p>
    </div>
  );
}
