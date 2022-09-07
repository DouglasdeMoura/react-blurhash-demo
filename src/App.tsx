import './App.css';
import dog from './assets/dog.jpg';

import Image from './Image';

export default function App() {
  return (
    <div className="App">
      <h1>React BlurHash Demo</h1>

      <Image src={dog} hash="L%Nm~It7tlof~VWBV@fk%gogaKax" />
    </div>
  );
}
