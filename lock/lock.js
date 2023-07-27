let cnumbers = [];
for (let a = 0; a< 4; a++) {
  cnumbers.push(Math.floor(Math.random() * 10));
  }
function getNumbers()
{



  x1 = Number(document.getElementById('1').value);
  x2 = Number(document.getElementById('2').value);
  x3 = Number(document.getElementById('3').value);
  x4 = Number(document.getElementById('4').value);
  const unumbers = [x1,x2,x3,x4];

   for (let i=0 ; i<4 ; i++)
    {
    if(cnumbers[i] === unumbers[i])
    {
        console.log('green')
        if (i==0){
        document.getElementById('1').style.background = '#14B21A' ;
        }
        else if (i==1){
            document.getElementById('2').style.background = '#14B21A' ;
            }
        else if (i==2){
                document.getElementById('3').style.background = '#14B21A' ;
            }
        else if (i==3){
                document.getElementById('4').style.background = '#14B21A' ;
            }
    }
    else if (cnumbers.includes(unumbers[i]))
    {
        console.log('yellow');
        if (i==0){
        document.getElementById('1').style.background = '#FFE500' ;
        }
        if (i==1){
            document.getElementById('2').style.background = '#FFE500' ;
            }
        if (i==2){
                document.getElementById('3').style.background = '#FFE500' ;
                }
        if (i==3){
                document.getElementById('4').style.background = '#FFE500' ;
                }
    }
    else 
    {
        console.log('red');
        if (i==0){
            document.getElementById('1').style.background = '#FF0000' ;
            }
        if (i==1){
                document.getElementById('2').style.background = '#FF0000' ;
                }
        if (i==2){
                    document.getElementById('3').style.background = '#FF0000' ;
                    }
        if (i==3){
                    document.getElementById('4').style.background = '#FF0000' ;
                    }
    }
   }
 
}
//const btn = document.querySelector("#btn")

//btn.addEventListener("click",(e)=>
//{
    
    //getNumbers();
    //e.target.className = "error"

//})


