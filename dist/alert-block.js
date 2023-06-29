window.onload = function (){
    document.getElementById('button')
        ?.addEventListener('click', () => {
            alert.apply('You clicked the button')

            const paragraph = document.createElement('p')

            paragraph.textContent = 'This text should be added immediately'
            document.body.appendChild(paragraph)
    })
}