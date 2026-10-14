/* ==========================================================
   NOVATECH SOLUTIONS — Main JavaScript
   Company Website Assessment | 3LOGY Bootcamp 2026
   ========================================================== */

/**
 * ============================================================
 * TABLE OF CONTENTS
 * ============================================================
 * 1. DOM ELEMENTS
 * 2. MOBILE NAVIGATION TOGGLE
 * 3. ACTIVE NAV LINK HIGHLIGHT
 * 4. SCROLL EFFECTS (Back to Top, Navbar shadow)
 * 5. CONTACT FORM VALIDATION
 * 6. SERVICE ACCORDION / TABS (Services page)
 * 7. PORTFOLIO FILTER (Portfolio page)
 * 8. UTILITY FUNCTIONS
 * ============================================================
 */


// ==========================================================
// 1. DOM ELEMENTS
// ==========================================================

// TODO: Cache your DOM elements here
// Example:
// const menuToggle = document.getElementById('menu-toggle');
// const navMenu = document.getElementById('nav-menu');
// const contactForm = document.getElementById('contact-form');


// ==========================================================
// 2. MOBILE NAVIGATION TOGGLE
// ==========================================================

// TODO: Add click event to the hamburger button
// - Toggle a class (e.g., 'active') on the nav menu
// - Toggle a class on the hamburger to animate it
// - Close the menu when a nav link is clicked


// ==========================================================
// 3. ACTIVE NAV LINK HIGHLIGHT
// ==========================================================

// TIP: The active class is already set in the HTML for each page.
// If you want to do this dynamically with JS instead, you can
// compare window.location.pathname with each link's href.


// ==========================================================
// 4. SCROLL EFFECTS
// ==========================================================

// TODO (OPTIONAL): Add scroll event listener for:
// - Adding a shadow to the navbar when user scrolls down
// - Showing a "Back to Top" button after scrolling 300px


// ==========================================================
// 5. CONTACT FORM VALIDATION
// ==========================================================

// TODO: Add submit event listener to the contact form
// Validate:
// - Full Name: must not be empty
// - Email: must not be empty + must match a basic email pattern
// - Subject: must not be empty
// - Message: must not be empty
//
// Display errors using the .form-error spans below each input.
// Prevent form submission if validation fails.
//
// Basic email regex pattern:
// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// ==========================================================
// 6. SERVICE ACCORDION / TABS (Services page only)
// ==========================================================

// TODO: Implement ONE of the following on services.html:
//
// OPTION A — Accordion:
// - Each service has a clickable header
// - Clicking expands/collapses the detail content
// - Only one service open at a time (or allow multiple)
//
// OPTION B — Tabs:
// - Tab buttons at the top for each service
// - Clicking a tab shows that service's detailed content
// - Hide all other services
//
// OPTION C — Modal:
// - Each service card has a "Learn More" button
// - Clicking opens a modal/overlay with full service details
// - Include a close button

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(function (header) {

    header.addEventListener("click", function () {

        const accordionItem = header.parentElement;

        accordionItem.classList.toggle("active");

    });

});


// ==========================================================
// 7. PORTFOLIO FILTER (Portfolio page only — OPTIONAL)
// ==========================================================

// TODO (OPTIONAL): Filter portfolio items by category
// - Add data-category attributes to each portfolio card
// - Add click events to filter buttons
// - Show/hide cards based on selected category
// - "All" button shows everything


// ==========================================================
// 8. UTILITY FUNCTIONS
// ==========================================================

// TODO: Add any helper functions you need
// Examples:
// - function showError(inputId, message) { ... }
// - function clearErrors() { ... }
// - function scrollToTop() { ... }


// ==========================================================
// INITIALIZATION — Run when DOM is ready
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Call your initialization functions here
    // Example:
    // initMobileNav();
    // initScrollEffects();
    // initContactForm();
    // initServiceAccordion();

    console.log('NovaTech Solutions — Website Loaded ✅');
});

