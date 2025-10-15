# 🎨 Portfolio Website - Hướng Dẫn Triển Khai

## 📋 Tổng Quan

Trang portfolio cá nhân được thiết kế với tiêu chuẩn cao nhất về UI/UX, tích hợp đầy đủ các hiệu ứng hiện đại và tối ưu hóa trải nghiệm người dùng.

## ✨ Tính Năng Nổi Bật

### 🎯 Design Features

- **Glassmorphism Effect**: Hiệu ứng kính mờ cho cards và navbar
- **Gradient Động**: Background chuyển màu mượt mà
- **Typography Tinh Tế**: Kết hợp Playfair Display (serif) và Inter (sans-serif)
- **White Space**: Không gian âm được sử dụng hợp lý
- **Consistent Color Palette**: Bảng màu xanh navy, tím, xanh lá cây

### 🚀 Interactive Features

- **Scroll-triggered Animations**: Sử dụng AOS (Animate On Scroll)
- **Particles Background**: Canvas animation cho hiệu ứng hạt động
- **Smart Navbar**: Thu nhỏ khi scroll, highlight active section
- **Dark/Light Mode**: Toggle chế độ sáng/tối với localStorage
- **Skill Bars Animation**: Progress bars chạy khi scroll đến
- **Smooth Scroll**: Cuộn mượt mà giữa các sections
- **Back to Top**: Nút quay lại đầu trang
- **Scroll Progress Bar**: Thanh tiến trình đọc trang

### 📱 Responsive Design

- **Mobile-First Approach**: Tối ưu cho mobile trước
- **Breakpoints**: 768px, 1024px
- **Flexible Grid**: CSS Grid & Flexbox

## 🏗️ Cấu Trúc Trang

1. **Hero Section** - Giới thiệu với avatar và CTA
2. **About** - Học vấn và giới thiệu
3. **Skills** - Kỹ năng với progress bars
4. **Awards** - Timeline các giải thưởng
5. **Portfolio** - Dự án nổi bật
6. **Experience** - Kinh nghiệm làm việc
7. **Hobbies** - Sở thích cá nhân
8. **Contact** - Thông tin liên hệ
9. **Footer** - Bản quyền và quote

## 🔧 Cài Đặt & Triển Khai

### Bước 1: Kiểm Tra File

Đảm bảo bạn đã có:

- ✅ `layouts/profile/single.html` - Template chính
- ✅ `content/profile/thong-tin.md` - Nội dung
- ✅ `static/profile/images/` - Hình ảnh

### Bước 2: Build Hugo Site

```bash
# Di chuyển đến thư mục project
cd d:/USER/Documents/LapTrinhMangMT/dinhcongminh

# Build site
hugo

# Hoặc chạy server development
hugo server -D
```

### Bước 3: Xem Kết Quả

Truy cập: `http://localhost:1313/BlogDinhCongMinh/profile/thong-tin/`

## 🎨 Tùy Chỉnh

### Thay Đổi Màu Sắc

Trong `<style>` tag, tìm `:root` và chỉnh sửa:

```css
:root {
  --primary-color: #3b82f6; /* Xanh dương chính */
  --secondary-color: #8b5cf6; /* Tím */
  --accent-color: #10b981; /* Xanh lá */
  --dark-bg: #0f172a; /* Nền tối */
  --light-bg: #f8fafc; /* Nền sáng */
}
```

### Thêm/Sửa Nội Dung

Chỉnh sửa file `content/profile/thong-tin.md`:

- **Front matter**: title, date, avatar, jobtitle
- **Content**: Markdown content (hiện tại template không sử dụng, vì đã hardcode)

### Thay Đổi Hình Ảnh

1. Đặt hình vào `static/profile/images/`
2. Cập nhật đường dẫn trong HTML:

```html
<img src="/BlogDinhCongMinh/profile/images/TEN_ANH.png" alt="..." />
```

## 🌐 Deploy Lên Production

### GitHub Pages

```bash
# Build site
hugo

# Copy thư mục public/ lên GitHub repository
git add public/
git commit -m "Update portfolio"
git push origin main
```

### Netlify

1. Connect repository
2. Build command: `hugo`
3. Publish directory: `public`

### Vercel

Similar to Netlify, tự động detect Hugo config.

## 🎯 Performance Optimization

### Đã Tối Ưu

- ✅ CSS/JS inline (giảm HTTP requests)
- ✅ AOS library từ CDN
- ✅ Font Awesome từ CDN
- ✅ Google Fonts preload
- ✅ Lazy loading animations

