const ball=document.getElementsByClassName('ball')
        document.onmousemove=(event)=>{
            const x=event.clientX * 100 / window.innerWidth + "%"
            const y=event.clientY * 100 / window.innerHeight + "%"

            for(let i=0;i<2;i++){
                ball[i].style.left=x
                ball[i].style.top=y
                

                ball[i].style.transform=`translate( -${x},-${y})`

            }

        }