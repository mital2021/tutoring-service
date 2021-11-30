async function logout() {
    const response = await fetch ('/api/students/logout',{
        method:'post',
        headers: {'Content-Type': 'application/json'}
    });

    if(response.ok) {
        document.location.replace('/login');
    }else{
        alert(response.statusText);
    }
}

// async function log() {
//     const response = await fetch ('/api/tutor-logout',{
//         method:'post',
//         headers: {'Content-Type': 'application/json'}
//     });

//     if(response.ok) {
//         document.location.replace('/');
//     }else{
//         alert(response.statusText);
//     }
// }

// document.querySelector('#logout').addEventListener('click', logout); 
document.getElementById('logout').addEventListener('click', logout); 