console.log("signup file");

fetch("http://localhost:5000/signup", {
  method: "POST",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
