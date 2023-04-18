axios.get("https://api.github.com/search/users?q=rayhanalshorif132")
.then((response) => {
    var data = response.data.items[0];
    data = data == undefined ? "No data found" : data;
    console.log(data);
});