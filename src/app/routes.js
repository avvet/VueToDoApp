import About from 'Components/about-component/About'
import todoList from "Components/todo-list-component/todoList";
import ImageContainerComponent from "Components/image-container-component/ImageContainerComponent";
import Post from "Components/post-component/Post";

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
    component: todoList
  },
  {
    path: '/post/:id',
    name: 'post',
    props:true,
    component: Post
  }
]