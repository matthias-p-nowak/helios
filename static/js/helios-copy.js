console.log('hello world');
let codes=document.getElementsByTagName('code');
console.log("got "+ codes.length + " code fields");
for(let i=0;i<codes.length;++i){
  let ce=codes[i];
  if (ce.hasAttribute('data-lang')){
    let txt=ce.textContent;
    console.log('found something to work with: ');
    copier=document.createElement('button');
    copier.classList.add('helios-copier');
    let cspan=document.createElement('span');
    cspan.innerText="Copy";
    copier.appendChild(cspan);
    let cpbtn=document.createElement('img');
    copier.appendChild(cpbtn);
    copier.onclick=function(){
      console.log("clicked to copy");
      navigator.clipboard.writeText(txt);
      cspan.innerText="Copied";
      setTimeout(function () {
        console.log('timeout arrived');
        cspan.innerText = 'Copy';
        ce.focus();
        }, 1500);
    }
    ce.appendChild(copier);
  }
}
