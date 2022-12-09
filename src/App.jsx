import './App.css'
import CornerBtn from './components/CornerBtn/CornerBtn'
import Toolbox from './pages/Toolbox/Toolbox'

const App = () => {

  return (
    <div className="App">
      <CornerBtn
        href="#"
        target="_blank"
        bg="#00000050"
        icon="Github"
        iconColor="#f8f8ff"
        iconSize="40"
      />
      <div className="header">
        <div className="text">&lt;Our-Toolbox&gt;</div>
      </div>
      <Toolbox />
    </div>
  )
}

export default App
