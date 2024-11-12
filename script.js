document.addEventListener("DOMContentLoaded", function(){

const CIVI = document.querySelector('#CIVI');
const bitina = document.querySelector('#bitina');
console.log(bitina);
bitina.addEventListener("click", ()=>{
    const CV = {margin: 0.5, image:{type: 'PNG'}, filename:'helloo.pdf', jsPDF:{format:'a4'} };
    html2pdf().set(CV).from(CIVI).save();
})
});

function downloadPDF(){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const image = document.getElementById('imagePreview').src;


    

    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const input5 = document.getElementById('input5').value;


    doc.setFont('arial');
    doc.setFontSize(18);
    doc.setTextColor(200,50,80);

    doc.text(` `);





    doc.text('HTML2PDFFFFFFFFF', 100, 20);
    
    doc.setFontSize(16);
    doc.setTextColor(280,50,80);
    doc.text('input', 80, 60);
    doc.setFontSize(40);
    doc.setTextColor(0,50,150);
    doc.text(` ${input1}`, 80, 80);
    doc.text(`input3: ${input3}`, 80, 90);
    doc.text(`input4: ${input4}`, 80, 110);
    doc.text(`input5: ${input5}`, 80, 130);

    if (image !== "") {
        doc.addImage(image, 'PNG', 10, 70, 120, 100);
    }


    doc.save('Test Format.pdf');

}

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
