
const form = document.querySelector(".feedback-form");

form.addEventListener('input', saveInput);

const showInput = JSON.parse(localStorage.getItem('feedback-form-state'));
if (showInput){
   form.elements.email.value = showInput.email;
    form.elements.message.value = showInput.message;
}

function saveInput() {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    
}

form.addEventListener('submit', (event) => {

    event.preventDefault();
    
        if (form.elements.email.value.trim() === "" || form.elements.message.value.trim() === "") {
            alert("All fields must be filled");
            return;
    }
    const showSubmit = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(showSubmit);
      
    localStorage.removeItem('feedback-form-state')
    form.reset()
            
})



// rysitch Import from gallery

// DEFAULT EXPORT is used really rarely. It has to be only ONE default file
// import { galleryItems } from './gallery-items';

// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// // import { sum as fnSum, add} from './02-video'; /// we changed the name with AS
// // import * as data from './02-video'   /// * = all
// // const sum = 10;
// // console.log(galleryItems);
// // console.log(sum);
// // console.log(fnSum(4, 5));
// // console.log(add(2,2));
// // console.log(data.add(2,3));


// import value from './02-video';
// import {add,sum} from './02-video';
// console.log(add(2,3));
// console.log(sum(5,5));
// console.log(value);
