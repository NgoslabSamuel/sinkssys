function showModal(name, jobTitle, department, email, address, phone) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalJobTitle').innerText = jobTitle;
    document.getElementById('modalDepartment').innerText = department;
    document.getElementById('modalEmail').innerText = email;
    document.getElementById('modalAddress').innerText = address;
    document.getElementById('modalPhone').innerText = phone;
    document.getElementById('employeeModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('employeeModal').classList.add('hidden');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show button when scrolled down
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollButton');
    if (window.scrollY > 300) {
        scrollButton.classList.remove('hidden');
    } else {
        scrollButton.classList.add('hidden');
    }
});

// Add click event to the button
document.getElementById('scrollButton').addEventListener('click', scrollToTop);
