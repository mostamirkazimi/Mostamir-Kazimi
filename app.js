document.getElementById('state').style.display="block";
        let x = 1;
      function changeSize(){
        // var w =document.getElementById('nav').style.width;
       if(x % 2 == 0){
        document.getElementById('nav').style.width="100px";
        document.getElementById('input').style.display = 'none';
        document.getElementById('profile').style.border = 'none';
        document.getElementById('post').style.display = 'none';
        document.getElementById('msg').style.display = 'none';
        document.getElementById('profile').style.display = 'none';
        document.getElementById('help').style.display = 'none';
        document.getElementById('history').style.display = 'none';
        document.getElementById('title').style.display = 'none';
        document.getElementById('span').style.marginLeft = '-100px'
        document.getElementById('logo').style.marginLeft = '-80px'
        document.getElementById('span').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>

        `
document.getElementsByTagName('ul')[0].style.marginLeft = "20px"

        x++;
       }
       else{
        document.getElementById('nav').style.width="300px";
        document.getElementById('input').style.display = 'block';
        document.getElementById('post').style.display = 'block';
        document.getElementById('msg').style.display = 'block';
        document.getElementById('profile').style.display = 'block';
        document.getElementById('help').style.display = 'block';
        document.getElementById('history').style.display = 'block';
        document.getElementById('title').style.display = 'block';
        document.getElementById('span').style.marginLeft = '80px';
        document.getElementById('span').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                  </svg>
        `;
        document.getElementsByTagName('ul')[0].style.marginLeft = "5px"
        
        x++
       }

       if( w == "100px")
        document.getElementById('post').style.display = 'none';
      }

     
      function setState(){
  
   if(x % 2 == 0){
    document.getElementById('state').style.display="block";
    document.getElementById('btn').innerHTML =`
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
</svg>
    
    `;
        x++
        }
        
        else{
            document.getElementById('state').style.display="none";
            document.getElementById('btn').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
`

            x++;
        }
      }