import { Header } from './Header';
import { Main } from './Main';
import { NavigationBar } from './NavigationBar';

function App() {
  return (
    <div style={{ backgroundColor: '#EEEEEE' }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <NavigationBar />
        <Main />
      </div>
    </div>
  )
}


export default App;
