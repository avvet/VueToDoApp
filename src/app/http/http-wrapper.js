import axios from "axios/index";

const BASE_URL = 'http://localhost:3000';
const DIVIDER = '/';
const TODO_PL = 'posts';


class HttpWrapperClass {
  getPostsFromArray(callback,page){
    let options={
      params:{
        page: page,
        per_page: this.perPage
      }
    };
    axios
      .get(BASE_URL + DIVIDER + TODO_PL, options)
      .then(resp => {
        console.log(resp);
        callback(resp.data);
      })
  }
}

const httpWrapper = new HttpWrapperClass();

export {httpWrapper}
