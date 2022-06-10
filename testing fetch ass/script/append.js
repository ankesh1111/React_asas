
 let getData=async(url)=>{
    let res=await fetch(url)

    let data=await res.json();

    return data

 }

 let append=(data,container)=>{
     data.forEach(ele=>{

        let div=document.createElement("div")

        let p=document.createElement("p");
        let img=document.createElement("img");

        p.innerHTML=ele.title;
        img.src=ele.image;

        div.append(img,p);
        container.append(div)
    });
};

export {getData,append};