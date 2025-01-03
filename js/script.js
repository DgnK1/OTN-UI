const scrollContainer = document.querySelector('.gallery');
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const gallery = document.getElementById("gallery");
const galleryToggleBtn = document.getElementById("galleryToggleBtn");
const galleryIcon = galleryToggleBtn.querySelector("i");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 1600;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 1600;
});

// Generic function to toggle sidebar
function toggleSidebar(sidebarId, action) {
    const sidebar = document.getElementById(sidebarId);
    if (action === "open") {
        sidebar.classList.add("open");
    } else if (action === "close") {
        sidebar.classList.remove("open");
    }
}

// Event listeners for all sidebars
document.getElementById("openBtn").onclick = () => toggleSidebar("Rsidebar", "open");
document.getElementById("closeBtn").onclick = () => toggleSidebar("Rsidebar", "close");

document.getElementById("CLopenBtn").onclick = () => toggleSidebar("CLsidebar", "open");
document.getElementById("CLcloseBtn").onclick = () => toggleSidebar("CLsidebar", "close");

document.getElementById("PLopenBtn").onclick = () => toggleSidebar("PLsidebar", "open");
document.getElementById("PLcloseBtn").onclick = () => toggleSidebar("PLsidebar", "close");


// Toggle the gallery and change the icon
galleryToggleBtn.addEventListener("click", function() {
    gallery.classList.toggle("open");

    // Change the icon based on the gallery stat
    if (gallery.classList.contains("open")) {
        galleryIcon.classList.remove("fa-angles-up");
        galleryIcon.classList.add("fa-angles-down");  // Show down icon when gallery is open
    } else {
        galleryIcon.classList.remove("fa-angles-down");
        galleryIcon.classList.add("fa-angles-up");  // Show up icon when gallery is closed
    }
});