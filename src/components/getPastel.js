

export default function getPastel(){
    var x = 140;        // brightness
    var c = 20;         // saturation
    var y = 255-x-c;
    var color = [x,x,x];

    var change = Math.floor(Math.random()*3);
    var other = 2;

    if (change===1){
        color[1]=x+20;
        if(Math.random()<0.5){
            color[0] = x+y;
        }else{
            color[2] = x+y;
        }
    }else{
        if (change===2){
            other = 0;
        }
        color[other] = x+y;
        color[change] = Math.floor(Math.random() * y) +x;
    }

    return color;
}