async function studentFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#student-firstname').value.trim();
    const last_name = document.querySelector('#student-lastname').value.trim();
    const email = document.querySelector('#student-email').value.trim();
    const password = document.querySelector('#student-password').value.trim();
    const verify = document.querySelector('#student-verify').value.trim();

    if (first_name && last_name && email && password && verify && password === verify) {
        const response = await fetch('/api/students', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    }
}

async function tutorFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#tutor-firstname').value.trim();
    const last_name = document.querySelector('#tutor-lastname').value.trim();
    const email = document.querySelector('#tutor-email').value.trim();
    const password = document.querySelector('#tutor-password').value.trim();
    const verify = document.querySelector('#tutor-verify').value.trim();

    if(first_name && last_name && email && password && verify && password === verify) {
        const response = await fetch('/api/tutors', {
            method: 'post',
            body: JSON.stringify ({
                first_name,
                last_name,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/login');
        }else{ 
            alert(response.statusText);
        }
    }
}



document.querySelector('.student-form').addEventListener('submit', studentFormHandler);
document.querySelector('.tutor-form').addEventListener('submit',tutorFormHandler);


