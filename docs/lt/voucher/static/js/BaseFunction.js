function confirm() {

    const a = document.getElementById("riqi");
    console.dir(a);
    const b = document.getElementById("date");
    console.dir(b);
    b.innerHTML=a.value;
    const c = document.getElementById("dingdanbianhao");
    const d = document.getElementById("order number");
    console.dir(c);
    console.dir(d);
    d.innerHTML=c.value;
    const e = document.getElementById("shangrenbianma");
    const f = document.getElementById("Merchant number");
    console.dir(e);
    console.dir(f);
    f.innerHTML=e.value;

}
function changOut(obj){
    document.getElementById("out").innerHTML=obj.value;
}