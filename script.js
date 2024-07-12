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
          <a href="https://wa.me/+917013796123?text=Hello! I'm[Your%20Name],%20came%20across%20something%20interesting%20for%20you.%20Ping%20me%20back%20on%20WhatsApp!" class="social-call"><i class="fa-brands fa-whatsapp"></i></a>
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
               <p>As a Computer Science Engineering student, <br> 
I am dedicated to expanding my knowledge of new programming languages
and exploring various technologies. <br><br>
Currently, I am focusing on objectively building my skills,
honing my expertise in web development and AWS Cloud development.
<br><br>
Additionally, I have acquired proficiency in programming languages such as C++ and Java.</p>
                <br>
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
