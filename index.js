// Button click event
let button = document.getElementById("calculate");

button.addEventListener("click", () => {
    // Get the input values and ensure they are numbers
    let totaltaka = parseFloat(document.getElementById("totalTaka").value);
    let remainder = parseFloat(document.getElementById("remainder").value);

    // Meal inputs
    const alifMeal = parseFloat(document.getElementById("Alif").value);
    const alhazMeal = parseFloat(document.getElementById("Alhaz").value);
    const rifatMeal = parseFloat(document.getElementById("Rifat").value);
    const aaridMeal = parseFloat(document.getElementById("Aarid").value);
    const mostafaMeal = parseFloat(document.getElementById("Mostafa").value);

    // Meal output elements
    let alif = document.getElementById("alif");
    let alhaz = document.getElementById("alhaz");
    let rifat = document.getElementById("rifat");
    let aarid = document.getElementById("aarid");
    let mostafa = document.getElementById("mostafa");

    // Variables for calculations
    let spentMoney;
    let totalmeal;

    // Check if any input values are invalid (NaN)
    if (isNaN(totaltaka) || isNaN(remainder) || isNaN(alifMeal) || isNaN(alhazMeal) || isNaN(rifatMeal) || isNaN(aaridMeal) || isNaN(mostafaMeal)) {
        alert("Please enter valid numeric values for all fields.");
        return;  // Exit the function if any input is invalid
    }

    // Calculate total spent money and total meal count
    spentMoney = totaltaka - remainder;
    totalmeal = alifMeal + alhazMeal + rifatMeal + aaridMeal + mostafaMeal;

    // Avoid division by zero
    if (totalmeal === 0) {
        alert("Total meal count cannot be zero.");
        return;  // Exit if total meal is zero
    }

    // Calculate the share for each person and display the result
    alif.textContent = "Alif Bhai: " + ((spentMoney / totalmeal) * alifMeal).toFixed(2);
    alhaz.textContent = "Alhaz: " + ((spentMoney / totalmeal) * alhazMeal).toFixed(2);
    rifat.textContent = "Rifat: " + ((spentMoney / totalmeal) * rifatMeal).toFixed(2);
    aarid.textContent = "Aarid: " + ((spentMoney / totalmeal) * aaridMeal).toFixed(2);
    mostafa.textContent = "Mostafa: " + ((spentMoney / totalmeal) * mostafaMeal).toFixed(2);
});
