
# Smart Tools App

A scalable React-based web application that offers a suite of useful online tools such as text utilities, converters, estimators, and more.

## 🚀 Features

- 🧭 **Sidebar Navigation** with dynamic categories
- 🗂️ **Dashboard** showcasing all tools as interactive cards
- 🌗 **Theme Toggle** (Light/Dark mode)
- 📢 **Google Ads Integration** placeholder
- 🌐 **SEO Meta Tags** in HTML head
- 📡 **Dummy API Integration** ready for extension
- 🧱 **Built with Tailwind CSS + React Router + MUI + React Icons**

## 📁 Project Structure

```
/public
  └── index.html              # HTML with SEO tags and dummy AdSense
/src
  ├── api/api.js              # Dummy API integration
  ├── components              # Sidebar, AdBanner, ToolCard
  ├── context/ThemeContext.js # Light/Dark mode context
  ├── pages/Dashboard.js     # Homepage showing tool cards
  ├── routes/ToolRoutes.js   # All tool routes + categories
  ├── tools                  # Individual tools (WordCounter, etc.)
  ├── App.js
  ├── index.js
  └── index.css              # Tailwind base styles
```

## 🧰 Setup & Run

```bash
npm install
npm start
```

## 🔧 Add a New Tool

1. Create a new component in `/src/tools/YourTool.js`
2. Add it to `ToolRoutes.js` with a path and category
3. It will auto-appear in the Sidebar and Dashboard

## 🌍 Deployment

Can be deployed on:
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 📄 License

MIT License
