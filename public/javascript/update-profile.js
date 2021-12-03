

async function updateFormHandler(event) {
    event.preventDefault();

    const subject = document.querySelector('#subject').value.trim();
    const hourly_rate = document.querySelector('#hourly_rate').value.trim();
    const description = document.querySelector('#description').value.trim();
    const interest = document.querySelector('#interest').value.trim();
    const career = document.querySelector('#career').value.trim();
    const id = document.querySelector('#id').innerHTML;

    const response = await fetch(`/api/tutors/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            subject,
            hourly_rate,
            description,
            interest,
            career
        }),
        headers: {'Content-Type': 'application/json'}
    });

    console.log(response)

    if (response.ok) {
        console.log('tutor updated');
        document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}


document.querySelector('.update-form').addEventListener('submit', updateFormHandler);