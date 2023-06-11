let worde = document.querySelector('#wored')
let worde_ex = document.querySelector("#input")
let delet_par = document.querySelector(".delet-par")

let contanet = document.querySelector('.contanet ');
let text = document.querySelector('.text ');
let creat_div = document.querySelectorAll('.contanet .parant');
let Add_text = document.querySelector('.Add-text');
let plus_word = document.querySelector('.plus-word');
let Nub = 0
let arr = []
let arr2 = []




console.log(localStorage.getItem("Arr"));
if (localStorage.getItem("Arr")) {
    
    if (JSON.parse(localStorage.getItem('Arr')).length > 0) {
        arr = JSON.parse(localStorage.getItem('Arr'));
            Add_wored(arr[0][0], arr[0][1], 0);
        
    }else{
        document.querySelector('.lingh').innerHTML = arr.length
        document.querySelector('.inhear').innerHTML = 0;
    }

}

check()


text.addEventListener("click", (e)=>{
    e.stopPropagation()
})

plus_word.addEventListener("click", ()=>{
    document.querySelector(".add_v").classList.toggle("hidden")

})

document.querySelector('.fa-angles-right').addEventListener("click", ()=>{
    if (Nub > 0) {
        contanet.innerHTML = ""
        Nub--;            
        Add_wored(arr[Nub][0], arr[Nub][1], Nub, 'right' )
        
        }

})

document.querySelector('.fa-angles-left').addEventListener("click", ()=>{
    if (Nub < arr.length -1) {
        contanet.innerHTML = ""
            Nub++;
            Add_wored(arr[Nub][0], arr[Nub][1], Nub ,"left")
        }

})




document.addEventListener("click", e=>{
    document.querySelector(".add_v").classList.add("hidden")
    document.querySelector('.lingh').innerHTML = arr.length;
    console.log("change");

    // delet Element in the my list
    if (e.target.classList.contains("delet-par")) { 
        console.log(arr);
        arr.splice(e.target.id, 1)
        console.log(arr);
        e.target.parentElement.parentElement.remove();
        ADD_local(arr);
        if (e.target.id < arr.length -1) {
            document.querySelector(".fa-angles-left").click()
        }else if (e.target.id > 0){
            document.querySelector(".fa-angles-right").click()
        }else if(arr.length == 1){
            Add_wored(arr[0][0], arr[0][1], 0);
            document.querySelector(".fa-angles-right").click()
            document.querySelector(".fa-angles-left").click()

        }else if (arr.length == 0){
            document.querySelector('.lingh').innerHTML = arr.length
            document.querySelector('.inhear').innerHTML = 0;
         
        }

    }
    // see the explanation
    if (e.target.classList.contains("Eyes")) { 
        e.target.parentElement.parentElement.classList.toggle("active");
     e.target.classList.toggle("fa-eye")
     e.target.classList.toggle("fa-eye-slash")
    console.log(e.target);
    }
    // add the fovert wored
    if (e.target.classList.contains("fa-heart")) { 
        e.target.classList.toggle("fa-solid")
        e.target.classList.toggle("fa-regular")
    }

    check()
        
    })
    

Add_text.addEventListener("click", e=>{
    arr2 =[];
    document.querySelector(".add_v").classList.add("hidden")
    if (worde.value !=="" && worde_ex.value !== '') {
        console.log(arr);
        if (arr.length == 0) {
            Add_wored(worde.value, worde_ex.value, 0);
        }
     arr2.push(worde.value, worde_ex.value);
     arr.push(arr2);
        worde.value = "";
        worde_ex.value = "";     
         ADD_local(arr);
         check()
    } 
    
    document.querySelector('.lingh').innerHTML = arr.length
})


// ------------------(  functions  )---------------------------------------
// ------------------(  functions  )---------------------------------------

function Add_wored(wor, ex , i, cla) {
    
    // creat front and append in the continue
    let parant = document.createElement('div');
    parant.classList.add("parant", cla)
    let front = document.createElement('div');
         front.classList.add("front")
   let front_text = document.createTextNode(wor)

   front.appendChild(front_text)
   parant.appendChild(front)
   
   // creat back and append in the continue
   let back = document.createElement('div');
        back.classList.add("back")
   let back_text = document.createTextNode(ex)
   back.appendChild(back_text)
   parant.appendChild(back)
   // creat info and append in the continue
   let info =document.createElement("div");
       info.classList.add("info")
   let heart =document.createElement("i");
       heart.classList.add('fa-regular', 'fa-heart');
   let Eyes =document.createElement("i");
       Eyes.classList.add('Eyes','fa-regular','fa-eye-slash');
   let delet =document.createElement("i");
       delet.classList.add("fa-regular", "fa-trash-can", "delet-par");
       delet.id=(`${i}`)
       info.appendChild(heart)
       info.appendChild(Eyes)
       info.appendChild(delet)
       parant.appendChild(info)
   document.querySelector('.lingh').innerHTML = arr.length
   document.querySelector('.inhear').innerHTML = i + 1;
   contanet.appendChild(parant)
}
//-------- add localstorage-------------------------------

function ADD_local(Arr) {
  let MyARR = JSON.stringify(Arr) ;
  localStorage.setItem('Arr', MyARR ) ;
}

function Delet_parant (arr ) {
    
}

//--------chick-------------

function check() {
    if (Nub == arr.length -1 || arr.length == 0) {
        
        document.querySelector('.fa-angles-left').classList.add("desapol")
    }else{
        document.querySelector('.fa-angles-left').classList.remove("desapol")

    }
    
    if(Nub == 0 ){
        document.querySelector('.fa-angles-right').classList.add("desapol")
    }else{
        document.querySelector('.fa-angles-right').classList.remove("desapol")

    }


}



