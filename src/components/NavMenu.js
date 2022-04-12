import {React , useContext} from 'react'
import {Link} from 'react-router-dom'
import { ContextLogin } from '../context/Contexto';
import style from './Nav.module.css'
function NavMenu() {
    const token = localStorage.getItem('token');
    const {Logout} = useContext(ContextLogin);
    return (
    <>
        <nav>
            { token ?
            <>
                <ul>
                    <li> <Link to={'/'}>Home</Link></li>
                    <li><Link to={'/users'}>Users</Link></li>
                    <li><Link to={'/adress'}>Address</Link></li>
                    
                </ul>
            </>
            :
                <ul>
                    <li><Link to={'/login'}>login</Link></li>
                </ul>
            }
        </nav>
        <div className={style.divBtn}>
            {token && <a href='#' onClick={Logout}>Logout</a>}
        </div>
    </>
  )
}

export default NavMenu