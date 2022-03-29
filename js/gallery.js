/// ---------------------- Image Change ---------------------
const images = [
    {
        "image": "img1.jpg",
        "title": "Sinharaja Forest Reserve",
        "description": "Sinharaja Forest Reserve is a rainforest situated on the southwest side of Sri Lanka, which covers" +
            " an area of 111.9 km². UNESCO declared this as a world heritage.<br><br>" +
            "Over half of Sri Lanka's endemic animals and butterflies and numerous insects," +
            " reptiles, and unusual amphibians live in the Sinharaja Forest Reserve."
    },
    {
        "image": "img2.jpg",
        "title": "Galle Fort",
        "description": "Galle Fort, situated on the southwest coast of Sri Lanka, was established first by the Portuguese in 1588," +
            " then heavily reinforced by the Dutch from 1649 onwards throughout the 17th century.<br><br>" +
            "The site was established as a World Heritage Site by UNESCO because of its unique exhibition of an urban" +
            " ensemble. "
    },
    {
        "image": "img3.jpg",
        "title": "Hikkaduwa",
        "description": "Hikkaduwa is a seaside tourist town in Sri Lanka's southwest. It's noted for its strong surf and" +
            " beaches, especially Hikkaduwa Beach, lined with restaurants and cafes, and palm trees. Hikkaduwa National Park," +
            " a coral refuge and home to marine turtles and rare species is located in the shallow waters opposite Hikkaduwa Beach."
    },
    {
        "image": "img4.jpg",
        "title": "The Temple of the Sacred Tooth Relic",
        "description": "The Temple of the Sacred Tooth Relic is a Buddhist temple situated in Kandy, Sri Lanka." +
            " It is housed in the former Kingdom of Kandy's royal palace complex, which also holds the relic of Lord Buddha's tooth.<br><br>" +
            "In 1988, UNESCO declared the temple as a world-historic site, visited daily by hundreds of local and foreign" +
            " devotees and tourists. The temple, which is revered by Buddhists all around the world, is also rich in cultural significance."
    },
    {
        "image": "img5.jpg",
        "title": "Hortain Plains",
        "description": "Horton Plains National Park, established in 1988 in Sri Lanka's central highlands, is a protected" +
            " area. It contains montane grassland and cloud forest and is located in the central province of Sri Lanka." +
            " It covers the 31.6 km² area of ground. It has a lot of biodiversity, and many of the species that live here" +
            " are peculiar to the area."
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
    let image = document.getElementById("large-image");
    image.classList.add("animate");
    setTimeout(function () {
        image.src = "images/"+images[index]['image'];
        image.classList.remove("animate");
    },400);
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



/// -------------- Background Colors ------------------

let backgroundColor = document.getElementById('background-color');
let textColor = document.getElementById('text-color');
let backgroundLabel = document.getElementById('background-color-label');
let textLabel = document.getElementById('text-color-label');
let backgroundDropdown = document.getElementById('background-color-dropdown');
let textDropdown = document.getElementById('text-color-dropdown');

///for background color
backgroundColor.addEventListener('mouseover', function () {
    backgroundDropdown.style.display = "inline";
    backgroundLabel.style.display = "inline";
});

backgroundColor.addEventListener('mouseleave', function () {
    backgroundDropdown.style.display = "none";
    backgroundLabel.style.display = "none";
});


///for text color
textColor.addEventListener('mouseover', function () {
    textDropdown.style.display = "inline";
    textLabel.style.display = "inline";
});

textColor.addEventListener('mouseleave', function () {
    textDropdown.style.display = "none";
    textLabel.style.display = "none";
});

function getSelectedValue(selectList){
    return selectList[selectList.selectedIndex].value;
}

document.colors.backgroundColor.addEventListener('change', function () {
    document.getElementById('body').style.backgroundColor = getSelectedValue(this);
});

document.colors.textColor.addEventListener('change', function () {
    const textColor = getSelectedValue(this);
    document.getElementById('title2').style.color = textColor;
    document.getElementById('description').style.color = textColor;
});