document.addEventListener('DOMContentLoaded', function () {

    initMobileNav();

    initContactForm();

    initServiceAccordion();

    initFaqAccordion();

    initScrollToTop();

    initNavScroll();

    initPortfolioFilter();

    initPortfolioModal();

    initDarkMode();

    initSmoothScroll();

    initTypingEffect();

});


/* =========================================
   MOBILE NAVIGATION
========================================= */

function initMobileNav() {

    const toggle = document.getElementById('menu-toggle');

    const menu = document.getElementById('nav-menu');

    if (!toggle || !menu) return;


    toggle.addEventListener('click', function () {

        const open = menu.classList.toggle('active');

        toggle.classList.toggle('active', open);

        toggle.setAttribute(
            'aria-expanded',
            String(open)
        );

        document.body.classList.toggle(
            'no-scroll',
            open
        );

    });


    menu.querySelectorAll('.nav-link').forEach(function (link) {

        link.addEventListener('click', function () {

            menu.classList.remove('active');

            toggle.classList.remove('active');

            toggle.setAttribute(
                'aria-expanded',
                'false'
            );

            document.body.classList.remove(
                'no-scroll'
            );

        });

    });

}


/* =========================================
   CONTACT FORM
========================================= */

function initContactForm() {

    const form = document.getElementById(
        'contact-form'
    );

    if (!form) return;


    const fields = {

        name: {
            input: document.getElementById(
                'full-name'
            ),

            error: document.getElementById(
                'name-error'
            ),

            message:
                'Please enter your full name.'
        },


        email: {
            input: document.getElementById(
                'email'
            ),

            error: document.getElementById(
                'email-error'
            ),

            message:
                'Please enter a valid email address.'
        },


        subject: {
            input: document.getElementById(
                'subject'
            ),

            error: document.getElementById(
                'subject-error'
            ),

            message:
                'Please enter a subject.'
        },


        message: {
            input: document.getElementById(
                'message'
            ),

            error: document.getElementById(
                'message-error'
            ),

            message:
                'Please enter a message (at least 10 characters).'
        }

    };


    const success =
        document.getElementById(
            'form-success'
        );


    function validateField(field) {

        if (!field.input || !field.error) {
            return true;
        }


        const value =
            field.input.value.trim();


        let valid = true;


        if (
            field.input.id ===
            'full-name'
        ) {

            valid =
                value.length >= 2;

        }


        else if (
            field.input.id ===
            'email'
        ) {

            valid =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                    value
                );

        }


        else if (
            field.input.id ===
            'subject'
        ) {

            valid =
                value.length > 0;

        }


        else if (
            field.input.id ===
            'message'
        ) {

            valid =
                value.length >= 10;

        }


        field.error.textContent =
            valid
                ? ''
                : field.message;


        field.input.classList.toggle(
            'invalid',
            !valid
        );


        field.input.setAttribute(
            'aria-invalid',
            String(!valid)
        );


        return valid;

    }


    Object.values(fields).forEach(
        function (field) {

            if (!field.input) return;


            field.input.addEventListener(
                'input',
                function () {

                    validateField(field);

                }
            );

        }
    );


    form.addEventListener(
        'submit',
        function (event) {

            event.preventDefault();


            if (success) {

                success.classList.remove(
                    'show'
                );

            }


            const valid =
                Object.values(fields)
                    .map(validateField)
                    .every(Boolean);


            if (!valid) {

                const firstInvalid =
                    form.querySelector(
                        '.invalid'
                    );


                if (firstInvalid) {

                    firstInvalid.focus({
                        preventScroll: true
                    });

                }


                if (firstInvalid) {

                    firstInvalid.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });

                }


                return;

            }


            form.reset();


            Object.values(fields).forEach(
                function (field) {

                    if (field.error) {

                        field.error.textContent =
                            '';

                    }


                    if (field.input) {

                        field.input.classList.remove(
                            'invalid'
                        );

                    }

                }
            );


            if (success) {

                success.classList.add(
                    'show'
                );


                success.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

            }

        }
    );

}


