import React from 'react'

/ var Next=[[],[]]
// var dis=[[],[]]
// var INF=100
// function initialise(V,graph){
//     try {
//         for(let i = 0; i < V; i++)  
// 		    {  
// 		    for(let j = 0; j < V; j++)  
// 		    {  
// 		        dis[i][j] = graph[i][j];  
		              
// 		        // No edge between node  
// 		        // i and j  
// 		        if (graph[i][j] == INF)  
// 		            Next[i][j] = -1;  
// 		        else
// 		            Next[i][j] = j;  
// 		    }  
// 		    }  
//     } catch (error) {
        
//     }
    
// }
// function constructPath(u,v){
//     if(Next[u][v]==-1)
//         return null;
//     let arr =[]
//     arr.push(u)
//     while(u!=v){
//         u=Next[u][v];
//         arr.push(u);
//     }
//     return arr;
// }
// function floydWarshall(V,enemy){
//     try {
//         let set = new Set();
//     for(let i = 0; i < enemy.length; i++)  
//     {  
//         set.add(enemy[i])
//     }
//     for(let k = 0; k < V; k++)  
// 		    {  
// 		    for(let i = 0; i < V; i++)  
// 		    {  let count=0;
// 		        for(let j = 0; j < V; j++)  
// 		        {  
// 		              if(set.has(j)){
// 		            	  count++;
// 		              }
// 		            // We cannot travel through  
// 		            // edge that doesn't exist  
// 		            if (dis[i][k] == INF ||  
// 		                dis[k][j] == INF  )
// 		                continue;  
// 		            if (dis[i][j] > dis[i][k] +  dis[k][j])  
// 		            {  
// 		                dis[i][j] = dis[i][k] +  
// 		                            dis[k][j];  
// 		                Next[i][j] = Next[i][k];  
// 		            }  
// 		        }  
// 		    }  
// 		    }  
        
//     } catch (error) {
        
//     }
    
// }

//         function printPath(path)  
//             {  
                
//                 let n = path.length;  
//                 for(let i = 0; i < n - 1; i++)  
//                 console.log(String.fromCharCode(65+path[i]) + " -> ");  
//                 console.log(String.fromCharCode(65+path[n-1]) + "\n");  
//             }  
//         function getKey(value,myMap){
//             var flag=false;
//             var keyVal;
//             for (let key in myMap){
//                  if (myMap[key] == value){
//                      flag=true;
//                      keyVal=key;
//                      break;
//                  }
//             }
//             if(flag){
//                  return keyVal;
//             }
//             else{
//                  return false;
//             }
//         }
// function Location12(enemies){
//     try {
//         let enemy = [8,10];
//     // console.log(INF)
//     let V = 11;  
//     let graph = [[0,1,1,1,INF,INF ,INF,INF,INF,INF,INF],  
//                     [ 1, 0, INF, INF , 1, INF,INF,INF,INF,INF,INF ],  
//                     [ 1, INF, 0, INF, 1,1,INF,INF,INF,INF,INF ],  
//                     [ 1, INF, INF, 0, INF , 1,1,INF,INF,INF,INF ],
//                     [ INF, 1, 1 , INF,0, INF,INF,1,INF,INF,INF],
//                     [ INF,INF,1,1,INF,0,INF,INF,INF,INF,INF],
//                     [INF,INF,INF,1,INF,INF,0,1,INF,INF,INF,INF],
//                     [INF,INF,INF,INF,1,INF,1,0,1,1,INF],
//                     [INF,INF,INF,INF,INF,INF,INF,1,0,INF,1],
//                     [INF,INF,INF,INF,INF,INF,INF,1,INF,0,1],
//                     [INF,INF,INF,INF,INF,INF,INF,INF,1,1,0]
//                     ]; 
    
  
//     // Function to initialise the  
//     // distance and Next array  
//     initialise(V, graph);  
  
