const images = [
    {
        "image": "img1.jpg",
        "title": "Sigiriya",
        "description": "Made by King Kashyapa"
    },
    {
        "image": "img2.jpg",
        "title": "Galle Fort",
        "description": "Situated in Galle"
    },
    {
        "image": "img3.jpg",
        "title": "Nuwara Eliya",
        "description": "Made by King Kashyapa"
    },
    {
        "image": "img4.jpg",
        "title": "Yala National Park",
        "description": "Made by King Kashyapa"
    },
    {
        "image": "img5.jpg",
        "title": "Horton Plains",
        "description": "Made by King Kashyapa"
    }
];

const titleAnimation = anime({
    targets: '#title1,#title2',
    translateY: 25,
    opacity: [0,1],
});

const descriptionAnimation = anime({
    targets: '#description',
    opacity: [0,1],
    delay: 500,
    duration:3000
});

function changeImage(index){
    document.getElementById("large-image").src = "images/"+images[index]['image'];
    document.getElementById("title1").innerHTML = images[index]['title'];
    document.getElementById("title2").innerHTML = images[index]['title'];
    document.getElementById("description").innerHTML = images[index]['description'];
    titleAnimation.restart();
    descriptionAnimation.restart();
}

//set default image and description on window load
window.addEventListener('load', function (){
    changeImage(0);
});

//getting selected image value
function getRadioValue(radioArray){
    for(let i=0;i<radioArray.length; i++){
        if (radioArray[i].checked){
            return radioArray[i].value;
        }
    }
    return "";
}

//change large image when selecting each thumbnail
document.thumbnails.addEventListener('change', function () {
    const img = getRadioValue(document.thumbnails.thumbnail);
    changeImage(img);
});





/// -------------- Background Colors

///for background color
document.getElementById('background-color').addEventListener('mouseover', function () {
    document.colors.backgroundColor.style.display = "inline";
    document.getElementById('background-color-label').style.display = "inline";
});

document.getElementById('background-color').addEventListener('mouseleave', function () {
    document.colors.backgroundColor.style.display = "none";
    document.getElementById('background-color-label').style.display = "none";
});


///for text color
document.getElementById('text-color').addEventListener('mouseover', function () {
    document.colors.textColor.style.display = "inline";
    document.getElementById('text-color-label').style.display = "inline";
});

document.getElementById('text-color').addEventListener('mouseleave', function () {
    document.colors.textColor.style.display = "none";
    document.getElementById('text-color-label').style.display = "none";
});


function getSelectedValue(selectList){
    return selectList[selectList.selectedIndex].value;
}

document.colors.backgroundColor.addEventListener('change', function () {
    document.getElementById('right-side').style.backgroundColor = getSelectedValue(this);
});

document.colors.textColor.addEventListener('change', function () {
    const textColor = getSelectedValue(this);
    document.getElementById('title2').style.color = textColor;
    document.getElementById('description').style.color = textColor;
});