/* =========================================
   SERVICES ACCORDION
========================================= */

function initServiceAccordion() {

    const items =
        document.querySelectorAll(
            '.service-accordion .accordion-item'
        );


    if (!items.length) return;


    items.forEach(function (item) {

        const header =
            item.querySelector(
                '.accordion-header'
            );


        if (!header) return;


        header.addEventListener(
            'click',
            function () {

                const wasActive =
                    item.classList.contains(
                        'active'
                    );


                items.forEach(
                    function (other) {

                        other.classList.remove(
                            'active'
                        );


                        const button =
                            other.querySelector(
                                '.accordion-header'
                            );


                        if (button) {

                            button.setAttribute(
                                'aria-expanded',
                                'false'
                            );

                        }

                    }
                );


                if (!wasActive) {

                    item.classList.add(
                        'active'
                    );


                    header.setAttribute(
                        'aria-expanded',
                        'true'
                    );

                }

            }
        );

    });

}


/* =========================================
   FAQ ACCORDION
========================================= */

function initFaqAccordion() {

    const items =
        document.querySelectorAll(
            '.faq-list .accordion-item'
        );


    if (!items.length) return;


    items.forEach(function (item) {

        const header =
            item.querySelector(
                '.accordion-header'
            );


        if (!header) return;


        header.addEventListener(
            'click',
            function () {

                const open =
                    item.classList.toggle(
                        'active'
                    );


                header.setAttribute(
                    'aria-expanded',
                    String(open)
                );

            }
        );

    });

}


/* =========================================
   SCROLL TO TOP
========================================= */

function initScrollToTop() {

    const button =
        document.getElementById(
            'scroll-top-btn'
        );


    if (!button) return;


    window.addEventListener(
        'scroll',
        function () {

            button.classList.toggle(
                'visible',
                window.scrollY > 300
            );

        },
        {
            passive: true
        }
    );


    button.addEventListener(
        'click',
        function () {

            window.scrollTo({

                top: 0,

                behavior: 'smooth'

            });

        }
    );

}


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

function initNavScroll() {

    const header =
        document.getElementById(
            'main-header'
        );


    if (!header) return;


    const update =
        function () {

            header.classList.toggle(
                'scrolled',
                window.scrollY > 50
            );

        };


    update();


    window.addEventListener(
        'scroll',
        update,
        {
            passive: true
        }
    );

}


/* =========================================
   PORTFOLIO FILTER
========================================= */

function initPortfolioFilter() {

    const buttons =
        document.querySelectorAll(
            '.filter-btn'
        );


    const cards =
        document.querySelectorAll(
            '.portfolio-card'
        );


    if (
        !buttons.length ||
        !cards.length
    ) {

        return;

    }


    buttons.forEach(
        function (button) {

            button.addEventListener(
                'click',
                function () {

                    const filter =
                        button.dataset.filter;


                    buttons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                'active'
                            );

                        }
                    );


                    button.classList.add(
                        'active'
                    );


                    cards.forEach(
                        function (card) {

                            const show =
                                filter === 'all' ||
                                card.dataset.category ===
                                    filter;


                            card.classList.toggle(
                                'hidden',
                                !show
                            );

                        }
                    );

                }
            );

        }
    );

}


/* =========================================
   PORTFOLIO MODAL
========================================= */

