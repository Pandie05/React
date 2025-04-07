import './App.css';
import SignUpForm from './SignUpForm';
import { showForm } from './SignUpForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={showForm}>Sign Up Form</button>
      </header>
      <main className="hidden">
        <SignUpForm />
      </main>
    </div>
  );
}

export default App;