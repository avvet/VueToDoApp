import axios from "axios/index";

const BASE_URL = 'http://localhost:3000';
const DIVIDER = '/';
const TODO_PL = 'posts';


class HttpWrapperClass {
  getPostsFromArray(callback,page){
    let options = {
      params:{
        page: page,
        per_page: this.perPage,
      }
    };
    axios
      .get(BASE_URL + DIVIDER + TODO_PL, options)
      .then(resp => {
        console.log(resp);
        callback(resp.data);
      })
  }

  getPostById(postId, callback) {
    let options = {
      params:{
        '_start': +postId,
        '_end': +postId + 1

      }
    };
    axios
      .get('http://localhost:3000/posts', options)
      .then(resp => {
        callback(resp.data[0], resp.headers['x-total-count'])
      })
      .catch(err => {
        console.log(err);
      })
  }
}

const httpWrapper = new HttpWrapperClass();

export {httpWrapper}
