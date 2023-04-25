// // console.dir (document);
// // console. log (document. domain);
// // console. log (document .URL);
// // console. log (document.title);
// //document.title = 123;
// // console.log (document. doctype);

// console.log (document. head);
// console. log (document.body) ;
// console.log(document.all);
// console.log (document.al1[101]);
// document.all[10]. textcontent = 'Hello';
// // console.log (document. forms [0]) ;
// console. log(document. links);
// // console.log (document. images);

// //I GETELEMENTBYID //
// // console.log (document. getElementById("header-title'));
// const headerTitle = document .getElementById('header-title')
// console.log (headerTitle);
// // headerTitle. textContent = 'Hello';
// headerTitle.innertext = 'Goodbye';
// console.log(headerTitle. innerText);
//  headerTitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// // GETELEMENTSBYCLASSNAME //
// const items = document. getElementsByClassName ('list-group-item');
// console. log(items);
// console.log (items [1]);
// items [1].textContent = 'Hello 2';
// items [1].style.fontWeight = 'bold';
// items [1].style.backgroundColor = 'yellow';
// // Gives error
// //items.style.backgroundColor = '#f4f4f4';
// for(let i = 0; i < items. length; i++){
// items [i].style.backgroundColor = '#f4f4f4'
// }
// //I GETELEMENTSBYTAG
// // const li = document. getElementsByTagName('li');
// // console.log(li);
// //console.log (li[1]);
// // li[1].textContent = 'Hello 2';
// // li[1].style. fontweight = 'bold';
// // li[1].style.backgroundcolor = 'yellow';
// // Gives error
// //items.style.backgroundColor = '#f4f4f4';
// // for(let i = 0; 1 ‹ li. length; i++){
// // li[i].style.backgroundColor = '#f4f4f4';
// //}
// // QUERYSELECTOR //
// const header = document. querySelector ('#main-header');

// header .style.borderBottom = 'solid 4px #cCC';
// const input = document . querySelector ('input');
// input.value = 'Hello World'
// const submit = document. querySelector ('input [type="submit"]');
// submit.value="SEND"
// const item = document. querySelector(' .list-group-item');
// item.style.color = 'red'
// const lastItem = document. querySelector('list-group-item:last-child');
// lastItem.style.color = 'blue'
// const secondItem = document. querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
//  //QUERYSELECTORALL //
// const titles = document. querySelectorAl1(' title');
// console.log(titles);
// titles [0].textContent = 'Hello';
// const odd = document. querySelectorall('li:nth-child(odd)');
// const even= document. querySelectorAl1 ('li:nth-child(even) ');

// for(let i = 0; i < odd.length; i++){
// odd[i].style.backgroundColor = '#f4f4f4';
// even [i].style.backgroundcolor = '#cCc'
//}

// TRAVERSING THE DOM //
// const itemlist = document.querySelector ('#items');
// // parentNode
// // console.log (itemList.parentNode);
// // itemlist.parentNode.style.backgroundColor='#f4f4f4';
// // console.log (itemList.parentNode .parentNode .parentNode) ;

// // parentElement
// // console. log(itemList.parentElement);
// // itemlist.parentElement.style.backgroundColor='#f4f4f4';
// // console. log (itemList.parentElement.parentElement.parentElement)

// // childNodes

// // console.log (itemList.childNodes);
// console.log (itemList.children);
// console. log(itemList.children [1]);
// itemList.children[1].style.backgroundColor = 'yellow';
// // FirstChild
// console.log(itemList.firstChild);
// // firstElementchild
// console. log(itemList.firstElementchild)




// const button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e){
//     // console.log('Button clicked');
//     // document.getElementById('header-title').textContent = 'Changed'
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
//     // console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
// }

// const output = document. getElementById('output');
// output.innerHTML = '‹h3>'+e.target.id+'</h3>';
// console. log(e. type);
//console.log(e.clientx);
//console.log (e.clientY);
//console.log(e.offsetx);
//console.log (e.offsetY);
// console.log(e.altkey);
// console.log(e.ctrlKey);
// // console.log(e.shiftkey);
// const button = document.getelementById('button');
// // const box = document. getelementById('box");
// //button.addEventListener('click', runEvent);
// //button.addEventListener ('dblclick', runEvent);
// //button.addEventListener('mousedown', runEvent);
// //button.addeventListener'mouseup', runEvent);
// //box.addEventListener('mouseenter', runEvent)
// //box. addeventlistener('mouseleave' runEvent);
// //box. addEventListener ('mouseover', runEvent);
// //box.addEventlistener('mouseout', runEvent);
// box.addEventListener ('mousemove', runEvent);
// itemInput.addEventListener('keydown', runEvent) ;
// // itemInput.addEventListener ('keyup', runEvent);
// // itemInput.addEventListener('keypress', runEvent);
// // itemInput.addEventListener('focus', runEvent);
// // itemInput.addEventListener('blur', runEvent);
// // itemInput. addEventListener('cut', runEvent);
// // itemInput.addEventListener('paste', runEvent);
// // itemInput.addEventListener('input', runEvent);
// form.addEventListener ('submit', runEvent);
// function runEvent (e){
// e.preventDefault ();
// console. log('EVENT TYPE: '+e. type);
// //console.log(e.target.value);
// document. getelementById('output').innerHTML= '<h3>' +e.target .value+ '</h3>';
// output.innerHTML = '<h3>MouseX: '+e.offsetx+' </h3><h3>MouseY: '+e.offsetY+'</h3>'
// // document.body.style.backgroundColor = "rgb ("+e.offsetX"+"e.offsetY+", 40)";
// }

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    const newItem = document.getElementById('item').value

    const li = document.createElement('li')
    li.className = "list-group-item"

    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li)
}