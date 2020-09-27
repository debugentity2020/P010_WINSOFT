const express=require('express');
const router=express.Router();
router.post('/decrypt',function(req,res){

    var key = req.body.key;
    var input = req.body.msg;
    
    /* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var Decryption = (function () {
function Decryption() {
}
Decryption.sortString = function (inputString) {
    var tempArray = (inputString).split('');
    /* sort */ (function (l) { l.sort(); })(tempArray);
    return tempArray.join('');
};
Decryption.main = function (args) {
    
    var key1 = Decryption.sortString(key);
    
    var k = 0;
    var decrypt = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
        return null;
    }
    else {
        var array = [];
        for (var i = 0; i < dims[0]; i++) {
            array.push(allocate(dims.slice(1)));
        }
        return array;
    } }; return allocate(dims); })([(input.length / key.length | 0), key.length]);
    for (var i = 0; i < key.length; i++) {
        {
            for (var j = 0; j < (input.length / key.length | 0); j++) {
                {
                    if (k < input.length) {
                        var c = input.charAt(k++);
                        decrypt[j][i] = c;
                    }
                    else
                        decrypt[j][i] = ' ';
                }
                ;
            }
        }
        ;
    }
    for (var i = 0; i < (input.length / key.length | 0); i++) {
        {
            for (var j = 0; j < key.length; j++) {
                {
                    // console.info(decrypt[i][j]);
                }
                ;
            }
            console.info();
        }
        ;
    }
    var key2 = (key).split('');
    var key3 = (key1).split('');
    console.info();
    var count = 0;
    var answer = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
        return null;
    }
    else {
        var array = [];
        for (var i = 0; i < dims[0]; i++) {
            array.push(allocate(dims.slice(1)));
        }
        return array;
    } }; return allocate(dims); })([(input.length / key.length | 0), key.length]);
    for (var i = 0; i < key.length; i++) {
        {
            var index = key.indexOf(key3[i]);
            for (k = 0; k < (input.length / key.length | 0); k++) {
                {
                    answer[k][index] = decrypt[k][i];
                }
                ;
            }
            var temp = (key).split('');
            temp[index] = '`';
            key = temp.join('');
        }
        ;
    }
    for (var i = 0; i < (input.length / key.length | 0); i++) {
        {
            for (var j = 0; j < key.length; j++) {
                {
                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(answer[i][j]) != '_'.charCodeAt(0))
                        console.log(answer[i][j]);
                        
                }
                ;
            }
        }
        ;
    }
    var answerString=answer.toString();
    
    console.log(answerString)
    res.status(200).json({
        data:answerString
    })
};
return Decryption;
}());
Decryption["__class"] = "Decryption";
Decryption.main(null);


});
// _____________________________________________________---------------------------
router.post('/location', function(req,res){
    var finalanswer=[]
    console.log(req.body)
    var counter=0
    const count=[]
    var enemy=req.body
    var code = (function () {
        function code() {
        }
        code.INF_$LI$ = function () { if (code.INF == null)
            code.INF = (1.0E7 | 0); return code.INF; };
        ;
        code.dis_$LI$ = function () { if (code.dis == null)
            code.dis = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return 0;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([code.MAXN, code.MAXN]); return code.dis; };
        ;
        code.Next_$LI$ = function () { if (code.Next == null)
            code.Next = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return 0;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([code.MAXN, code.MAXN]); return code.Next; };
        ;
        code.initialise = function (V, graph) {
            for (var i = 0; i < V; i++) {
                {
                    for (var j = 0; j < V; j++) {
                        {
                            code.dis_$LI$()[i][j] = graph[i][j];
                            if (graph[i][j] === code.INF_$LI$())
                                code.Next_$LI$()[i][j] = -1;
                            else
                                code.Next_$LI$()[i][j] = j;
                        }
                        ;
                    }
                }
                ;
            }
        };
        
        code.constructPath = function (u, v) {
            if (code.Next_$LI$()[u][v] === -1)
                return null;
            var path = ([]);
            /* add */ 
            (path.push(u) );
            while ((u !== v)) {
                {
                    u = code.Next_$LI$()[u][v];
                    /* add */ (path.push(u));
                }
            }
            ;
            
            // setArr([
            //     ...arr,
            //     {
            //         id:v,
            //         path:path
            //     }
            // ])
            count.push(path);
            console.log(count.length);
            
            
            if(counter==0){
                let string='The suitable location to be fugitive is '+String.fromCharCode(65 + count[0][0])
                finalanswer.push(string)
                
                // var node = document.createElement("LI");
                //     var textnode = document.createTextNode(string);
                //     node.appendChild(textnode);
                //     document.getElementById("myList").appendChild(node);
            }
            counter++;
            if(counter==enemy.length){
            for(let i=0;i<count.length;i++){
                let answer=[]
                for(let j=0;j<count[i].length;j++){
                    if(j!=0)
                        answer.push('-->')
                    answer.push(String.fromCharCode(65 + count[i][j]))
                    
                    
                }
                // var node = document.createElement("LI");
                    // var textnode = document.createTextNode(answer.toString().replaceAll(',',''));
                    finalanswer.push(answer.toString())
                    console.log(finalanswer);
                    // node.appendChild(textnode);
                    // document.getElementById("myList").appendChild(node);
                
                
            }
            res.status(200).json({
                count:finalanswer
            })
        }
            
            return path;
        };
        code.floydWarshall = function (V, enemy) {
            var x;
            var set = ([]);
            for (var i = 0; i < enemy.length; i++) {
                {
                    /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                        s.push(e);
                        return true;
                    }
                    else {
                        return false;
                    } })(set, enemy[i]);
                }
                ;
            }
            for (var k = 0; k < V; k++) {
                {
                    for (var i = 0; i < V; i++) {
                        {
                            var count = 0;
                            for (var j = 0; j < V; j++) {
                                {
                                    if ((set.indexOf((j)) >= 0)) {
                                        count++;
                                    }
                                    if (code.dis_$LI$()[i][k] === code.INF_$LI$() || code.dis_$LI$()[k][j] === code.INF_$LI$())
                                        continue;
                                    if (code.dis_$LI$()[i][j] > code.dis_$LI$()[i][k] + code.dis_$LI$()[k][j]) {
                                        code.dis_$LI$()[i][j] = code.dis_$LI$()[i][k] + code.dis_$LI$()[k][j];
                                        code.Next_$LI$()[i][j] = code.Next_$LI$()[i][k];
                                    }
                                }
                                ;
                            }
                        }
                        ;
                    }
                }
                ;
            }
        };
        code.printPath = function (path) {
            var n = path.length;
            for (var i = 0; i < n - 1; i++) {
                // console.info(String.fromCharCode((65 + path[i])) + " -> ");
                
                
            }
            // console.info(String.fromCharCode((65 + path[n - 1])) + "\n");
        };
        code.main = function (args) {
            var V = 11;
            var graph = [[0, 1, 1, 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [1, 0, code.INF_$LI$(), code.INF_$LI$(), 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [1, code.INF_$LI$(), 0, code.INF_$LI$(), 1, 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [1, code.INF_$LI$(), code.INF_$LI$(), 0, code.INF_$LI$(), 1, 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [code.INF_$LI$(), 1, 1, code.INF_$LI$(), 0, code.INF_$LI$(), code.INF_$LI$(), 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [code.INF_$LI$(), code.INF_$LI$(), 1, 1, code.INF_$LI$(), 0, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), 1, code.INF_$LI$(), code.INF_$LI$(), 0, 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), 1, code.INF_$LI$(), 1, 0, 1, 1, code.INF_$LI$()], [code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), 1, 0, code.INF_$LI$(), 1], [code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), 1, code.INF_$LI$(), 0, 1], [code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), 1, 1, 0]];
            
            code.initialise(V, graph);
            code.floydWarshall(V, enemy);
            var path;
            var set = ([]);
            for (var i = 0; i < enemy.length; i++) {
                {
                    /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                        s.push(e);
                        return true;
                    }
                    else {
                        return false;
                    } })(set, enemy[i]);
                }
                ;
            }
            var m = ({});
            for (var i = 0; i < V; i++) {
                {
                    if (!(set.indexOf((i)) >= 0)) {
                        var sum = 0;
                        for (var j = 0; j < enemy.length; j++) {
                            {
                                sum += code.dis_$LI$()[i][enemy[j]];
                            }
                            ;
                        }
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i_1 = 0; i_1 < m.entries.length; i_1++)
                            if (m.entries[i_1].key.equals != null && m.entries[i_1].key.equals(k) || m.entries[i_1].key === k) {
                                m.entries[i_1].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(m, i, sum);
                    }
                }
                ;
            }
            var min = null;
            {
                var array18771 = (function (m) { if (m.entries == null)
                    m.entries = []; return m.entries; })(m);
                for (var index18770 = 0; index18770 < array18771.length; index18770++) {
                    var entry = array18771[index18770];
                    {
                        if (min == null || min.getValue() > entry.getValue()) {
                            min = entry;
                        }
                    }
                }
            }
            console.info("The suitable location to be fugitive is " + String.fromCharCode((65 + min.getKey())));
            var a = 65 + min.getKey();
            var s = String.fromCharCode(a);
            for (var i = 0; i < enemy.length; i++) {
                {
                    var b = 65 + enemy[i];
                    var d = String.fromCharCode(b);
                    console.info("Shortest path from " + s + " to " + d + " ");
                    path = code.constructPath(min.getKey(), enemy[i]);
                    code.printPath(path);
                }
                ;
            }
            for (var i = 0; i < V; i++) {
                {
                    for (var j = 0; j < V; j++) {
                        {
                        }
                        ;
                    }
                    console.info();
                }
                ;
            }
            console.info();
            for (var i = 0; i < V; i++) {
                {
                    for (var j = 0; j < V; j++) {
                        {
                        }
                        ;
                    }
                    console.info();
                }
                ;
            }
        };
        return code;
    }());
    code.MAXN = 100;
    code["__class"] = "code";
    code.Next_$LI$();
    code.dis_$LI$();
    code.INF_$LI$();
    code.main(null);
    
            
        
        
})
    




router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    if(email=='Winsoft' && password=='123'){
        return res.status(200).json({
            msg:"success"
        })
    }
    else{
        return res.status(200).json({
            msg:"fail"
        })
    }

})
module.exports=router;