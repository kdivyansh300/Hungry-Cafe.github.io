// //Authors : Divyansh Kumar

// //This is for in loop (This only provide index no.)
// for(let x in dishes){
//     console.log(x);
// }

// //This is for of loop (This only provides elements)
// for(let x of dishes){
//     console.log(x);
// }

// //This is for each loop (This provides elements and index no. also)
// dishes.forEach(function(element , index , Array){
//     console.log(`${element} index no. : ${index}`)
// });


// // include() this returns true or false
//     console.log(dishes.includes("rasgulla"));

// //findIndex() this returns index no. only
    // console.log(dishes.indexOf("rasgulla"));

// //find() this returns  only one elemnt
// console.log(dishes.find((element) => {
//     return element == "rasgulla";
// }));




// //Divyansh Restraunt - Application
var dishes = ['chhole bhature','bharwa bhindi','pindi chana','masala chai','samosa','kulche','panipuri','jalebi','dhokla','panjiri','ghevar','aamras','paan','kadi','jaljeera','kofte','dosa','gajar ka halwa','momo','gulab jamun','rasgulla','poha','gatte ki sabji','falooda','kheer','baati','daal','pav bhaji','aaam ka achar','shahi paneer',"mango milk shake","falooda","chaap","mango smoothie","eggless chocolate cake","cauliflower kurma","french fries","jeera water","jeeraaloo","potato sandwich","matar paneer","cold coffee","cucumber salad","brinjal curry","watermelon juice","khichdi","ginger shot","dahi vada","pine applemilk shake","eggless banana bread","tomato soup","dal fry","besan chilli","white sauce pasta","khaman dhokla","cucumber raita","pineapple juice","pizza sauce","upma","banana cake","almond milk","almond yogurt","sweet pongal","masala vada","veg kurma","ladies fingerfry","burger","peanut chutney","mushroom masala curry","veg fried rice","potato curry","bread pakora","paneer butter masala","poha","coconut chutney","tomato chutney","lemon rice","kadai paneer","laddu","poori", "pizza", "besan burfi", "roasted cashews", "paneer lababdar", "potato wedges", "carrot curry", "rabri", "perugu vada", "tandoori mushroom tikka", "ragda patties", "garlic chutney", "aloo bhujia", "baingan bharta", "bhindi do pyaza", "aloo paratha", "zucchini curry", "puran poli", "modak", "peda", "spinach curry", "zucchini stir fry", "dalia", "masala dosa", "egg salad", "paneer recipes", "soya burger with soya granules cutlet", "dal makhani", "bagara rice", "cauliflower curry", "kala chana", "sweet potato stir fry", "lemon pickle", "ghee", "thandai", "jackfruit seeds curry", "apple chutney", "rava dosa", "dill leaves", "quinoa pulao", "achari chicken", "tandoori cauliflower", "schezwan noodles", "salmon curry", "cluster beans", "sesame seeds ladoo", "eggless cupcakes", "green gram curry", "fish tikka masala", "eggless orange cake", "turmeric rice", "chicken vindaloo", "naan", "instant pot dal", "puffed rice upma", "szechuan chicken", "oatmeal pancakes", "boondi ladoo", "moong dal halwa","maggi","chowmein","pasta","masala soda","ice cream"  ];

//Get a random dish
var finddish = (dishoutput) => {
	var z = (Math.floor(Math.random() * dishes.length - 1));
    dishoutput.innerHTML = (`${dishes[z]} <br>`);
    dishoutput.style.padding = "10px";
}


//Get list of all dishes
var getalldishes = (alldishes , dishoutput) => {
    document.getElementById("alldishes").innerHTML = "";
    document.getElementById("alldishes").innerHTML += `We have ${dishes.length} dishes and last dish is ${dishes[dishes.length - 1]}. <br>`
    dishes.forEach((element , index , Array) => {
        document.getElementById("alldishes").innerHTML += (`${element} <br>`)
    })
}


//Search a dish
var search = (searchdish , searchdishoutput) => {

    //Change search dish value to lower case
    var searchdish = searchdish.value , searchdish = searchdish.toLowerCase();


    if(dishes.indexOf(searchdish) == (-1)){
    searchdishoutput.innerHTML = `Not Available <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>`;

    //Change background color to red
    searchdishoutput.style.backgroundColor  = "rgba(255,0,0,0.8)";

}
    else{

    searchdishoutput.innerHTML =  `${dishes[dishes.indexOf(searchdish)]}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134
     0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704
    0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89
     0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
  </svg>`;

    //Change background color to green
    searchdishoutput.style.backgroundColor = "rgb(0,128,0,0.8)";

    }
}
// //Find dis image
// var finddishimage = (dishimage) => dishimage.src = `https://source.unsplash.com/128x128/? ${searchdish}`

