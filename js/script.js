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

    axios.get(data.url)
    .then((response) => {
        var profile_data = response.data;
        let name = profile_data.name == null ? profile_data.login : profile_data.name;
        let bio = profile_data.bio == null ? "No bio found" : profile_data.bio;
        let email = profile_data.email == null ? "No email found" : profile_data.email;
        $(".name").text(name);
        $(".email").text(email);
        $(".bio").text(bio);
        $(".address").text(profile_data.location);
    });
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
