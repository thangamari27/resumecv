// get header Element 
let list_item = document.querySelector('.h-list');
let nav_btn = document.querySelector('.toggle-bar');
let nav_btn_icon = document.querySelector('.toggle-bar > svg');

// navbar js
nav_btn.addEventListener('click', () => {
    list_item.classList.toggle('toggle-action');
    nav_btn.classList.toggle('toggle-bar-animate');
});

// dark & light mode js
let mode = document.querySelector('.mode');
let mode_l = document.querySelector('.mode').children[0];
let mode_d = document.querySelector('.mode').children[1];
let darkmode = localStorage.getItem('dark-mode');

console.log(mode_l);
console.log(mode_d);
const darkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode','active');
    mode_l.style.display = "none";
    mode_d.style.display = "inline-block";
    
}
const lightMode = () =>{
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode',null);
    mode_d.style.display = "none";
    mode_l.style.display = "inline-block";
}
if(darkmode === 'active'){
    darkMode();

}


mode.addEventListener('click', ()=>{
    darkmode = localStorage.getItem('dark-mode')
    darkmode !== "active"?darkMode() : lightMode();
    
});


// website convert the pdf file
function downloadResumePDF() {
    const { jsPDF } = window.jspdf;

    // Use html2canvas to convert the content to an image
    html2canvas(document.querySelector(".resume-container")).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        // Calculate the image dimensions
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = 0;

        // Add the image to the PDF
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

        // Save the PDF
        pdf.save("resume.pdf");
    });
}