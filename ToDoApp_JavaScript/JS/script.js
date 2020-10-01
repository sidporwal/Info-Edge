(function(){
    var task=[];

    var button_id;

    function Todo(name,time){
        this.name=name;
        this.active=true;
        this.time=time;
        this.checked=false;
    }

    document.getElementById("Add").addEventListener("click",define);

    function define(){
        var todoEl=document.getElementById("todo");
        if(todoEl.value!=""){
            let t= +new Date();
            let todo=new Todo(todoEl.value,t);
            todoEl.value=null;
            task.push(todo);
            output(task);
        }
    }


    //Rendering Optimize
    /*
    (function create_list(){
        let el=document.getElementById("output");
        el.innerHTML="<h1> tasks in the list</h1>";
        let ul=document.createElement("ul");
        el.appendChild(ul);

        document.getElementById("Add").addEventListener("click",define);

        function define(){
            var todoEl=document.getElementById("todo");
            if(todoEl.value!=""){
                let t= +new Date();
                let todo=new Todo(todoEl.value,t);
                task.push(todo);
                //output(task);
                li=create_li(ul, todo);
                ul.appendChild(li);
            }
        }
    })();
    
    function create_li(ul, obj){
        let li=document.createElement("li");
        //Add Delete Button
        let delete_btn=document.createElement("button");
        delete_btn.textContent="Delete "+obj.name;
        delete_btn.id="button-"+obj.name;
        delete_btn.addEventListener("click",function(){
            alert("Deleting Task");
            deleteTask(obj.time,task);
            if(button_id=="Active_tsk"){
                let active_task=task.filter(todo => todo.active);
                output(active_task);
            }
            else if(button_id=="Cmpltd_tsk"){
                let cmpltd_task=task.filter(todo => !todo.active);
                output(cmpltd_task);
            }
            else{
                output(task);
            }
        });
        //Add Checkbox
        let check_box=document.createElement("input");
        check_box.type="checkbox";
        check_box.checked=obj.checked;
        check_box.addEventListener("change",function(){
            if(check_box.checked){
                //alert("Task Completed");
                obj.checked=true;
                obj.active=false;
            }
            else{
                //alert("Task Resumed");
                obj.checked=false;
                obj.active=true;
            }
            if(button_id=="Active_tsk"){
                let active_task=task.filter(todo => todo.active);
                output(active_task);
            }
            else if(button_id=="Cmpltd_tsk"){
                let cmpltd_task=task.filter(todo => !todo.active);
                output(cmpltd_task);
            }
            else{
                output(task);
            }
        });
        li.appendChild(check_box);
        li.appendChild(document.createTextNode(obj.name));
        li.appendChild(delete_btn);
        return li;
    }
    */

    //All Task Button

    document.getElementById("All_tsk").addEventListener("click",function(){
        button_id=this.id;
        output(task);
    });
    
    //Active Tak Button
    document.getElementById("Active_tsk").addEventListener("click",function(){
        var active_task=task.filter(todo => todo.active);
        button_id=this.id;
        output(active_task);
    });
    
    //Completed Task Button
    document.getElementById("Cmpltd_tsk").addEventListener("click",function(){
        var cmpltd_task=task.filter(todo => !todo.active);
        button_id=this.id;
        output(cmpltd_task);
    });
    
    //sort by time
    document.getElementById("time_sort").addEventListener("click",function(){
        task.sort((a,b) => a.time - b.time);
        output(task);
    });

    //Sort by lexicographically

    document.getElementById("lex_sort").addEventListener("click",function(){
        task.sort(function(a,b){
            let x=a.name.toUpperCase();
            let y=b.name.toUpperCase();
            if(x<y){
                return -1;
            }
            if(x>y){
                return 1;
            }
            return 0;
        });
        output(task);
    });

    //Display function

    function output(arr){
        let el=document.getElementById("output");
        el.innerHTML="<h1 style='font-size: 2.5rem; color: #f9dfdf;'>"+arr.length+" tasks in the list</h1>";
        var ul=document.createElement("ul");
        ul.setAttribute('style','list-style-type: none;')
        el.appendChild(ul);
        for(let i=0;i<arr.length;i++){
            let li=document.createElement("li");
            li.setAttribute('style','margin: 1%;')
            //Add Delete Button
            let delete_btn=document.createElement("button");
            delete_btn.setAttribute('style','padding: 0.5%; font-size: 1rem; background-color: #e0cfcf; border: 0;');
            delete_btn.textContent="Delete "+arr[i].name;
            delete_btn.id="button-"+arr[i].name;
            delete_btn.addEventListener("click",function(){
                alert("Deleting Task");
                deleteTask(arr[i].time,task);
                if(button_id=="Active_tsk"){
                    let active_task=task.filter(todo => todo.active);
                    output(active_task);
                }
                else if(button_id=="Cmpltd_tsk"){
                    let cmpltd_task=task.filter(todo => !todo.active);
                    output(cmpltd_task);
                }
                else{
                    output(task);
                }
            });
            //Add Checkbox
            let check_box=document.createElement("input");
            check_box.type="checkbox";
            check_box.checked=arr[i].checked;
            check_box.addEventListener("change",function(){
                if(check_box.checked){
                    //alert("Task Completed");
                    arr[i].checked=true;
                    arr[i].active=false;
                }
                else{
                    //alert("Task Resumed");
                    arr[i].checked=false;
                    arr[i].active=true;
                }
                if(button_id=="Active_tsk"){
                    let active_task=task.filter(todo => todo.active);
                    output(active_task);
                }
                else if(button_id=="Cmpltd_tsk"){
                    let cmpltd_task=task.filter(todo => !todo.active);
                    output(cmpltd_task);
                }
                else{
                    output(task);
                }
            });
            li.appendChild(check_box);
            span=document.createElement("span");
            span.setAttribute('style','font-size: 2rem; padding: 2%; color: #731f1f;')
            span.appendChild(document.createTextNode(arr[i].name));
            li.appendChild(span);
            //li.appendChild(document.createTextNode(arr[i].name));
            li.appendChild(delete_btn);
            ul.appendChild(li);
        }
    }

    function deleteTask(val,arr){
        for(let j=0;j<arr.length;j++){
            if(arr[j].time==val){
                arr.splice(j,1);
                break;
            }
        }
    }

})();