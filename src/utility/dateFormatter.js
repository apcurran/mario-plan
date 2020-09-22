// Date formatting helper
function formatDate(newDate) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return new Intl.DateTimeFormat('en-US', options).format(newDate);
}

export default formatDate;