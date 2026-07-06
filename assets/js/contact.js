/**
 * contact.js — Handles the contact form with EmailJS
 * 
 * HOW EMAILJS WORKS (for learning):
 * - Normally, to send an email from a website you need a backend server
 * - EmailJS is a service that lets you send emails from client-side JavaScript
 * - You set up a "template" on emailjs.com with placeholders (like {{from_name}})
 * - Your JS sends form data to EmailJS, which fills the template and sends the email
 * - Free tier: 200 emails/month — plenty for a portfolio contact form
 * 
 * SETUP STEPS (do this once):
 * 1. Go to https://www.emailjs.com/ and create a free account
 * 2. Add an Email Service (connect your Gmail or other email)
 * 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
 * 4. Copy your Service ID, Template ID, and Public Key
 * 5. Replace the placeholder values below with your real IDs
 */

// ============================================
// EMAILJS CONFIGURATION
// ============================================
// Replace these with your actual EmailJS credentials
// You get these from your EmailJS dashboard after setup

const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';    // From EmailJS > Account > API Keys
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // From EmailJS > Email Services
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // From EmailJS > Email Templates

// Initialize EmailJS with your public key
if (typeof emailjs !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

// ============================================
// FORM SUBMISSION HANDLER
// ============================================

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    // Prevent the browser's default form action (which would reload the page)
    e.preventDefault();

    // Anti-spam: check honeypot field
    // Real users never see this field (it's hidden with CSS)
    // Bots auto-fill all fields, so if it has a value = it's a bot
    const honeypot = contactForm.querySelector('[name="honeypot"]');
    if (honeypot && honeypot.value) {
      // Silently reject — don't tell the bot it was caught
      showStatus('Message sent successfully!', 'success');
      contactForm.reset();
      return;
    }

    // Disable button to prevent double-submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      // Check if EmailJS is configured
      if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        // EmailJS not set up yet — fall back to mailto link
        const name = contactForm.querySelector('[name="from_name"]').value;
        const email = contactForm.querySelector('[name="from_email"]').value;
        const subject = contactForm.querySelector('[name="subject"]').value;
        const message = contactForm.querySelector('[name="message"]').value;

        const mailtoLink = `mailto:dzephylin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.location.href = mailtoLink;

        showStatus('Opening your email client...', 'success');
        contactForm.reset();
      } else {
        // Send via EmailJS
        const response = await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          contactForm
        );

        if (response.status === 200) {
          showStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
          contactForm.reset();
        }
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      showStatus('Something went wrong. Please email me directly at dzephylin@gmail.com', 'error');
    } finally {
      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}

// ============================================
// STATUS MESSAGE DISPLAY
// ============================================

function showStatus(message, type) {
  if (formStatus) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;

    // Auto-hide after 6 seconds
    setTimeout(() => {
      formStatus.className = 'form-status';
    }, 6000);
  }
}
