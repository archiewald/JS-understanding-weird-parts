function buildFunctions() {

    var arr=[];
    for(var i=0;i<3;i++){
        arr.push(
            function(){
                console.log(i);
            }
        );
    }

    return arr;
}

function buildFunctions2() {
    
        var arr=[];
        for(var i=0;i<3;i++){
            let j = i;
            arr.push(
                function(){
                    console.log(j);
                }
            );
        }
    
        return arr;
    }
    


var fs = buildFunctions();

console.log(fs);

fs[0]();
fs[1]();
fs[2]();

var fs2 = buildFunctions2();

console.log(fs2);

fs2[0]();
fs2[1]();
fs2[2]();