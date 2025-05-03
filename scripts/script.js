let customAmount = false;

function toggleCustomAmount() {
    let val = document.getElementById('donation-amount').value;

    if (val == 'custom') {
        if (!customAmount) {
            document.getElementById('custom-amount-section').innerHTML = `
                <label for="custom-amount">Enter Custom Amount:</label><br>
                <input type="number" id="custom-amount" name="custom-amount" placeholder="Enter amount in USD">`;

            customAmount = true;
        } else {
            document.getElementById('custom-amount-section').innerHTML = '';
            customAmount = false;
        }
    } else {
        document.getElementById('custom-amount-section').innerHTML = '';
        customAmount = false;
    }
}