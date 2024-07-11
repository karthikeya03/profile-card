function loadMainContent() {
    document.getElementById('main-content').innerHTML = `
        <div class="div1">
            <div class="profile">
                <img src="E:\\HTML\\PROFILE 2\\2026.png" alt="Profile Image">
            </div>
        </div>
        <div class="div2">
            <h1><span class="border">Sai Satya Karthikeya</span></h1>
            <h3><span class="text">"computer science student"</span></h3>
        </div>
        <div class="social"> 
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saisatyakarthikeya@gmail.com" class="social-mail"><i class="fa-solid fa-envelope"></i></a>
            <a href="tel:+917013796123" class="social-call"><i class="fa-solid fa-phone"></i></a>
            <a href="https://www.linkedin.com/in/saisatyakarthikeya" class="social-linked"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/karthikeya03" class="social-github"><i class="fa-brands fa-github"></i></a>
        </div>
    `;
    addMainButtonEventListeners();
}

function addMainButtonEventListeners() {
    document.getElementById('about-btn').addEventListener('click', function() {
        document.getElementById('main-content').innerHTML = `
            <div class="section">
                <h2>Details</h2>
                <p>Details about me...</p>
                <p>Details about me...</p>
                <p>Details about me...</p>
                <p>Details about me...</p>
                <p>Details about me...</p>
                <button class="back-btn">Back</button>
            </div>
        `;
        addBackButtonEventListener();
    });

    document.getElementById('education-btn').addEventListener('click', function() {
        document.getElementById('main-content').innerHTML = `
            <div class="section">
                <h2>Education</h2>
                <p>Details about education...</p>
                <p>Details about education...</p>
                <p>Details about education...</p>
                <p>Details about education...</p>
                <p>Details about education...</p>
                <button class="back-btn">Back</button>
            </div>
        `;
        addBackButtonEventListener();
    });

    document.getElementById('contact-btn').addEventListener('click', function() {
        document.getElementById('main-content').innerHTML = `
            <div class="section">
                <h2>Contact</h2>
                <p>Details about contact...</p>
                <p>Details about contact...</p>
                <p>Details about contact...</p>
                <p>Details about contact...</p>
                <p>Details about contact...</p>
                <button class="back-btn">Back</button>
            </div>
        `;
        addBackButtonEventListener();
    });
}

function addBackButtonEventListener() {
    document.querySelector('.back-btn').addEventListener('click', loadMainContent);
}

// Initial setup
loadMainContent();
addMainButtonEventListeners();
