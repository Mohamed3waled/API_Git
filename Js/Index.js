let myBtn = document.querySelector("button");
let Search = document.querySelector("input");
let display = document.getElementById('ContainerData');
let st
myBtn.addEventListener("click", async function () {
  let Request = await fetch(`https://api.github.com/users/${Search.value}/repos`)
  let F_req = await Request.json()
  for(let i = 0 ; i <F_req.length; i++) {
    // Div Container 
    let Div_Container = document.createElement('Div')
    Div_Container.classList.add('Container_Display')

    // Name Repo
    let h5 = document.createElement('h5');
    let text_h5 = document.createTextNode(`${F_req[i].name}`)
    h5.appendChild(text_h5) 
    Div_Container.appendChild(h5)

    // Links

    let parentLi = document.createElement('div')
    parentLi.classList.add('parentLi');
    Div_Container.appendChild(parentLi)

    let View = document.createElement('a')
    let text_view = document.createTextNode('View')
    View.appendChild(text_view)

    View.setAttribute('href' , `https://${Search.value}.github.io/${F_req[i].name}`)
    View.setAttribute('target' , "_blank")

    let Down = document.createElement('a')
    let Down_Text = document.createTextNode("Download")
    Down.appendChild(Down_Text)
    Down.setAttribute('href' , `https://github.com/${Search.value}/${F_req[i].name}/archive/refs/heads/main.zip`)

    parentLi.appendChild(Down)
    parentLi.appendChild(View)
    display.appendChild(Div_Container)
  }
});

