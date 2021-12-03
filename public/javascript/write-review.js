async function reviewFormHandler(event) {
    event.preventDefault();

    const review = document.querySelector('#review').value.trim();
    let tutor_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    tutor_id = tutor_id.replace('?', '')
    if(review){
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({review, tutor_id}),
            headers: { 'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace(`/profile/${tutor_id}`);
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.review-form').addEventListener('submit', reviewFormHandler);