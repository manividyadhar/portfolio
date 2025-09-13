# 🌐 Mani Vidyadhar | Portfolio

This is my personal portfolio website showcasing my **skills, projects, and education**.  
The portfolio is built using **HTML, CSS, and EmailJS** for the contact form.

---

## 🚀 Features
- 📌 **Responsive Design** – Works across desktop and mobile  
- 👨‍💻 **About Section** – Quick intro about me  
- 🛠️ **Skills Section** – My technical expertise  
- 📂 **Projects Section** – Highlighting major projects  
- 🎓 **Education Section** – Academic background  
- 📬 **Contact Form** – Directly send me a message via EmailJS  

---

## 🛠️ Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript**
- **EmailJS** (for contact form)

---

## 📸 Preview
Here’s what the portfolio looks like:

![Portfolio Screenshot](iimages/Screenshot 2025-09-13 101510.png)

*(Take a screenshot of your site and save it as `preview.png` inside an `images/` folder in the repo)*

---

## 🔗 Live Demo
👉 [View Portfolio](https://manividyahar.github.io/portfolio)  

*(Replace `yourusername` with your GitHub username once deployed)*

---

## 📂 Project Structure
portfolio/
│── index.html # Main portfolio page
│── style.css # Stylesheet (if separated)
│── images/ # Profile & project images
│── README.md # Project documentation


---

## 📬 Contact Me
- 📧 Email: [manividyadhar@gmail.com](mailto:manividyadhar@gmail.com)  
- 🔗 LinkedIn: [linkedin.com/in/mani-vidyadhar-949b63233](https://www.linkedin.com/in/mani-vidyadhar-949b63233)  
- 💻 GitHub: [github.com/manividyadhar](https://github.com/manividyadhar)  

---

## ⚡ How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/manividyadhar/portfolio.git
Open index.html in your browser.

Customize with your own skills, projects, and contact details.

🚀 Deploy on GitHub Pages

Follow these steps to make your portfolio live:

Go to your GitHub repo → Settings

Scroll down to Pages (or "Code & Automation" → "Pages")

Under Source, select main branch and /root folder

Click Save

After a few minutes, your portfolio will be live at:
https://yourusername.github.io/portfolio

📧 Setting Up EmailJS (For Contact Form)

The contact form uses EmailJS to send messages directly to your inbox.
Here’s how to set it up:

Go to EmailJS
 and sign up (free account available).

In your EmailJS dashboard:

Create a new service (choose Gmail or another email provider).

Create a new email template (add placeholders like from_name, reply_to, message, etc.).

Copy your:

Service ID (example: service_xxxxxx)

Template ID (example: template_yyyyyy)

Public Key (example: ABC123xyz)

Open your index.html and update this section:

emailjs.init("YOUR_PUBLIC_KEY");

emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)


Replace with your actual IDs/keys.

Test the contact form – messages should now arrive in your email inbox 🎉.
