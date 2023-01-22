import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <mai>
          <Post 
            author="Vagner Nascimento" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, cum nisi, fugit veniam excepturi magnam totam quis, tempora aliquam ullam commodi vel. Veniam eaque voluptatibus dolores ducimus in quae velit?" 
          />
          <Post
            author="Joana D'Arc"
            content="Um novo post muito legal"
          />
        </mai>
      </div>
    </div>
  )
}
