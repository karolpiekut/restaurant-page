function bookTable() {
    const bookTable = document.createElement('div');
    const bookTableDiv = document.createElement('div');
    bookTable.setAttribute('id', 'book-main');
    bookTableDiv.setAttribute('class', 'message');
    bookTable.appendChild(bookTableDiv);
    bookTableDiv.innerHTML = `<form id="book-form">
            <h2>Book a table</h2>
            <div id="form-row-one">
                <div class="form-field" id="guest-name-form">
                    <label class="form-label" for="guest-name">Name:</label>
                    <input type="text" id="guest-name" name="guest-name">
                </div>
                <div class="form-field" id="guest-phone-form">
                    <label class="form-label" for="guest-phone">Phone number:</label>
                    <input type="tel" id="guest-phone" name="guest-phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
                    <small class="small">Format: 123-456-7890</small>
                </div>
            </div>
            <div id="form-row-two">
                <div class="form-field" id="date-form">
                    <label class="form-label" for="date">Date:</label>
                    <input type="date" id="date" name="booking-date" value="2018-07-22" min="2018-01-01"
                           max="2018-12-31"/>
                </div>
                <div class="form-field" id="guests-form">
                    <label class="form-label" for="guests-number">Number of guests:</label>
                    <select id="guests-number" name="guests-number">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">6</option>
                        <option value="1">7</option>
                        <option value="1">8</option>
                    </select>
                </div>
            </div>
            <div class="form-field" id="text-form">
                <label class="form-label" for="special-requests">Special requests:</label>
                <input type="text" id="special-requests" maxlength="250">
            </div>
            <input id="book-button" type="submit" value="Book">
        </form>`
    return bookTable;
}

export default bookTable;