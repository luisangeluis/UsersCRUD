import './App.css';
import UsersList from './components/UsersList';
import useCrud from './hooks/useCrud';

function App() {
  const [users] = useCrud();

  return (
    <div className="App">
      <header></header>
      <main>
        <UsersList users={users} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
