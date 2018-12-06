import axios from "axios";

export const getList = () => {
  return axios
    .get("https://brincellopeztodolist.herokuapp.com/api/tasks", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
  /*.then(data => {
      console.log(data);
    });*/
};

export const addToList = term => {
  return axios
    .post(
      "https://brincellopeztodolist.herokuapp.com/api/task",
      {
        title: term,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};

export const deleteItem = term => {
  axios
    .delete(`https://brincellopeztodolist.herokuapp.com/api/task/${term}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateItem = (term, id) => {
  return axios
    .put(
      `https://brincellopeztodolist.herokuapp.com/api/task/${id}`,
      {
        title: term,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};
