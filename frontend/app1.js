
const folderList = document.querySelector('.folder-list');
const currentLevel = document.querySelector('.current-level');




function App() {
    let files =[];
    fetch('http://localhost:8000/')
    .then(res => res.json())
    .then(result => {
    console.log(result);
    const resultFetch = result;

        resultFetch.files.map(item => {
            console.log(item);

            let li = document.createElement('li');
            let span = document.createElement('span');
            let a = document.createElement('a');
            // li.appendChild(span);

            if(item.dir){
                li.classList.add('papka');
                li.innerHTML = item.name;
                span.classList.add('iconPapka');
                a.classList.add('forOnclick');

                li.addEventListener('click', ()=> {
                    const ul = document.querySelector('.folder-list');
                    ul.innerHTML=('');
                    // li.innerHTML=('');

                    console.log('/'+item.name);
                    fetch('http://localhost:8000/?path='+'/'+item.name)
                    .then(res => res.json())
                    .then(result => {console.log(result);
                        const resultFetch = result;
                        resultFetch.files.map(item => {
                            console.log(item)
                            let li = document.createElement('li');
                            let span = document.createElement('span');
                            let a = document.createElement('a')
                            if(item.dir){
                                li.classList.add('papka');
                                li.innerHTML = item.name;
                                span.classList.add('iconPapka');
                                a.classList.add('forOnclick');
                            }
                            if(!item.dir){
                                li.classList.add('nepapka');
                                li.innerHTML = item.name;
                                span.classList.add('iconNePapka')
                                li.appendChild(span);
                            }
                            folderList.appendChild(li);


                        })
                    })
                })

                li.appendChild(span);
                li.appendChild(a);
            }
            if(!item.dir){
                li.classList.add('nepapka');
                li.innerHTML = item.name;
                span.classList.add('iconNePapka')
                li.appendChild(span);
            }
            folderList.appendChild(li);
        })

        })}

App();