// import TaskCounter from 'components/TaskCounter/TaskCounter';
// import StatusFilter from 'components/StatusFilter/StatusFilter';
import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const MenuAppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      // sx={{ flexGrow: 1 }}
      sx={{ textAlign: 'center' }}
    >
      <AppBar>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="nav"
            href="/"
            sx={{
              my: 2,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Navigation />
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          {/* <section>
        <h2>Task</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MenuAppBar;
