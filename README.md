# ELIAS ZAMORA CAR DETAILING - Website

A modern, responsive website for ELIAS ZAMORA CAR DETAILING built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Integration**: Direct phone and email links
- **Service Showcase**: Beautiful presentation of car detailing services

## 🛠️ Tech Stack

- **React 18** - Latest React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
carwash-web-app-/
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── Services.tsx    # Services showcase
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact form and info
│   │   └── Footer.tsx      # Footer with links
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Customization

### Business Information

Update the following in the components:

- **Email**: `juannolasquito@gmail.com` (in Contact.tsx, Footer.tsx, Header.tsx)
- **Phone**: `+1 (661) 435-8547` (in Contact.tsx, Footer.tsx, Header.tsx, Hero.tsx)
- **Business Name**: `ELIAS ZAMORA CAR DETAILING` (throughout components)

### Colors

Modify the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Services

Edit the services array in `src/components/Services.tsx` to customize your service offerings.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms

The `dist` folder contains static files that can be deployed to any hosting service.

## 📝 License

This project is private and proprietary.

## 📞 Contact

- **Phone**: +1 (661) 435-8547
- **Email**: juannolasquito@gmail.com
- **Business**: ELIAS ZAMORA CAR DETAILING

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
