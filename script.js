async function  fetchdata(){
    try{
        var berwerydata = await fetch("https://api.openbrewerydb.org/breweries")
        var berwery = await berwerydata.json()
        
        berwery.forEach(element => {
            var card = document.createElement("div")
            //card.style.width ="3%"
            card.style.backgroundColor ="Aquamarine"
            card.style.marginBottom = "5px"
            card.style.marginRight = "5px"
            card.innerText = element.name
            var box = document.createElement("div")
            box.innerText = element.brewery_type
            card.appendChild(box)
            var place = document.createElement("div")
            place.innerText =element.address_2
            box.appendChild(place)
            var place2 = document.createElement("div")
            place2.innerText = element.address_3
            place.appendChild(place2)
            var door = document.createElement("div")
             door.innerText = element.phone
             place2.appendChild(door)
             var book = document.createElement("div")
             book.innerText = element.website_url
            door.appendChild(book)
            
            document.getElementById("brewery").appendChild(card)
            
        });
    } catch (error) {
        console.log(error)
    }
}
    
fetchdata()