### Tối Ưu Thêm (Nếu Cần)

1. **Compress Images**: Sử dụng TinyPNG hoặc ImageOptim
2. **Minify CSS/JS**: Tách CSS/JS ra file riêng và minify
3. **CDN**: Sử dụng Cloudflare CDN
4. **Caching**: Set cache headers

## 🐛 Troubleshooting

### Hình Ảnh Không Hiển Thị

- Kiểm tra đường dẫn: `/BlogDinhCongMinh/profile/images/`
- Đảm bảo file tồn tại trong `static/profile/images/`

### Dark Mode Không Hoạt Động

- Clear browser cache
- Kiểm tra JavaScript console

### Animations Không Chạy

- Đảm bảo AOS library load thành công
- Check Internet connection (CDN)

### Responsive Issues

- Test trên nhiều thiết bị
- Sử dụng Chrome DevTools

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 11 (Một số tính năng không hoạt động)

## 🔐 SEO Best Practices

Template đã tích hợp:

- ✅ Semantic HTML5
- ✅ Meta descriptions
- ✅ Alt text cho images
- ✅ Proper heading hierarchy
- ✅ Mobile responsive

### Cải Thiện SEO

Thêm vào `content/profile/thong-tin.md` front matter:

```yaml
description: "Portfolio của Đinh Công Minh - Full-stack Developer"
keywords: ["full-stack", "developer", ".NET", "AI"]
```

## 🎓 Technologies Used

### Frontend

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Animations, Glassmorphism
- **JavaScript (Vanilla)**: No framework dependency
- **Canvas API**: Particles animation

### Libraries

- **AOS**: Scroll animations
- **Font Awesome**: Icons
- **Google Fonts**: Inter, Playfair Display

### Build Tool

- **Hugo**: Static site generator

## 📝 Customization Tips

### 1. Thay Đổi Gradient Colors

```css
--gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
```

### 2. Điều Chỉnh Animation Speed

```javascript
AOS.init({
  duration: 1000, // Thay đổi thời gian (ms)
  once: true,
  offset: 100,
});
```

### 3. Thêm Section Mới

```html
<section id="new-section">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <h2 class="section-title">Tiêu Đề</h2>
      <p class="section-subtitle">Mô tả ngắn</p>
    </div>
    <!-- Nội dung -->
  </div>
</section>
```

### 4. Custom Skill Bars

```html
<div class="skill-bar">
  <div class="skill-bar-label">
    <span>Tên Skill</span>
    <span>90%</span>
  </div>
  <div class="skill-bar-bg">
    <div class="skill-bar-fill" style="--skill-width: 90%;"></div>
  </div>
</div>
```

## 🎉 Features Checklist

- ✅ Glassmorphism design
- ✅ Gradient backgrounds
- ✅ Scroll animations (AOS)
- ✅ Dark/Light mode toggle
- ✅ Particles background
- ✅ Responsive navbar
- ✅ Skill bars animation
- ✅ Timeline layout
- ✅ Portfolio cards
- ✅ Contact section
- ✅ Social links
- ✅ Back to top button
- ✅ Scroll progress bar
- ✅ Loading screen
- ✅ Smooth scroll
- ✅ Mobile responsive
- ✅ Cross-browser compatible

## 🚀 Next Steps

### Immediate

1. ✅ Test trên nhiều thiết bị
2. ✅ Optimize images
3. ✅ Add more projects
4. ✅ Update contact info

### Future Enhancements

- 📧 Contact form backend (EmailJS, Formspree)
- 📊 Analytics integration (Google Analytics)
- 🌍 Multi-language support
- 📝 Blog integration
- 🎨 More color themes
- 📱 Progressive Web App (PWA)
- 🔍 Advanced search functionality

## 💡 Pro Tips

1. **Performance**: Inline critical CSS, defer non-critical JS
2. **Images**: Use WebP format với fallback
3. **Fonts**: Limit to 2-3 font families
4. **Animations**: Don't overdo it - subtle is better
5. **Content**: Update regularly với projects mới
6. **Testing**: Test trên real devices, không chỉ emulator
7. **Accessibility**: Ensure color contrast ratios meet WCAG standards

## 📞 Support

Nếu gặp vấn đề, check:

1. Browser console for errors
2. Network tab for failed requests
3. Hugo documentation
4. File permissions

## 📜 License

This portfolio template is open source. Feel free to customize and use for your own portfolio!

---

**Created with ❤️ using Hugo + Modern Web Technologies**

_Last Updated: October 2025_

