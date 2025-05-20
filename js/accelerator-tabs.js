const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// event listener Tab menu
tabs.forEach( (tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
    tabs.forEach((tab) => {
        // deactivate all tabs
       tab.children[0].classList.remove(
        'border-epicGreen',
        'border-b-4',
        'md-border-b-0',
        'text-epicGreen',
        'font-bold',

       )
    })

    // hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'))

    // activate new tab and panel based on the target (data-target=panel-1)
    e.target.classList.add('border-epicGreen','border-b-4','text-epicGreen','font-bold')
    
    const classString = e.target.getAttribute('data-target')

   document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden')
}


