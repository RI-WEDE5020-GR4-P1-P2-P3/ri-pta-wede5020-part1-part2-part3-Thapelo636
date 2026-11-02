document.addEventListener('DOMContentLoaded', function () {

    let cart = [];
    const cartCount = document.getElementById('cartCount');
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeModal = document.querySelector('.close-modal');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(button => {
        button.addEventListener('click', function () {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));

            cart.push({ name, price });
            updateCart();
            alert(name + " has been added to your cart!");
        });
    });

    function updateCart() {
        if (cartCount) cartCount.textContent = cart.length;
        if (cartItemsList) {
            cartItemsList.innerHTML = '';
            let total = 0;
            cart.forEach((item, index) => {
                total += item.price;
                const li = document.createElement('li');
                li.innerHTML = `${item.name} - R${item.price} <button onclick="removeItem(${index})" style="color:red; background:none; border:none; cursor:pointer;">X</button>`;
                cartItemsList.appendChild(li);
            });
            if (cartTotal) cartTotal.textContent = total;
        }
    }

    window.removeItem = function(index) {
        cart.splice(index, 1);
        updateCart();
    };

    if (cartBtn && cartModal) {
        cartBtn.addEventListener('click', () => cartModal.style.display = 'block');
    }
    if (closeModal && cartModal) {
        closeModal.addEventListener('click', () => cartModal.style.display = 'none');
    }
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
            if (cart.length === 0) {
                alert("Your cart is empty!");
            } else {
                alert("Thank you for your purchase! Your order has been placed.");
                cart = [];
                updateCart();
                cartModal.style.display = 'none';
            }
        });
    }

    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(img => {
        img.addEventListener('click', function () {
            if (lightboxModal) {
                lightboxModal.style.display = 'block';
                lightboxImg.src = this.src;
                lightboxCaption.textContent = this.alt;
            }
        });
    });

    if (closeLightbox && lightboxModal) {
        closeLightbox.addEventListener('click', () => lightboxModal.style.display = 'none');
    }

    const mapElement = document.getElementById('map');
    if (mapElement && typeof L !== 'undefined') {
        const farmMap = L.map('map').setView([-25.7479, 28.2293], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(farmMap);

        L.marker([-25.7479, 28.2293]).addTo(farmMap)
            .bindPopup('<b>Mvelo Fresh Farm</b><br>Visit us for organic produce!')
            .openPopup();
    }

    const searchInput = document.getElementById('productSearch');
    const productCards = document.querySelectorAll('.product-card');

    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const query = e.target.value.toLowerCase().trim();

            productCards.forEach(card => {
                const productName = card.getAttribute('data-name');
                if (productName.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const type = document.getElementById('enquiryType').value;
            const quantity = document.getElementById('quantity').value;
            const responseBox = document.getElementById('enquiryResponse');

            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('phoneError').textContent = '';
            document.getElementById('typeError').textContent = '';
            document.getElementById('quantityError').textContent = '';

            if (name === '') {
                document.getElementById('nameError').textContent = 'Please enter your full name.';
                isValid = false;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            if (phone.length < 10 || isNaN(phone)) {
                document.getElementById('phoneError').textContent = 'Please enter a valid phone number (at least 10 digits).';
                isValid = false;
            }

            if (type === '') {
                document.getElementById('typeError').textContent = 'Please select an enquiry type.';
                isValid = false;
            }

            if (quantity === '' || quantity <= 0) {
                document.getElementById('quantityError').textContent = 'Please enter a valid quantity.';
                isValid = false;
            }

            if (isValid) {
                let estimatedCost = 0;
                if (type === 'Vegetables') estimatedCost = quantity * 30;
                else if (type === 'Fruit') estimatedCost = quantity * 40;
                else if (type === 'Eggs') estimatedCost = quantity * 60;

                responseBox.style.display = 'block';
                if (type === 'Volunteer') {
                    responseBox.innerHTML = `Thank you ${name}! We have received your request to volunteer. Our farm coordinator will email you shortly at ${email}.`;
                } else {
                    responseBox.innerHTML = `Thank you ${name}! Your bulk order enquiry for ${quantity} unit(s) of ${type} has been processed. Estimated total: R${estimatedCost}.`;
                }
                enquiryForm.reset();
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            let isValid = true;

            const cName = document.getElementById('contactName').value.trim();
            const cEmail = document.getElementById('contactEmail').value.trim();
            const cSubject = document.getElementById('subject').value.trim();
            const cMessage = document.getElementById('message').value.trim();
            const cResponseBox = document.getElementById('contactResponse');

            document.getElementById('cNameError').textContent = '';
            document.getElementById('cEmailError').textContent = '';
            document.getElementById('cSubjectError').textContent = '';
            document.getElementById('cMessageError').textContent = '';

            if (cName === '') {
                document.getElementById('cNameError').textContent = 'Please enter your name.';
                isValid = false;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!cEmail.match(emailPattern)) {
                document.getElementById('cEmailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            if (cSubject === '') {
                document.getElementById('cSubjectError').textContent = 'Please enter a subject.';
                isValid = false;
            }

            if (cMessage === '') {
                document.getElementById('cMessageError').textContent = 'Please type your message.';
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            } else {
                cResponseBox.style.display = 'block';
                cResponseBox.innerHTML = `Opening your mail application to send message from ${cEmail}...`;
            }
        });
    }

});