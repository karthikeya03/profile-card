function loadMainContent() {
    document.getElementById('main-content').innerHTML = `
        <div class="div1">
            <div class="profile">
                <img src="2026.png" alt="Profile Image">
            </div>
        </div>
        <div class="div2">
            <h1><span class="border">Sai Satya Karthikeya</span></h1>
            <h3><span class="text">"computer science student"</span></h3>
        </div>
        <div class="social"> 
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saisatyakarthikeya@gmail.com" class="social-mail"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://wa.me/+917013796123?text=Hello%20[Your%20name],%20I%20came%20across%20your%20profile%20and%20would%20like%20to%20connect%20with%20you%20on%20WhatsApp!"class="social-call"><i class="fa-brands fa-whatsapp" style="color: #fcf7f7;"></i></a>
            <a href="https://www.linkedin.com/in/saisatyakarthikeya" class="social-linked"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/karthikeya03" class="social-github github-link"><i class="fa-brands fa-github"></i></a>
        </div>
    `;
    addMainButtonEventListeners();
}

function addMainButtonEventListeners() {
    document.getElementById('about-btn').addEventListener('click', function() {
        document.getElementById('main-content').innerHTML = `
            <div class="section">
                <h2>Details</h2>
                <p>As a <strong>Computer Science Engineering</strong> Student,<br>
                I am dedicated to expanding my knowledge in new programming languages and exploring <strong>Various Technologies</strong>.<br><br>
                Currently, I am focusing on objectively building my skills. I am honing my expertise in <strong>Web development</strong> and <strong>AWS Cloud development</strong>.<br><br>
                Additionally, I have acquired proficiency in <strong>Programming</strong> languages such as <strong>C++</strong> and <strong>Java.</strong></p>
                <button class="back-btn">Back</button>
            </div>`;
        addBackButtonEventListener(); // Add back button listener after setting innerHTML
    });

    document.getElementById('education-btn').addEventListener('click', function() {
        document.getElementById('main-content').innerHTML = `
            <div class="section">
                <h2>Education</h2>
                &#9679;<strong> High School Education</strong> - Sri Chaitanya School (2019 - 2020) <br>
                &#9679;<strong> Secondary Education</strong> - Sri Chaitanya Junior College (2020 - 2022)<br><br>
                &#9679;<strong> B.Tech in Computer Science Engineering</strong> - Aditya University (2022 - Present)<br><br>
                <strong>Studying</strong> <span>various</span> <strong>aspects</strong> of <strong>Computer</strong> Science,
                <strong>Web Development</strong>, <span>Algorithms</span>,
                <strong>Data Structures</strong>, <span>Software Engineering</span>,
                and <strong>Machine Learning</strong>.</p>
                <button class="back-btn">Back</button>
            </div>`;
        addBackButtonEventListener(); // Add back button listener after setting innerHTML
    });

    document.getElementById('contact-btn').addEventListener('click', function() {
        document.getElementById('main-content').innerHTML = `
            <div class="section">
                <h2>Contact Information</h2>
                <p>I'm open for any <strong>Suggestion</strong> or just to have a chat</p>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span><strong>Address:<br><br></strong></span> &#9679; Surampalem &#9679; Andrapadesh &#9679; India </span>
                </div> <br>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <strong>Phone:</strong> +91 7013796123 
                </div><br>
                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <strong>Email:</strong> saisatyakarthikeya@gmail.com
                </div> <br>
                <div class="info-item">
                    <i class="fas fa-globe"></i>
                    <strong>Git Hub:</strong> <a href ="https://github.com/karthikeya03" class="github-link">/karthikeya03</a>
                </div>
                <br>
                <button class="back-btn">Back</button>
            </div>`;
        addBackButtonEventListener(); // Add back button listener after setting innerHTML
    });
}

function addBackButtonEventListener() {
    document.querySelector('.back-btn').addEventListener('click', loadMainContent);
}

// Initial setup
loadMainContent();
addMainButtonEventListeners();
