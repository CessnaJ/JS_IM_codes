import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  // localhost:3000/
  // localhost:3000/new-meetup
  // localhost:3000/favorites    이런식으로 URL정할것임.
  
  // 배포하고나면 대충 my-page.com이 되겠지만 로컬서버 주소는 저렇다.

  return (
    <div>
      <MainNavigation />
      <Routes>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage/>
      </Route>
      <Route path=''>
        <FavoritesPage/>
      </Route>
      </Routes>
  </div>
  );
}

export default App;
