function showCountries() {
    let xhr = new XMLHttpRequest()
    
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true)

    xhr.onload=function(){

      if(xhr.status == 200){
        console.log("success")
        let countries= JSON.parse(this.response)
        console.log(countries)
        countries.forEach(country => {
            const countryCard = document.createElement('div')
            const countryCardImage = document.createElement('img')
            countryCardImage.src = country.flags.png
            countryCard.innerHTML = country.name.common
            countryCard.appendChild(countryCardImage)
            document.getElementById('feed').appendChild(countryCard)
            
        })
      }

    }

    xhr.send()

}

var btn=document.getElementById("btn1");
	btn.onclick=function(){

            alert("Check the console please."); 
            btn.disabled = "disabled";  
            return(showCountries());
	}




