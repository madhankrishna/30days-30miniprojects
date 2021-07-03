const prev = document.getElementById("prev");
const next = document.getElementById("next");
const picture = document.querySelector(".picture-person");
const textTestimonial = document.querySelector(".container__content-text").getElementsByTagName("p")[0];
const personTestimonial = document.querySelector(".people-name");
const jobPerson = document.querySelector(".people-job")


const testimonials = [
    {
    name: "Tanya Sinclair",
    job: "UX Designer",
    testimonial: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    image: "./images/image-tanya.jpg"
    },
    {
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    testimonial: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    image: "./images/image-john.jpg"
    }
]

let currentTestimonial = 0;
const maxTestimonials = testimonials.length-1;


window.addEventListener("DOMContentLoaded", function () {
    console.log("dom loaded")
    changeTestimonial(currentTestimonial)
});

function changeTestimonial(index){
    picture.setAttribute('src', testimonials[index].image);
    textTestimonial.innerText = testimonials[index].testimonial;
    personTestimonial.textContent = testimonials[index].name;
    jobPerson.textContent = testimonials[index].job;
}

prev.addEventListener('click', function(e){

    currentTestimonial <= 0 ? (currentTestimonial = maxTestimonials) : currentTestimonial--;
    
    changeTestimonial(currentTestimonial)
    
})

next.addEventListener('click', function(e){

    currentTestimonial === maxTestimonials ? (currentTestimonial = 0 ) : currentTestimonial++;
    
    changeTestimonial(currentTestimonial)
})

