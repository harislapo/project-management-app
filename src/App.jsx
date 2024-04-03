import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProject from './components/NoProject';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NoProject />
    </main>
  );
}

export default App;
