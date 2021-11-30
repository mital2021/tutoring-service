async function studentFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#student-email').value.trim();
    const password =document.querySelector('#student-password').value.trim();

    if (email && password) {
        const response = await fetch('/api/students/login',{
            method:'post',
            body:JSON.stringify({
                email,
                password
            }),
            headers:{'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

}

async function tutorFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#tutor-email').value.trim();
    const password =document.querySelector('#tutor-password').value.trim();

    if(email && password) {
        const response = await fetch('/api/tutor-login',{
            method:'post',
            body:JSON.stringify({
                email,
                password
            }),
            headers:{'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/');
        }else{
            alert(response.statusText);
        }
    }

}

document.querySelector('.student-form').addEventListener('submit',studentFormHandler)
document.querySelector('.tutor-form').addEventListener('submit',tutorFormHandler)
