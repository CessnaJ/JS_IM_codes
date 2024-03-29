import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context';
import { useContext } from 'react';

function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext)

    return (<header className={classes.header}>
        <div>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetups</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        My Favorites
                        <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation;