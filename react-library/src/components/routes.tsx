import Home from './Home';
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import BookList from './BookList';
import AddBook from './AddBook';
import EditBooks from './EditBooks';
import DeleteBook from './DeleteBook';
import EditBook from "./EditBook";
import ViewBook from './ViewBook';

export const routes = [{
  path: "/",
  Component:<Home/>,
}];

export const mainRoutes = [
  {
    path: "/",
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
    Component: <EditBooks />,
  },
  {
    path: "/edit/:id",
    Component: <EditBook />,
  },
  {
    path: "/view/:id",
    Component: <ViewBook/>
  }
];

export const links = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
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
  
  

];
export const buttonLinks = [
  {
    name: "View more",
    link: "/view",
  },
  {
    name: "Edit",
    link: "/edit",
  },
  {
    name: "Delete",
    link: "/delete",
  },

];