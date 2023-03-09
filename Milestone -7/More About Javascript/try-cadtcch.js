function error() {
    const takevalue = document.getElementById('input_value').value;
    console.log(takevalue);
    const errortag = document.getElementById('error-tag');
    try {
        const age = parseInt(takevalue);
        if (isNaN(age)) {
            throw "Please enter a number";
        } else if (age < 18) {
            throw "Bacca Kacca not allowed"
            errortag.innerHTML = 'Bacca Chele not allowed';
        }
    } catch (err) {
        console.log('error:', err)
        errortag.innerHTML = 'We have got error';
    } finally {
        console.log("all have done");
    }
}