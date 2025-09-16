function myPromise(){
	return new Promise((resolve,reject)=>{
        resolve(parseInt(document.getElementById("ip").value))
    })
}
function run(){
    myPromise().then((data)=>{
        setTimeout(() => {
            document.getElementById('output').innerText = `Result: ${data}`;
        }, 2000);
        return data
    }).then((data)=>{
        data*=2
        setTimeout(() => {
            document.getElementById('output').innerText = `Result: ${data}`;
        }, 3000);
        return data
    }).then((data)=>{
        data-=3
        setTimeout(() => {
            document.getElementById('output').innerText = `Result: ${data}`;
        }, 4000);
        return data
    }).then((data)=>{
        data/=2
        setTimeout(() => {
            document.getElementById('output').innerText = `Result: ${data}`;
        }, 5000);
        return data
    }).then((data)=>{
        data+=10
        setTimeout(() => {
            document.getElementById('output').innerText = `Final Result: ${data}`;
        }, 6000);
        return data
    })
}