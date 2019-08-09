const appService = {
  login(emailId,pass,callback) {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailId,
        password: pass
      })
     
    }) .then(response => response.json())
    .then(responseJson => {
      callback(responseJson)
    }).catch(error => {
      console.log(error);
      callback(false);
    });
  },
  register(emailId,pass) {
    fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailId,
          password: pass
        })
      });
  },
  getUserList(pageNum,callback) {
    fetch("https://reqres.in/api/users?page=" + pageNum, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        callback(responseJson)
      })
},
getResourceList(pageNum,callback) {
    fetch("https://reqres.in/api/unknown?page=" + pageNum, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        callback(responseJson)
      })
},
getSingleUser(id,callback) {
  fetch("https://reqres.in/api/users/" + id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET"
  })
    .then(response => response.json())
    .then(responseJson => {
      callback(responseJson)
    })
},
} 
export default appService;