//     // Calling Floyd Warshall Algorithm,  
//     // this will update the shortest  
//     // distance as well as Next array  
//     floydWarshall(V,enemy);  
//     var path=[];  
//     let set = new Set();
//     for(let i=0;i<enemy.length;i++){
//         set.add(enemy[i]);
//     }
    
//     let m = new Map();
//     for(let i=0;i<V;i++){
        
//         if(!set.has(i)){
//             let sum=0;
//             for(let j=0;j<enemy.length;j++){
// //		    			System.out.print("Shortest path from " + i+" to "+ j );  
// //		    		    path = constructPath(i, j);  
// //		    		    printPath(path);
//                 let index=enemy[j]
//                 console.log(typeof(dis[0][0]))
//                 sum=sum+dis[i][index];
// //		    		    System.out.print(dis[i][j] + " ");
                
//             }
// //		    		System.out.println();
//             m.set(i, sum);
//         }
        
//     }
//     let min1=[];
//     // for (entry : m.entrySet()) {
//     //     if (min == null || min.getValue() > entry.getValue()) {
//     //         min = entry;
//     //     }
//     // }
//     m.forEach(function(values){
//         min1.push(values)
//     })
//     min1.sort();
//     let minimum_value=min1[0]
//     let minimum_key=getKey(minimum_value,m);


//     console.log("The suitable location to be fugitive is "+ String.fromCharCode(65+minimum_key));
// //		    System.out.println(m);
//     // Path from node 1 to 3 
//     let a=65+minimum_key;  
//     let s=String.fromCharCode(a);
    
//     for(var i=0;i<enemy.length;i++){
//         var b=65+enemy[i];  
//         var d=String.fromCharCode(b);
//         console.log("Shortest path from " + s + " to " + d + " ");  
//         path = constructPath(minimum_key, enemy[i]);  
//         printPath(path);  

//     }
 
    
//     for(let i=0;i<V;i++){
//         for(let j=0;j<V;j++){
// //		    		System.out.print(dis[i][j]);
//         }
//         // System.out.println();
//     }
//     // System.out.println();
//     for(let i=0;i<V;i++){
//         for(let j=0;j<V;j++){
// //		    		System.out.print(Next[i][j]);
//         }
//         // System.out.println();
//     }
    
        
//     } catch (error) {
//         console.log(error)
//     }
    
// }


function Location12(enemies){

}
const Basic = () => (
    
    <div>
      
      <Formik
        initialValues={{
          // toggle: false,
          checked: []
        }}
        onSubmit={async (values) => {
          await sleep(500);
        //   alert(JSON.stringify(values, null, 2));
        //   console.log(values.checked);
          Location12(values.checked)
        }}
      >
        {({ values }) => (
          <Form  className="p-2 text-center">
            {/* 
              This first checkbox will result in a boolean value being stored. Note that the `value` prop
              on the <Field/> is omitted
            */}
  
            {/* 
              Multiple checkboxes with the same name attribute, but different
              value attributes will be considered a "checkbox group". Formik will automagically
              bind the checked values to a single array for your benefit. All the add and remove
              logic will be taken care of for you.
            */}
            <div id="checkbox-group" className="h2" >Check All The Enemies</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="0" />A
              </label>
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="1" />B
              </label>
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="2" />C
              </label>
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="3" />D
              </label>
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="4" />E
              </label>
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="5" />F
              </label>
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="6" />G
              </label>
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="7" />H
              </label>
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="8" />I
              </label>
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="9" />J
              </label>
              <label>
                <Field type="checkbox" name="checked" className="p-2" style={{fontSize:"1.2em"}} value="10" />K
              </label>
             
            </div>
  
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );

export function Location() {
    /* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */


     return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12} md={12} className='fluid p-4'>
                        <Image src={require('./map.jpeg')} style={{height:'auto',width:'100%'}} rounded />
                        </Col>
                        
                    </Row>
                </Container>

                <div>
                
                <Basic/>
                </div>

            </div>
        )
    }
