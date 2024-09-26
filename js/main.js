//Toggle sections
let sections = document.querySelectorAll('section')
let sections_id = document.querySelectorAll('.nav-item')

document.addEventListener('click', function(event) {
    const clickedDiv = event.target.closest('.nav-item')

    if(clickedDiv && clickedDiv.getAttribute('id')){
        change(clickedDiv)
    }
})

function change(obj){
    const id = obj.getAttribute('id')

    if(!id) return

    //Hide all sections
    sections.forEach(section_class => section_class.classList.add('hidden'))
    sections_id.forEach(section => section.classList.remove('active'))

    let section = document.querySelector(`.${id}`)
    obj.classList.add('active')

    if(!section) return

    section.classList.remove('hidden')

}

//Toggle popup attributes

// Select all images inside divs with the class "column"
const images= document.querySelectorAll('.column img')

// Add event listener to each image for hover (mouseover)
images.forEach(image => {
    image.addEventListener('mouseover', function(){
        let id = this.getAttribute('id')
        let modal_body = document.querySelector('.modal-body')
        id = Number(id) - 1
        modal_body.innerHTML = 'Name: ' + contents[id].name + '<br> Size: '
         + contents[id].size + '<br> Medium: ' + contents[id].medium + 
         '<br> Year: ' +contents[id].year + '<br> Framed: ' + contents[id].framed
        // Set the attributes when the image is hovered over
        // this.setAttribute('data-bs-toggle', 'tooltip');
        // this.setAttribute('data-bs-placement', 'top');
        // this.setAttribute('data-bs-custom-class', 'custom-tooltip');
        // this.setAttribute('data-bs-title', 'Click to view details');
        this.setAttribute('data-bs-toggle', 'modal');
        this.setAttribute('data-bs-target', '#Popup');
      
    })
})

//clicking contant me

function click_(id){
    console.log('test')
    const btn = document.querySelector(`#${id}`)
    btn.click()
}

let contents = [
    { name: 'Ayao', size: '8.3 x 11.7 inches', medium: 'Acrylic on Paper', year: '2022', framed: 'Yes', Desc: ''},
    { name: 'Radiant Reverie', size: '8.3 x 11.7 inches', medium: 'Acrylic on Paper', year: '2022', framed: 'Yes', Desc: ''},
    { name: 'Lady in a frame', size: '11.7 x 16.5 inches', medium: 'Acrylic on Paper', year: '2022', framed: 'No', Desc: ''},
    { name: 'Radiant Essence', size: '11.7 x 16.5 inches', medium: 'Acrylic on Paper', year: '2022', framed: 'No', Desc: ''},
    { name: 'Luminous Soul', size: '8.3 x 11.7 inches', medium: 'Acrylic on Paper', year: '2022', framed: 'Yes', Desc: ''},
    { name: 'Winter Night', size: '10.5 x 7.5 inches', medium: 'Acrylic on Canvas', year: '2020', framed: 'No', Desc: ''},
    { name: 'Faces of Transition', size: ' inches', medium: 'Acrylic on Canvas', year: '2021', framed: 'No', Desc: ''},
    { name: 'A new world', size: '8.3 x 11.7 inches', medium: 'Acrylic on Paper', year: '2021', framed: 'No', Desc: ''},
    { name: 'Tranquil Waterfall', size: '12 x 9 inches', medium: 'Acrylic on Canvas', year: '2020', framed: 'No', Desc: ''},
    { name: 'Galaxy Above', size: '15 x 10.5 inches', medium: 'Acrylic on Canvas', year: '2020', framed: 'No', Desc: ''},
    { name: 'Tranquility in Green', size: '12 x 9 inches', medium: 'Acrylic on Canvas', year: '2020', framed: 'No', Desc: ''},
    { name: 'Celebration of Femininity', size: '11.7 x 16.5 inches', medium: 'Acrylic on Paper', year: '2023', framed: 'No', Desc: ''},
    { name: 'Azure Awakening', size: '11.7 x 16.5 inches', medium: 'Acrylic on Paper', year: '2023', framed: 'No', Desc: ''},
    { name: 'Kpop Princess', size: '8.3 x 11.7 inches', medium: 'Acrylic on Paper', year: '2023', framed: 'No', Desc: ''},
    { name: 'She Watches', size: '4.1 x 5.8 inches', medium: 'Acrylic on Paper', year: '2024', framed: 'No', Desc: ''},
    { name: 'Pink Lady', size: '4.1 x 5.8 inches', medium: 'Acrylic on Paper', year: '2024', framed: 'No', Desc: ''},
    { name: 'A Bloom Crowns Her Thought', size: '9.7 x 13.9 inches', medium: 'Acrylic and Oil on Canvas', year: '2023', framed: 'No', Desc: ''},
    { name: 'Blooming Serenity', size: '9.7 x 13.9 inches', medium: 'Acrylic and Oil on Canvas', year: '2023', framed: 'No', Desc: ''},
    { name: 'Luminous Flight', size: '8.3 x 11.7 inches', medium: 'Acrylic on Paper', year: '2022', framed: 'No', Desc: ''},
]