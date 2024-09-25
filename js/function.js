// Function to handle donations
function handleDonation(donationInputId, totalDonateId, accountBalanceId, buttonId, causeName) {
    const donationAmount = parseFloat(document.getElementById(donationInputId).value);
    const totalDonateAmount = parseFloat(document.getElementById(totalDonateId).innerText);
    const accountBalance = parseFloat(document.getElementById(accountBalanceId).innerText);

    // Validate donation amount
    if (!validateDonationAmount(donationAmount)) return false;

    // Check for sufficient balance
    if (!hasSufficientBalance(accountBalance, donationAmount)) return false;

    // Update balances and clear input
    updateBalances(donationInputId, totalDonateId, accountBalanceId, donationAmount, totalDonateAmount, accountBalance);

    // Add donation to history
    addToHistory(donationAmount, causeName);

    return true;
}

// Function to validate donation amount
function validateDonationAmount(amount) {
    if (isNaN(amount)) {
        alert('Please enter a valid number!');
        return false;
    }

    if (amount <= 0) {
        alert('Please enter a positive donation amount!');
        return false;
    }

    return true;
}

// Function to check if the account has enough balance
function hasSufficientBalance(accountBalance, donationAmount) {
    if (accountBalance < donationAmount) {
        alert('Insufficient balance!');
        return false;
    }
    return true;
}

// Function to update the total donation and account balance
function updateBalances(donationInputId, totalDonateId, accountBalanceId, donationAmount, totalDonateAmount, accountBalance) {
    const newTotalDonate = totalDonateAmount + donationAmount;
    const newAccountBalance = accountBalance - donationAmount;

    document.getElementById(totalDonateId).innerText = `${newTotalDonate} BDT`;
    document.getElementById(accountBalanceId).innerText = `${newAccountBalance} BDT`;

    document.getElementById(donationInputId).value = ''; // Clear the input field
}

// Function to add donation history entry
function addToHistory(amount, causeName) {
    const historySection = document.getElementById('historySection');
    const donationTime = new Date().toLocaleString();

    const historyEntry = document.createElement('div');
    historyEntry.classList.add(
        'border', 'w-full', 'md:w-1/2', 'text-center', 'rounded-2xl', 'p-5',
        'bg-gray-100', 'shadow-md', 'mt-4'
    );

    historyEntry.innerHTML = `
        <div class="flex flex-col justify-center items-center w-full text-center space-y-4">
            <h1 class="font-bold text-lg md:text-xl">
                <span>${amount}</span> Taka is donated for <span>${causeName}</span>
            </h1>
            <p class="font-semibold text-sm md:text-base text-gray-500">
                Date: ${donationTime}
            </p>
        </div>
    `;

    historySection.appendChild(historyEntry); // Add entry to history
}

// Function to toggle the modal visibility
function toggleModal() {
    const modal = document.getElementById('donationModal');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
}

// Function to add click event listeners in bulk
function addClickListener(buttonId, callback) {
    document.getElementById(buttonId).addEventListener('click', callback);
}

// Function to handle section toggle
function toggleSection(activeButtonId, inactiveButtonId, showSectionId, hideSectionId) {
    document.getElementById(activeButtonId).style.backgroundColor = '#B4F461';
    document.getElementById(inactiveButtonId).style.backgroundColor = '';

    document.getElementById(showSectionId).classList.remove('hidden');
    document.getElementById(hideSectionId).classList.add('hidden');
}

// Initialize event listeners on DOM content loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add donation button click handlers
    addClickListener('button-card-1', function (event) {
        event.preventDefault();
        if (handleDonation('amount-card-1', 'totalDonateAmount-card-1', 'my-account', 'button-card-1', 'Flood at Noakhali, Bangladesh')) {
            toggleModal();
        }
    });

    addClickListener('button-card-2', function (event) {
        event.preventDefault();
        if (handleDonation('amount-card-2', 'totalDonateAmount-card-2', 'my-account', 'button-card-2', 'Flood Relief in Feni, Bangladesh')) {
            toggleModal();
        }
    });

    addClickListener('button-card-3', function (event) {
        event.preventDefault();
        if (handleDonation('amount-card-3', 'totalDonateAmount-card-3', 'my-account', 'button-card-3', 'Aid for Injured in Quota Movement')) {
            toggleModal();
        }
    });

    // Blog button click handler
    addClickListener('blogButton', function () {
        window.location.href = 'FAQ.html';
    });

    // Section toggle functionality
    addClickListener('donationButton', function () {
        toggleSection('donationButton', 'historyButton', 'donationSection', 'historySection');
    });

    addClickListener('historyButton', function () {
        toggleSection('historyButton', 'donationButton', 'historySection', 'donationSection');
    });
});
