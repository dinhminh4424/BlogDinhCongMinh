# 🎨 Modern Portfolio Website

## 🚀 Quick Start

```bash
# Chạy development server
hugo server -D

# Truy cập trang portfolio
http://localhost:1313/BlogDinhCongMinh/profile/thong-tin/
```

## ✨ Features

### Design

- 🎯 Glassmorphism & Gradient effects
- 🌓 Dark/Light mode với localStorage
- 📱 Fully responsive (mobile-first)
- ✨ Smooth scroll animations (AOS)
- 🎨 Modern typography (Playfair Display + Inter)

### Interactivity

- 🌟 Particles background animation
- 📊 Animated skill progress bars
- 🔄 Smart navbar (scroll-aware)
- ⬆️ Back to top button
- 📈 Scroll progress bar
- ⚡ Loading screen
- 🎭 Hover effects & transitions

### Sections

1. **Hero** - Giới thiệu + Avatar + CTA buttons
2. **About** - Học vấn và background
3. **Skills** - Kỹ năng với progress bars
4. **Awards** - Timeline giải thưởng
5. **Portfolio** - Dự án nổi bật
6. **Experience** - Kinh nghiệm làm việc
7. **Hobbies** - Sở thích cá nhân
8. **Contact** - Thông tin liên hệ

## 📁 File Structure

```
dinhcongminh/
├── layouts/
│   └── profile/
│       └── single.html          # Main portfolio template
├── content/
│   └── profile/
│       ├── thong-tin.md         # Portfolio content
│       └── images/              # Content images
├── static/
│   └── profile/
│       └── images/              # Static images
└── PORTFOLIO_GUIDE.md           # Detailed documentation
```

## 🎨 Customization

### Change Colors

Edit CSS variables in `layouts/profile/single.html`:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --accent-color: #10b981;
}
```

### Update Content

Edit `content/profile/thong-tin.md` front matter:

```yaml
title: "Your Name"
avatar: "images/your-photo.jpg"
jobtitle: "Your Job Title"
```

### Add Images

Place images in `static/profile/images/` and reference as:

```html
<img src="/BlogDinhCongMinh/profile/images/your-image.png" />
```

## 🌐 Deploy

### Build for Production

```bash
hugo
```

### Deploy Options

- **GitHub Pages**: Push `public/` folder
- **Netlify**: Auto-deploy from Git
- **Vercel**: Connect repository

## 📊 Performance

- ✅ Inline CSS/JS (zero external requests for critical path)
- ✅ CDN for libraries (Font Awesome, AOS, Google Fonts)
- ✅ Lazy loading animations
- ✅ Optimized scroll performance
- ✅ Minimal DOM manipulation

## 🔧 Tech Stack

- **Hugo** - Static Site Generator
- **Vanilla JavaScript** - No framework overhead
- **CSS3** - Grid, Flexbox, Custom Properties
- **AOS** - Scroll animations
- **Canvas API** - Particles effect

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Key Features Explained

### Glassmorphism

```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.3);
```

### Scroll-Triggered Animations

```javascript
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});
```

### Dark Mode

```javascript
// Auto-save preference
localStorage.setItem("theme", "dark");
```

### Particles Background

- Canvas-based animation
- 50 particles with random movement
- Theme-aware colors
- Performance optimized

## 🐛 Troubleshooting

**Images not showing?**

- Check path: `/BlogDinhCongMinh/profile/images/`
- Verify files exist in `static/profile/images/`

**Animations not working?**

- Check internet connection (CDN libraries)
- Open browser console for errors

**Dark mode not persisting?**

- Clear browser cache
- Check localStorage permission

## 💡 Tips

1. **Images**: Optimize before upload (TinyPNG, ImageOptim)
2. **Content**: Keep sections concise and impactful
3. **Colors**: Stick to 2-3 main colors + accent
4. **Animations**: Subtle is better than flashy
5. **Mobile**: Test on real devices, not just DevTools

## 📚 Documentation

For detailed documentation, see:

- `PORTFOLIO_GUIDE.md` - Complete guide
- Hugo docs: https://gohugo.io/documentation/
- AOS docs: https://michalsnik.github.io/aos/

## 🎉 What's Included

✅ Responsive design  
✅ Dark/Light mode  
✅ Scroll animations  
✅ Particles background  
✅ Interactive navbar  
✅ Skill bars  
✅ Timeline layout  
✅ Portfolio cards  
✅ Contact section  
✅ Social links  
✅ Loading screen  
✅ Back to top button  
✅ Scroll progress

## 🚀 Next Steps

1. **Customize** colors and fonts
2. **Add** your projects and achievements
3. **Optimize** images
4. **Test** on multiple devices
5. **Deploy** to production
6. **Share** your portfolio!

---

**Made with ❤️ and modern web technologies**

_Need help? Check `PORTFOLIO_GUIDE.md` for detailed instructions_

