document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('.submit-btn');
    const formInputs = document.querySelectorAll('.form-control');

    flatpickr("#datePicker", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let isFormFilled = true;
        formInputs.forEach(function(input) {
            if (input.value === '') {
                isFormFilled = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (!isFormFilled) {
            alert('Please fill in all fields');
        } else {
           
            alert('Form submitted successfully!');
        }
    });
});

