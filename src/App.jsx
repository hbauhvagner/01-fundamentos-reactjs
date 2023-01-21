import { Post } from './Post';

export function App() {

  return (
    <div>
      <Post 
        author="Vagner Nascimento" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, cum nisi, fugit veniam excepturi magnam totam quis, tempora aliquam ullam commodi vel. Veniam eaque voluptatibus dolores ducimus in quae velit?" 
      />
      <Post
        author="Joana D'Arc"
        content="Um novo post muito legal"
      />
    </div>
  )
}
