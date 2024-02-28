// CLient Carousel 
// Need ID Clients-carousel on div with carousel class to work
const clientCarousel = document.querySelector("#clients-carousel")

let items = clientCarousel.querySelectorAll('.carousel .carousel-item')

items.forEach((item) => {
    const minPerSlide = 4 // Max number of slides
    let next = item.nextElementSibling

    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        item.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


// Screenshot Carousel 
// Need ID screenshot-carousel on div with carousel class to work
const screenshotCarousel = document.querySelector("#screenshot-carousel")

let items1 = screenshotCarousel.querySelectorAll('.carousel .carousel-item') // Save all carousel items in array

items1.forEach((item) => { //Foreach loop all items in carousel items array
    const minPerSlide = 5 // Max number of slides
    let next = item.nextElementSibling // Next == next following sibling (Returns NULL if current item is last element)
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) { // Check if next == null if true change it to first slide resetting the slide
            next = items1[0]
        }
        let cloneChild = next.cloneNode(true) // Save the next slide node(With children inside) in cloneChild
        item.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
