const photos = [
    {
        url : "https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o",
        descr : "Footwear"
    },
    {
        url : "https://images.unsplash.com/photo-1635585154211-2418f491ead3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        descr : "Leaf"
    },
    {
        url : "https://images.unsplash.com/photo-1635575623026-9b25cd510e4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
        descr : "Bitcoin"
    },
    {
        url : "https://images.unsplash.com/photo-1635586852489-8617f9dd6438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80",
        descr : "Pirates"
    },
    {
        url : "https://images.unsplash.com/photo-1568905096967-86c59329c561?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
        descr : "Sea"
    },
    {
        url : "https://i.picsum.photos/id/119/200/200.jpg?hmac=JGrHG7yCKfebsm5jJSWw7F7x2oxeYnm5YE_74PhnRME",
        descr : "Macbook"
    },
    {
        url : "https://i.picsum.photos/id/139/200/200.jpg?hmac=FNSPvHsHcRzKQtNxKKauJgIXpoaAufCwYvr-1w5T3R4",
        descr : "Leaf"
    },
    {
        url : "https://i.picsum.photos/id/520/200/200.jpg?hmac=gq6GVKg64GMqsvk_d6gzXZ7L1htska1jEdgBnAwm4xU",
        descr : "Bridge"
    },
    {
        url : "https://i.picsum.photos/id/553/200/200.jpg?hmac=HSLKzqqoxnajv4KjLxYSjZokWcuCCiZLGdRPUoryhXk",
        descr : "Bench"
    },
    {
        url : "https://i.picsum.photos/id/988/200/200.jpg?hmac=-lwK-i6PssD9WlUeVPDIhOxDVxlzJKeM4MgEx_fIqJg",
        descr : "Plains"
    },
    {
        url : "https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o",
        descr : "Mountains"
    },
    {
        url : "https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o",
        descr : "Mountains"
    },
    {
        url : "https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o",
        descr : "Mountains"
    },
    {
        url : "https://i.picsum.photos/id/988/200/200.jpg?hmac=-lwK-i6PssD9WlUeVPDIhOxDVxlzJKeM4MgEx_fIqJg",
        descr : "Plains"
    },
    {
        url : "https://i.picsum.photos/id/520/200/200.jpg?hmac=gq6GVKg64GMqsvk_d6gzXZ7L1htska1jEdgBnAwm4xU",
        descr : "Bridge"
    },
    {
        url : "https://i.picsum.photos/id/553/200/200.jpg?hmac=HSLKzqqoxnajv4KjLxYSjZokWcuCCiZLGdRPUoryhXk",
        descr : "Bench"
    },
    {
        url : "https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o",
        descr : "Mountains"
    }
  ];

  

  function addImage(photos) {

    var remo = document.getElementsByClassName("gallery_thumb");
    if (remo.length !=0) {
        
        var gal = document.getElementById("gallery");
        gal.innerHTML = "";
        
    }
    for (var i = 0, j= 0; i < 15; i++,j++) {
        var div = document.createElement("div");
        
        div.setAttribute("class","gallery_thumb");
        
        var imagee = document.createElement("img");
        imagee.setAttribute("src", photos[i].url);
        var label = document.createElement("div");
        label.setAttribute("class","label");
        label.innerHTML = photos[i].descr;

        div.appendChild(imagee);
        div.appendChild(label);
        
        var label1 = document.createElement("div");
        label1.setAttribute("class","icon");
        var ico = document.createElement("i");
        ico.setAttribute("class", "fas fa-long-arrow-alt-down");
        label1.appendChild(ico);

        label1.setAttribute("onclick","downloadImage('"+photos[i].url+"')");
        div.appendChild(label1);

        document.querySelector(".gallery").appendChild(div);
        
   }
  };
  window.onload = (event) => {
    addImage(photos);
  };

  function getImages(event) {
      event.preventDefault();
      var descr = document.querySelector(".input-group")[0].value.toUpperCase();
      var photos1 = new Array();
      for (let index = 0; index < photos.length; index++) {
        let descri = photos[index].descr.toUpperCase();  
        if (descri.includes(descr)) {
              photos1.push(photos[index]);
          }
      }
      addImage(photos1);
  };
  function downloadImage(url) {
    fetch(url)
    .then(response => response.blob())
    .then(blob => {
          console.log(blob);  
        const url1 = window.URL.createObjectURL(blob);
        const atag = document.createElement("a");
        atag.href = url1;
        atag.download = "File.jpg";
        document.body.appendChild(atag);
        atag.click();
        atag.remove();

    });
  };