
    function dataRemove(){
        let a= document.getElementById('txtbox').value;
        let mylen=a.length;
        let ans=a.slice(0,mylen-1);
        document.getElementById('txtbox').value=ans;
        
    }