       var angle;
       var ang;
       var prevtime = 0
        function setup(){
            createCanvas(600,600)
            function angval(timeframe){
                var diff = (timeframe-prevtime)/1000
                window.requestAnimationFrame(angval)
                if(diff<0.2){
                    return
                }
                else{
                    ang = Math.random()*(0.79-0.76)+0.73
                    prevtime = timeframe
                }
            }
            window.requestAnimationFrame(angval)
        }
        function draw(){
            background(51)
            angle = ang
            translate(300,height)
            stroke(255)
            branch(150,6)
        }
        function branch(len,weight){
            strokeWeight(weight)
           line(0,0,0,-len)
           translate(0,-len)
           if(len>8){
           push()
           rotate(angle)
           branch(len*0.67,weight*0.47)
           pop()
           push()
           rotate(-angle)
           branch(len*0.67,weight*0.67)
           pop()
           push()
           rotate(angle/2)
           branch(len*0.67,weight*0.67)
           pop()
           push()
           rotate(angle/6)
           branch(len*0.67,weight*0.43)
           pop()
           }
        }
