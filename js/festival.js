document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const formBox = document.getElementById('formBox');

    // Add Home Button to Header if it doesn't exist
    const header = document.querySelector('header');
    if (header && !header.querySelector('.btn-home')) {
        const homeBtn = document.createElement('a');
        homeBtn.href = 'index.html';
        homeBtn.className = 'btn-home';
        homeBtn.innerHTML = '<i class="fas fa-home"></i> Home';
        // Insert as first child
        header.insertBefore(homeBtn, header.firstChild);
    }

    const greetingCard = document.getElementById('greetingCard');
    const createBtn = document.getElementById('createBtn');
    const generateBtn = document.getElementById('generateBtn');
    const newCardBtn = document.getElementById('newCardBtn');
    const shareBtn = document.getElementById('shareBtn');
    const shareModal = document.getElementById('shareModal');
    const closeModal = document.getElementById('closeModal');
    const whatsappShare = document.getElementById('whatsappShare');
    const facebookShare = document.getElementById('facebookShare');
    const twitterShare = document.getElementById('twitterShare');
    const copyLink = document.getElementById('copyLink');
    const shareUrlInput = document.getElementById('shareUrlInput');
    const copyUrlBtn = document.getElementById('copyUrlBtn');
    const nameInput = document.getElementById('nameInput');
    const greetingImage = document.getElementById('greetingImage');
    const senderName = document.getElementById('senderName');
    const randomWish = document.getElementById('randomWish');

    let currentShareUrl = '';

    // Helper to get random item from array
    function getRandomItem(array) {
        if (!array || array.length === 0) return '';
        return array[Math.floor(Math.random() * array.length)];
    }

    // Generate greeting
    function generateGreeting() {
        const name = nameInput.value.trim();
        if (!name) {
            alert("Please enter your name!");
            nameInput.focus();
            return;
        }

        // Animate form out
        formBox.style.transform = 'rotateY(90deg)';
        formBox.style.opacity = '0';

        setTimeout(() => {
            formBox.style.display = 'none';

            // Set greeting content
            if (typeof images !== 'undefined' && images.length > 0) {
                const selectedImage = getRandomItem(images);
                greetingImage.src = selectedImage;

                // Add error handling for image loading
                greetingImage.onerror = function () {
                    console.error('Failed to load image:', selectedImage);
                    // Try to use a fallback or hide the image
                    this.style.display = 'none';
                };

                // Show image when loaded
                greetingImage.onload = function () {
                    this.style.display = 'block';
                };
            }

            if (typeof wishes !== 'undefined' && wishes.length > 0) {
                randomWish.textContent = getRandomItem(wishes);
            }
            senderName.textContent = `- ${name}`;

            // Generate share URL
            currentShareUrl = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(name)}`;
            if (shareUrlInput) shareUrlInput.value = currentShareUrl;

            // Animate greeting in
            greetingCard.style.display = 'block';
            setTimeout(() => {
                greetingCard.style.transform = 'rotateY(0deg)';
                greetingCard.style.opacity = '1';
            }, 10);
        }, 500);
    }

    // Show form
    function showForm() {
        // Animate greeting out
        greetingCard.style.transform = 'rotateY(90deg)';
        greetingCard.style.opacity = '0';

        setTimeout(() => {
            greetingCard.style.display = 'none';

            // Reset form
            nameInput.value = '';

            // Animate form in
            formBox.style.display = 'block';
            setTimeout(() => {
                formBox.style.transform = 'rotateY(0deg)';
                formBox.style.opacity = '1';
                nameInput.focus();
            }, 10);
        }, 500);
    }

    // Show share modal
    function showShareModal() {
        if (shareModal) shareModal.classList.add('active');
    }

    // Close share modal
    function closeShareModal() {
        if (shareModal) shareModal.classList.remove('active');
    }

    // Copy URL to clipboard
    function copyToClipboard() {
        shareUrlInput.select();
        document.execCommand('copy');

        // Change button text temporarily
        const originalText = copyUrlBtn.textContent;
        copyUrlBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyUrlBtn.textContent = originalText;
        }, 2000);
    }

    // Share via social media
    function shareViaSocial(platform) {
        const festivalName = document.title || 'Festival';
        const text = `Check out this beautiful ${festivalName} greeting made for you!`;

        let shareUrl = '';
        switch (platform) {
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + currentShareUrl)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentShareUrl)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentShareUrl)}`;
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    }

    // Check for name in URL on load
    function checkForNameInUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const nameFromUrl = urlParams.get('name');

        if (nameFromUrl) {
            nameInput.value = nameFromUrl;
            generateGreeting();
        }
    }

    // Event Listeners
    if (generateBtn) generateBtn.addEventListener('click', generateGreeting);
    if (createBtn) createBtn.addEventListener('click', showForm);
    if (newCardBtn) newCardBtn.addEventListener('click', showForm);
    if (shareBtn) shareBtn.addEventListener('click', showShareModal);
    if (closeModal) closeModal.addEventListener('click', closeShareModal);
    if (copyUrlBtn) copyUrlBtn.addEventListener('click', copyToClipboard);
    if (copyLink) copyLink.addEventListener('click', copyToClipboard);

    if (whatsappShare) whatsappShare.addEventListener('click', () => shareViaSocial('whatsapp'));
    if (facebookShare) facebookShare.addEventListener('click', () => shareViaSocial('facebook'));
    if (twitterShare) twitterShare.addEventListener('click', () => shareViaSocial('twitter'));

    // Download greeting as image
    async function downloadGreeting() {
        try {
            // Load html2canvas dynamically if not already loaded
            if (typeof html2canvas === 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
                document.head.appendChild(script);

                await new Promise((resolve, reject) => {
                    script.onload = resolve;
                    script.onerror = reject;
                });
            }

            // Capture the greeting card
            const canvas = await html2canvas(greetingCard, {
                backgroundColor: '#ffffff',
                scale: 2, // Higher quality
                logging: false,
                useCORS: true, // Allow cross-origin images
                allowTaint: true,
                onclone: (clonedDoc) => {
                    // Hide action buttons in the cloned document
                    const actions = clonedDoc.querySelectorAll('.card-actions, .action-btns');
                    actions.forEach(el => el.style.display = 'none');
                }
            });

            // Convert to blob and download
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                const festivalName = document.title.replace(/\s+/g, '_') || 'Greeting';
                const userName = senderName.textContent.replace('- ', '').replace(/\s+/g, '_');
                link.download = `${festivalName}_${userName}_${Date.now()}.png`;
                link.href = url;
                link.click();
                URL.revokeObjectURL(url);
            });
        } catch (error) {
            console.error('Error downloading greeting:', error);
            alert('Failed to download greeting. Please try again.');
        }
    }

    // Close modal when clicking outside
    if (shareModal) {
        shareModal.addEventListener('click', (e) => {
            if (e.target === shareModal) {
                closeShareModal();
            }
        });
    }

    // Add download button listener
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadGreeting);
    }

    // Initialize
    checkForNameInUrl();
});
