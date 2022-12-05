function addit(){
    let tabu = document.getElementById('tab');
    let he1 = document.getElementById('head');
    let pric = document.getElementById('price');
    let n = document.getElementById('num')
    // let iD = document.getElementsByTagName('h3')[0].id;
    let i = 0;
    let items = n.value
    if(!(tabu.rows.namedItem('i'))){
        tabu.innerHTML += `<tr id="i"> <td> ${he1} </td>
                            <td> ${pric}</td>
                            <td id = "itm"> ${items}</td> </tr>`
    }
    else{
      e = document.getElementById("itm").innerHTML;
      document.getElementById("itm").innerHTML = parseInt(e) +1;

    }
       
    
    
    
    

}
    
        
    
    
                                                    

