import Contact from './React-Components/Form.js/Contact';
import Navbar from './React-Components/Navbar/Navbar';
import Presentation from './React-Components/Presentation/Presentation';
import Statistic from './React-Components/Statistic/Statistic';
import Works from './React-Components/Works/Works';

function App() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Works />
      <Statistic />
      <Contact />
    </div>
  );
}

export default App;
