import styles from './App.module.css'
import CornerBtn from './components/CornerBtn/CornerBtn'
import Toolbox from './pages/Toolbox/Toolbox'

const App = () => {

  return (
    <div className={ styles.App }>
      <CornerBtn
        href="https://github.com/6MA-606/Project-Our-Toolbox"
        target="_blank"
        bg="#00000050"
        icon="Github"
        iconColor="#f8f8ff"
        iconSize="40"
      />
      <div className={ styles.header }>
        <div className={ styles.text }>&lt;Our-Toolbox&gt;</div>
      </div>
      <div className={ styles.content }>
        <Toolbox />
      </div>
    </div>
  )
}

export default App
