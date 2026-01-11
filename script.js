/*const buttons = document.querySelectorAll('.btn');
const panel = document.getElementById('side-panel');
const panelContent = document.getElementById('panel-content');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const panelId = btn.dataset.panel;

        panelContent.innerHTML = `
            <h2>${panelId}</h2>
            <p>Contenuto temporaneo della sezione ${panelId}.</p>
        `;

        panel.classList.add('open');
    });
});*/


const buttons = document.querySelectorAll('.btn');
const panel = document.getElementById('side-panel');
const panelContent = document.getElementById('panel-content');

/* Configurazione pannelli */
const panelsData = {
    Beginning: {
        controls: {
            fontsize: {
                defaultValue: 24,
                max: 12,
                min: 40,
               onChange: (e) => {
                    const value = e.currentTarget.value

                    console.log(value)
                }
                
            }
        },
    },

    Originals: {       
    },

    Font: {        
    },

    Interact: {        
    }
};

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const panelId = btn.dataset.panel;

        const panel = document.getElementById("side-panel")
        const groups = document.querySelectorAll("#panel-content > div")

        groups.forEach(group => {
            group.style.display = "none"
        })

        const visibleGroup = document.getElementById(panelId)
        visibleGroup.style.display = "block"

        // const data = panelsData[panelId];

        // panel.style.backgroundColor = data.color;

       /* panelContent.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.text}</p>

        `;*/

        


        panel.classList.add('open');
    });
});