function initPortfolioModal() {

    const modal =
        document.getElementById(
            'project-modal'
        );


    if (!modal) return;


    const title =
        document.getElementById(
            'modal-title'
        );


    const description =
        document.getElementById(
            'modal-description'
        );


    const client =
        document.getElementById(
            'modal-client'
        );


    const tech =
        document.getElementById(
            'modal-tech'
        );


    const close =
        modal.querySelector(
            '.modal-close'
        );


    const openButtons =
        document.querySelectorAll(
            '.view-details'
        );


    function openModal(card) {

        if (!card) return;


        if (title) {

            title.textContent =
                card.dataset.title || '';

        }


        if (description) {

            description.textContent =
                card.dataset.description || '';

        }


        if (client) {

            client.textContent =
                card.dataset.client || '';

        }


        if (tech) {

            tech.textContent =
                card.dataset.tech || '';

        }


        modal.classList.add(
            'open'
        );


        modal.setAttribute(
            'aria-hidden',
            'false'
        );


        document.body.classList.add(
            'no-scroll'
        );


        if (close) {

            close.focus();

        }

    }


    function closeModal() {

        modal.classList.remove(
            'open'
        );


        modal.setAttribute(
            'aria-hidden',
            'true'
        );


        document.body.classList.remove(
            'no-scroll'
        );

    }


    openButtons.forEach(
        function (button) {

            button.addEventListener(
                'click',
                function () {

                    openModal(
                        button.closest(
                            '.portfolio-card'
                        )
                    );

                }
            );

        }
    );


    if (close) {

        close.addEventListener(
            'click',
            closeModal
        );

    }


    modal.addEventListener(
        'click',
        function (event) {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );


    document.addEventListener(
        'keydown',
        function (event) {

            if (
                event.key === 'Escape' &&
                modal.classList.contains(
                    'open'
                )
            ) {

                closeModal();

            }

        }
    );

}


/* =========================================
   DARK MODE
========================================= */

function initDarkMode() {

    const toggle =
        document.getElementById(
            'dark-mode-toggle'
        );


    if (!toggle) return;


    const saved =
        localStorage.getItem(
            'theme'
        );


    if (
        saved === 'dark'
    ) {

        document.body.classList.add(
            'dark-mode'
        );

    }


    const updateLabel =
        function () {

            const dark =
                document.body.classList.contains(
                    'dark-mode'
                );


            toggle.textContent =
                dark
                    ? '☀️'
                    : '🌙';


            toggle.setAttribute(
                'aria-label',
                dark
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
            );

        };


    updateLabel();


    toggle.addEventListener(
        'click',
        function () {

            const dark =
                document.body.classList.toggle(
                    'dark-mode'
                );


            localStorage.setItem(
                'theme',
                dark
                    ? 'dark'
                    : 'light'
            );


            updateLabel();

        }
    );

}


/* =========================================
   SMOOTH SCROLL
========================================= */

function initSmoothScroll() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            function (link) {

                link.addEventListener(
                    'click',
                    function (event) {

                        const id =
                            link.getAttribute(
                                'href'
                            );


                        if (
                            !id ||
                            id === '#'
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                id
                            );


                        if (!target) return;


                        event.preventDefault();


                        const offset =
                            document.getElementById(
                                'main-header'
                            )?.offsetHeight || 0;


                        window.scrollTo({

                            top:
                                target.getBoundingClientRect()
                                    .top +
                                window.scrollY -
                                offset,

                            behavior: 'smooth'

                        });

                    }
                );

            }
        );

}


/* =========================================
   TYPING EFFECT
========================================= */

function initTypingEffect() {

    const element =
        document.getElementById(
            'typing-text'
        );


    if (!element) return;


    const words = [

        'Digital Future',

        'Innovation',

        'Growth',

        'Success'

    ];


    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;


    function type() {

        const word =
            words[wordIndex];


        charIndex +=
            deleting
                ? -1
                : 1;


        element.textContent =
            word.substring(
                0,
                charIndex
            );


        let speed =
            deleting
                ? 55
                : 100;


        if (
            !deleting &&
            charIndex === word.length
        ) {

            speed = 1600;

            deleting = true;

        }


        else if (
            deleting &&
            charIndex === 0
        ) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

            speed = 400;

        }


        window.setTimeout(
            type,
            speed
        );

    }


    type();

}
