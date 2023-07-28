var getData = localStorage.getItem("userName");
console.log(getData);
welcome.innerHTML = `Welcome ${getData}`;