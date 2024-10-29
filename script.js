function showCategory(category) {
    const categoryTitle = document.getElementById('category-title');
    categoryTitle.innerText = `Booking - ${category.charAt(0).toUpperCase() + category.slice(1)}`;

    // Clear previous messages
    document.getElementById('message').innerText = '';
}

document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    const message = `Ticket booked from ${from} to ${to} on ${date}.`;
    document.getElementById('message').innerText = message;

    // Optionally reset the form
    this.reset();
});
