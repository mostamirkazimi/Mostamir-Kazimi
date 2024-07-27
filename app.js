let count = 1;
function StateNav(){
    if(count % 2 == 0){
    document.getElementsByTagName('nav')[0].style.width = '79px';
    document.getElementsByTagName('nav')[0].style.height = '789px';
    document.getElementById('input').style.display = 'none';
    document.getElementById('state').style.position = 'absolute';
    document.getElementById('state').style.top = '5%';
    document.getElementById('state').style.left = '70%';
    document.getElementById('title').style.display = 'none';
    document.querySelector('div.profile h3').style.display = 'none';
    document.querySelector('div.profile img').style.marginRight = '10px';
    document.getElementsByTagName('ul')[0].style.marginLeft = '10px';
    document.querySelector('nav img').style.width = '20px';
    
    for(number = 0; number<=3; number++){
        document.getElementsByTagName('a')[number].style.display = 'none';
       
        
    }

    count++;
    }
    else{
        document.getElementsByTagName('nav')[0].style.width = '274px';
    document.getElementsByTagName('nav')[0].style.height = '789px';
    document.getElementById('input').style.display = 'block';
    document.querySelector('nav img').style.width = '60px';

    document.getElementById('state').style.position = 'absolute';
    document.getElementById('state').style.top = '5%';
    document.getElementById('state').style.left = '92%';

    for(number = 0; number<=3; number++){
        document.getElementsByTagName('a')[number].style.display = 'block';
        
       
        
    }
    document.getElementById('title').style.display = 'block';
    document.querySelector('div.profile h3').style.display = 'block'
    

    count--;
    }
    
}


function setState(){
  
    if(count % 2 == 0){
    // document.querySelector('nav ul li').style.display = "none"
     document.getElementById('menu').style.display="block";
     document.getElementById('setMobile').innerHTML =`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
 </svg>
     
     `;
         count++
         
         }
         
         else{
             document.getElementById('menu').style.display="none";
             document.getElementById('setMobile').innerHTML = `
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>
 `
 
             count++;
         }
       }