// axios.get("https://api.github.com/search/users?q=rayhanalshorif132")
// .then((response) => {
//     var data = response.data.items[0];
//     data = data == undefined ? "No data found" : data;
//     console.log(data);
// });

async function getData(url) {
    const response = await axios.get(url);
    const data = response.data.items[0];
    console.log(data);
    $(".avatar").attr("src", data.avatar_url);
    $(".name").text(data.login);
    $(".bio").text(data.bio);
    $(".followers").text(data.followers);
    $(".goto_github").attr("href", data.html_url);
}

$(function (){
    $("#username").on("keyup", function (){
        var username = $(this).val();
        if(username.length > 2){
            let url = "https://api.github.com/search/users?q="+username;
            setTimeout(() => {
                getData(url);
            }, 3000);
        }
    });

    handleGotoGithub();
});

handleGotoGithub = () =>{
    $(".goto_github").hover(function () {
        let html = `Github <i class="fa-solid fa-angles-right"></i>`
        $(this).find(".btn").html(html);
    });

    $(".goto_github").mouseleave(function () {
        let html = `<i class="fab fa-github"></i> Github`
        $(this).find(".btn").html(html);
    });
}
