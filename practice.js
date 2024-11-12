





// function downloadPDF(){
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     const image = document.getElementById('imagePreview').src;


// const input1 = document.getElementById('input1').value;
// const input2 = document.getElementById('input2').value;
// const input3 = document.getElementById('input3').value;
// const input4 = document.getElementById('input4').value;
// const input5 = document.getElementById('input5').value;


// doc.setFont('arial', 'bold');
// doc.setFontSize('16');
// doc.setTextColor('red');
// doc.text('HTML2PDF', 80,20);


// doc.setFont('times', 'normal');
// doc.setTextColor(250,50,0);
// doc.text(`input 1: ${input1}`, 20,40 );

// if(image !== "" ) {
//     doc.addImage(image, 'PNG', 10,70, 120,100);
// }



// doc.save('form-data.pdf');
// }





















// Function to generate and download the PDF
// function downloadPDF() {
    

//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
    
//     // Get the values of the form inputs
//     const input1 = document.getElementById('input1').value;
//     const input2 = document.getElementById('input2').value;
//     const input3 = document.getElementById('input3').value;
//     const input4 = document.getElementById('input4').value;
//     const input5 = document.getElementById('input5').value;

//     // Get the uploaded image if available
//     const image = document.getElementById('imagePreview').src;

//     // Add header text to the PDF document
//     doc.setFont('helvetica', 'bold');
//     doc.setFontSize(16);
//     doc.setTextColor(0, 0, 0); // Set text color to black
//     doc.text('Random Form Data:', 10, 10);

//     // Add form input values with custom colors and fonts
//     doc.setFont('times', 'normal'); // Use Times New Roman font for input values
//     doc.setFontSize(12); // Set font size for the input values
//     doc.setTextColor(50, 50, 255); // Set text color to blue

//     // Input 1
//     doc.text(`Input 1: ${input1}`, 10, 20);

//     // Input 2
//     doc.setTextColor(255, 0, 0); // Set text color to red
//     doc.text(`Input 2: ${input2}`, 10, 30);

//     // Input 3
//     doc.setTextColor(0, 128, 0); // Set text color to green
//     doc.text(`Input 3: ${input3}`, 10, 40);

//     // Input 4
//     doc.setTextColor(0, 0, 255); // Set text color to blue
//     doc.text(`Input 4: ${input4}`, 10, 50);

//     // Input 5
//     doc.setTextColor(255, 165, 0); // Set text color to orange
//     doc.text(`Input 5: ${input5}`, 10, 60);

//     // Add the uploaded image to the PDF (if an image is selected)
//     if (image && image !== "") {
//         doc.addImage(image, 'PNG', 10, 70, 180, 100);  // Position and size of the image
//     }

//     // Save the PDF
//     doc.save('form-data-with-image.pdf');
// }


// Function to preview the image uploaded by the user
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = reader.result;  // Set the image source to the uploaded image
        imagePreview.style.display = 'block'; // Show the image preview
    };

    if (file) {
        reader.readAsDataURL(file); // Read the image as a data URL
    }
}


// Function to validate the form
// function validateForm() {
//     const inputs = [
//         { id: 'input1', errorId: 'error1' },
//         { id: 'input2', errorId: 'error2' },
//         { id: 'input3', errorId: 'error3' },
//         { id: 'input4', errorId: 'error4' },
//         { id: 'input5', errorId: 'error5' }
//     ];
//     let isValid = true;

//     const regex = /^[a-zA-Z0-9]+$/; // Alphanumeric regex

//     // Loop through each input and validate
//     inputs.forEach(input => {
//         const value = document.getElementById(input.id).value.trim();
//         const errorElement = document.getElementById(input.errorId);

//         if (!value) {
//             errorElement.textContent = 'This field is required.';
//             isValid = false;
//         } else if (!regex.test(value)) {
//             errorElement.textContent = 'Invalid input. Only alphanumeric characters are allowed.';
//             isValid = false;
//         } else {
//             errorElement.textContent = '';
//         }
//     });

//     return isValid;
// }
