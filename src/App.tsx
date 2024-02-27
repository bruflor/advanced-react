// import { CurrentUserLoader } from './components/current-user-loader'
import { UserInfo } from './components/user-info'
import { ResourceLoader } from './components/resource-loader'
import { BookInfo } from './components/book-info'
import { createElement } from 'react'

function App() {

  return (
    <>
      <ResourceLoader resourceUrl={"/api/users/2"} resourceName={"user"}>
        {/* <UserInfo /> */}
        {createElement(UserInfo)}
      </ResourceLoader>
      <ResourceLoader resourceUrl="/api/books/1" resourceName="book">
        <BookInfo />
      </ResourceLoader>
    </>
     
  )
}

export default App
