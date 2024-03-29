document.addEventListener('DOMContentLoaded', function () {
    const inputGroupEmail = document.querySelector('.inputGroupEmail');
    const userAccountInput = document.getElementById('userAccount');

    // Add event listener for clicks on the document
    document.addEventListener('click', function(event) {
        // Check if the click is outside of the userAccount input and the inputGroupEmail
        if (!inputGroupEmail.contains(event.target) && event.target !== userAccountInput) {
            // If so, remove the 'active' class
            inputGroupEmail.classList.remove('active');
        }
    });

    // Add event listener to toggle 'active' class on inputGroupEmail when clicked
    inputGroupEmail.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const userAccountInput = document.getElementById('userAccount');
    const clearButton = document.querySelector('.clear');

    // Function to handle input change
    function handleInputChange() {
        clearButton.style.visibility = userAccountInput.value ? 'visible' : 'hidden';
    }

    // Add event listener to toggle clear button visibility
    userAccountInput.addEventListener('input', handleInputChange);

    // Add event listener to clear the input when clear button is clicked
    clearButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click event from reaching document
        userAccountInput.value = '';
        clearButton.style.visibility = 'hidden';
    });

    // Add event listener to hide clear button when user clicks outside input
    document.addEventListener('click', function (event) {
        if (event.target !== userAccountInput && event.target !== clearButton) {
            clearButton.style.visibility = 'hidden';
        }
    });

    // Add event listener to re-enable clear button visibility when input is clicked
    userAccountInput.addEventListener('click', function () {
        if (this.value) {
            clearButton.style.visibility = 'visible';
        }
    });
});