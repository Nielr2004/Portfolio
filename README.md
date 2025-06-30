
## Snehashis's Personal Portfolio

![home_logo](https://github.com/user-attachments/assets/740a61a0-803d-4d96-934f-47c6a3426c54)
Welcome to my personal portfolio website! This platform serves as a central hub to showcase my skills, projects, and provide an easy way to get in touch with me. Built with modern web technologies, it offers a clean, responsive, and interactive user experience.

## ✨ Features

* **Responsive Design:** Optimized for various screen sizes, from desktops to mobile devices.
* **Intuitive Navigation:** Easy-to-use navigation bar to quickly jump between sections like Home, About, Projects, Skills, and Contact [cite: 2025-06-30].
* **Dynamic Project Showcase:** A dedicated section to highlight my key projects with brief descriptions.
* **Skills Overview:** A comprehensive list of technologies and skills I possess.
* **Interactive Contact Form:** A direct way to send me messages.
* **Resume/CV Download:** Easily download my CV for more details on my professional background [cite: 2025-06-30].
* **Engaging UI/UX:** Features like custom fonts (Bebas Neue, Nunito), subtle animations, and a consistent color palette for an enjoyable Browse experience.

## 💻 Technologies Used

This project is built using:

* **Frontend:**
    * [React](https://react.dev/) - A JavaScript library for building user interfaces.
    * [Vite](https://vitejs.dev/) - A fast build tool for modern web projects.
    * HTML5
    * CSS3 (with custom variables for consistent theming)

* **Fonts:**
    * [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) (for headings)
    * [Nunito](https://fonts.google.com/specimen/Nunito) (for body text)
* **Email:**
    * [EmailJS](https://www.emailjs.com) (for Email purpose)
* **Deployment:**
    * [Vercel](https://vercel.com/) (or your chosen hosting provider)

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone [Your Repository URL]
    ```
2.  Navigate into the project directory:
    ```bash
    cd [your-portfolio-repo-name]
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    # or bun install
    ```

### Running Locally

To start the development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev
# or bun dev
````

This will typically open the application in your browser at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production-ready build of your application:

```bash
npm run build
# or yarn build
# or pnpm build
# or bun build
```

The optimized build files will be located in the `dist` folder.

## 📦 Project Structure Overview

```
my-portfolio/
├── public/                 # Static assets (favicons, public images)
│   └── images/
│       └── Web_logo.png    # Website favicon [cite: 2025-06-30]
├── src/
│   ├── assets/             # Images, fonts, etc. imported into components
│   │   ├── images/         # For images
│   │   ├── icons/          # For icons
│   │   └── resume.pdf      # Your downloadable CV [cite: 2025-06-30]
│   ├── components/         # For all the required componnents
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles
│   └── main.jsx            # React app entry point
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## 🌐 Deployment

This project can be easily deployed to hosting services like Vercel, Netlify, or GitHub Pages.

**For Vercel:**

1.  Sign up or log in to Vercel.
2.  Import your Git repository.
3.  Vercel will automatically detect that it's a Vite/React project and set up the build command (`npm run build`) and output directory (`dist`).
4.  Click "Deploy".

## 🙏 Acknowledgements

  * [Coolors.co](https://coolors.co/) for the color palette.
  * [Vite](https://vitejs.dev/) and [React](https://react.dev/) communities.
  * [Font Awesome](https://fontawesome.com/) for icons (if used).
  * [Google Fonts](https://fonts.google.com/) for typography.
