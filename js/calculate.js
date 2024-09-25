// Helper function for adding click event listeners
function addClickListener(buttonId, callback) {
    document.getElementById(buttonId).addEventListener('click', callback);
}

// General donation button handler
function handleDonationButton(buttonId, amountId, totalId, account, cause) {
    addClickListener(buttonId, function(event) {
        event.preventDefault();
        if (handleDonation(amountId, totalId, account, buttonId, cause)) {
            toggleModal();
        }
    });
}

// Add donation button click handlers
document.addEventListener('DOMContentLoaded', function () {
    handleDonationButton('button-card-1', 'amount-card-1', 'totalDonateAmount-card-1', 'my-account', 'Flood at Noakhali, Bangladesh');
    handleDonationButton('button-card-2', 'amount-card-2', 'totalDonateAmount-card-2', 'my-account', 'Flood Relief in Feni, Bangladesh');
    handleDonationButton('button-card-3', 'amount-card-3', 'totalDonateAmount-card-3', 'my-account', 'Aid for Injured in Quota Movement');

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

// Helper function for toggling sections
function toggleSection(activeButtonId, inactiveButtonId, showSectionId, hideSectionId) {
    document.getElementById(activeButtonId).style.backgroundColor = '#B4F461';
    document.getElementById(inactiveButtonId).style.backgroundColor = '';

    document.getElementById(showSectionId).classList.remove('hidden');
    document.getElementById(hideSectionId).classList.add('hidden');
}
