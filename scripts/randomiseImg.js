function randImgHeader(number) {
    let randNum = Math.floor(Math.random() * number) + 1;
    console.log(randNum);
    document.getElementById("imgHead").src = "../outros/images/headers/head" + randNum + ".png";
}

