import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import History from "./components/History"
import AddForm from './components/AddForm'
import GlobalProvider from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <Header />
            <Balance />
            <History />
            <AddForm />
        </GlobalProvider>
    );
}

export default App;
