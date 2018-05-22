import About from 'Components/about-component/About'
import todoList from "Components/todo-list-component/todoList";
import ImageContainerComponent from "Components/image-container-component/ImageContainerComponent";

export default [
  {
    path: '/about',
    component: About
  },
  {
    path: '/news',
    component: todoList
  },
  {
    path: '/',
    component: ImageContainerComponent
  }
]