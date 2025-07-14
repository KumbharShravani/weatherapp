//code of sync
/*
async function sendReq(){
    const res= await fetch("")

    const data= await res.json();

    console.log(data);
}
*/


/*
function sendReq(){
    const res= fetch("")
}
res
.then(data=>data.json())
.then(data2=>{console.log(data2)})
.catch(error=>console.log(error))
*/


//api.weatherstack.com/current?access_key=79851ffaf00d1ddb562a5ce58338f114&query=New York




const apiKey="6bb97b160ae4e6d6024d285a4d5f6445"


const city=document.getElementById("city-names")

const cityinput=document.getElementById("city-input")

async function getweatherdata()


{
    if(!cityinput.value){
        alert("Enter city")
        return;
    }
    try{
        const res= await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityinput.value}`)

    const data= await res.json()

    console.log(data);

    if(!data.sucess===false){
        alert("Enter Correct City Name")
    }

    const name=data.location.name;

    const region=data.location.region;

    const country=data.location.country;

    city.innerHTML=name+region;
    }
    catch(error){
        console.log(error)
        alert("Something Went wrong")
}
}