var startfilter = (filterbutton) => {
    switch (filterbutton.value) {
        case "bname":
            document.getElementById("alldishes").innerHTML = "";
            var newdishes = dishes.sort();
            document.getElementById("alldishes").innerHTML = `We have ${newdishes.length} dishes and last dish is ${dishes[dishes.length - 1]}. <br>`;
            newdishes.forEach((element , index , Array) => {
                document.getElementById("alldishes").innerHTML += (`${element} <br>`)
            })
            break;
    
        default:
            document.getElementById("alldishes").innerHTML = "";
            document.getElementById("alldishes").innerHTML = "An Error Occured!";
            break;
    }
}
const addeditem = [];
var addselecteditem = () =>{
    var l = document.getElementById("dishselect").value;
    var x = addeditem.indexOf(l);
    var g = addeditem[x];

    if(g == l){
    }
    else{
    addeditem.push(l);
    var x = addeditem.length - 1, g = addeditem[x];
    var element = document.createElement('tr');
    var tables = document.querySelector("table#addeditemtable");
    tables.appendChild(element);
    element.id = g;
    var tabledata = document.createElement("td");
    element.appendChild(tabledata);
    tabledata.innerText = `${g}`;
    var quantity = document.createElement("td");
    element.appendChild(quantity);
    var select = document.createElement("select");
    quantity.appendChild(select);
    select.id = `${g}a`;
    select.className = "addeditemslist";
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    var option3 = document.createElement("option");
    var option4 = document.createElement("option");
    var option5 = document.createElement("option");
    option1.innerText = 1;
    option2.innerText = 2;
    option3.innerText = 3;
    option4.innerText = 4;
    option5.innerText = 5;
    option1.value = 1;
    option2.value = 2;
    option3.value = 3;
    option4.value = 4;
    option5.value = 5;
    option1.selected = true;
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    document.getElementById("removebutton").hidden = false;
}
}
var checkif = () => {
    document.getElementById("addbutton").disabled = false;
    var l = document.getElementById("dishselect").value;
    var x = addeditem.indexOf(l);
    var g = addeditem[x];
    if (g == l) {
        document.getElementById("removebutton").hidden = false;
    } else {
        document.getElementById("removebutton").hidden = true;
    }
}
var removingitem = () => {
    var x = document.getElementById("dishselect").value;
    var table = document.getElementById("addeditemtable");
    var g = addeditem.indexOf(x);
    addeditem.splice(g,1)
    table.removeChild(document.getElementById(x));
    document.getElementById("removebutton").hidden = true;
    var notify = document.createElement("font");
    var div = document.getElementById("notification");
    div.appendChild(notify);
    notify.id = "fademe";
    notify.innerHTML = `<b>${x}</b> removed`;
    setTimeout(function closenotify(){
        document.getElementById("notification").removeChild(document.getElementById("fademe"));
    },1500);
}
var removeall = () =>{
    while (addeditem.length != 0) {
        var x = document.getElementById("addeditemtable");
        var poppeditem = addeditem.pop();
        x.removeChild(document.getElementById(poppeditem));
        document.getElementById("removebutton").hidden = true;
    }
}

// window.navigator.geolocation.getCurrentPosition(console.log);
var run = () =>{
    debugger;
    if(addeditem.length != 0){
        var quantity = [];
        var totalitem = [];
        for (let i = 0; i < addeditem.length; i++) {
            const element = addeditem[i];
            quantity.push(document.getElementById(`${element}a`).value);
        }
        for (let i = 0; i < addeditem.length; i++) {
            const element = addeditem[i];
            var y = quantity[i];
            var z = `${y} ${element}`;
            totalitem.push(z);
        }
        localStorage.setItem("ItemBooked",totalitem);
        window.location.href = "book.html";
    } else{
        alert('Please select at least one item');
    }
}
var getitem = () => {
    var addeditems = [];
    var addeditems = localStorage.getItem("ItemBooked");
    if (addeditems == null) {
        alert('Please select at least one item');
        window.location.href = "makemeal.html";
    } else {
        localStorage.removeItem("ItemBooked");
        console.log(addeditems);
         document.getElementById("bookeddishes").innerHTML += addeditems;
    }
}

