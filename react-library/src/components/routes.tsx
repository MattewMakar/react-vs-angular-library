import Home from './Home';
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BookList from './BookList';
import AddBook from './AddBook';
import EditBook from './EditBook';
import DeleteBook from './DeleteBook';

export const routes = [{
  path: "/",
  Component:<Home/>,
}];

export const mainRoutes = [
  {
    path: "/list",
    Component: <BookList />,
  },
  {
    path: "/add",
    Component: <AddBook />,
  },
  {
    path: "/delete",
    Component: <DeleteBook />,
  },
  {
    path: "/edit",
    Component: <EditBook />,
  },
];

export const links = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/list",
  },
  {
    name: "Add book",
    icon: <AddCircleIcon />,
    link: "/add",
  },
  {
    name: "Delete book",
    icon: <DeleteIcon />,
    link: "/delete",
  },
  {
    name: "Edit book",
    icon: <EditIcon />,
    link: "/edit",
  },
  {
    name: "Logout",
    icon: <ExitToAppIcon />,
    link: "/login",
  },
];