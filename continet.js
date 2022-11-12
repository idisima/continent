
let formdiv = document.getElementById('formdiv');
let continet = document.getElementById('continet');
let country = document.getElementById('country');
let state = document.getElementById('state');
let height = document.getElementById('height');
let complexion = document.getElementById('complexion');
let wealthstatus = document.getElementById('wealthstatus');
let submitButton = document.getElementById('sub');
let sortbyinput = document.getElementById('sortbyinput')
let optionclass = document.querySelectorAll('.option')
let count = 0
let dropdown = document.getElementById('dropdown')
let wealthvalue = document.getElementById('wealthValue')
let div = document.getElementById("div")
let simivalue =''
let div2 = document.getElementById('div2')
// The empty Array

let data =[]
let arr =[]

function Harmony (continet, country, state, height, complexion, wealthstatus){
    this.continet = continet;
    this.country = country;
    this.state = state;
    this.height = height;
    this.complexion = complexion;
    this.wealthstatus = wealthstatus;
}

submitButton.addEventListener('click',(event)=>{
    if (localStorage.getItem('count')){
        count = Number(localStorage.getItem('count'));
    }
    
    let formcontinet = continet.value
    let formcountry = country.value
    let formstate = state.value
    let formheight = height.value
    let formcomplexion = complexion.value
    let formwealthstatus = wealthstatus.value
    let fetchValue;
    
    let personalDetails = new Harmony(formcontinet,formcountry,formstate,formheight,formcomplexion,formwealthstatus)
    
    let optionvalue;
    localStorage.setItem(`person${count}`,JSON.stringify(personalDetails))
    count++
    localStorage.setItem('count', count);
        

    
    event.preventDefault();
});
let getAllMembers = (()=>{
    data.length = 0
    for (let i=0; i<localStorage.length; i++){
        let person = JSON.parse(localStorage.getItem (`person${i}`));
        optionvalue = dropdown.value;
        let value ='';
        

        if(optionvalue === 'Continet'){
            value =  person.continet;
            
        }else{
            value = person.country
        }
        
        let similarValue = '';
        
        
        
    

        if(data){
            data.filter((val)=>{
                if(val === value){
                    similarValue = val
                  
                }
            })
        }
     
        if(!similarValue){
        
                data.push (value)
                let option = document.createElement('option');
                let optText = document.createTextNode(value);
                option.appendChild(optText);
                option.setAttribute('value',value)
                option.setAttribute('class','option')
                
                sortbyinput.appendChild(option);
                similarValue = ''
        }
     
          
    };
    return
})


let getCountryContinent = ()=>{
    
    let sortbyinputValue = sortbyinput.value
    console.log(sortbyinputValue)
    div.innerHTML = '';
    arr = []
    for(let i = 0; i<localStorage.length; i++){
        let fetchValue = JSON.parse(localStorage.getItem (`person${i}`));
        let value = ''
       if(optionvalue === 'Continet'){
        
            value =  fetchValue.continet;
        
            

            if(value === sortbyinputValue){
                

                

                let paragraph = document.createElement('p');
                paragraph.innerHTML = ` continent:${fetchValue.continet}, country:${fetchValue.country}, state:${fetchValue.state},
                height:${fetchValue.height}, complexion:${fetchValue.complexion}, wealthstaus${fetchValue.wealthstatus}`;
                div.append( paragraph);
                arr.push(fetchValue)
                console.log(arr)

            }
       
        }else{
        value = fetchValue.country
        if(value === sortbyinputValue){
            let paragraph = document.createElement('p');
            paragraph.innerHTML = ` continent:${fetchValue.continet}, country:${fetchValue.country}, state:${fetchValue.state},
            height:${fetchValue.height}, complexion:${fetchValue.complexion}, wealthstaus${fetchValue.wealthstatus}`;
            div.append( paragraph);
            arr.push(fetchValue)
        }
        }



        
    }
   
}
// console.log(arr)


dropdown.addEventListener('click',getAllMembers)

let cont = ()=>{
    console.log('hello')
}

sortbyinput.addEventListener('change', getCountryContinent)



let paragraph ;
let getwealthstatus = ()=>{
    div.innerHTML = '';

    
    for (let i=0; i<arr.length; i++){
    
    let wealthValueExact = wealthvalue.value
            if(arr){
                arr.filter((val)=>{
                    if(val.wealthstatus === wealthValueExact){
                        // console.log(val.wealthstatus)
                        // console.log(wealthValueExact)
                        // console.log(val)
                        
                        paragraph = document.createElement('p')
                        paragraph.innerHTML = JSON.stringify(val) 
                        paragraph.innerHTML = `wealthStatus:${arr[i].wealthstatus},`;
                        div2.append(paragraph)   
                        console.log(paragraph)             
                       
                    };
                    
                    
                })
                // console.log(arr)
              
            }
}}

wealthvalue.addEventListener('change',getwealthstatus)




