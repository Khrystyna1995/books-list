import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyle = makeStyles({
    header: {
        background: '#49b9ed61'
    },
    tabs: {
        color: '#111111',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>Books</NavLink>
                <NavLink className={classes.tabs} to="all" exact>All books</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add book</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;