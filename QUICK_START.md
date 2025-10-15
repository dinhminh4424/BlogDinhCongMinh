# ⚡ Quick Start Guide - Portfolio Website

## 🎯 Mục Đích

Trang portfolio cá nhân hiện đại, chuyên nghiệp với đầy đủ hiệu ứng tương tác và responsive design.

## 📦 Files Đã Tạo

### Core Files (Sử Dụng Ngay)

- ✅ `layouts/profile/single.html` - Template chính (inline CSS/JS)
- ✅ `content/profile/thong-tin.md` - Nội dung (đã có sẵn)
- ✅ `static/profile/images/` - Hình ảnh (đã có sẵn)

### Optional Files (Cho Customization)

- 📄 `assets/css/portfolio-style.css` - CSS riêng biệt
- 📄 `assets/js/portfolio-script.js` - JavaScript riêng biệt
- 📄 `layouts/profile/single-external.html` - Template dùng external CSS/JS

### Documentation

- 📚 `PORTFOLIO_GUIDE.md` - Hướng dẫn chi tiết
- 📚 `README_PORTFOLIO.md` - README ngắn gọn
- 📚 `QUICK_START.md` - File này

## 🚀 Sử Dụng Ngay (3 Bước)

### Bước 1: Chạy Hugo Server

```bash
hugo server -D
```

### Bước 2: Truy Cập

Mở trình duyệt và vào:

```
http://localhost:1313/BlogDinhCongMinh/profile/thong-tin/
```

### Bước 3: Thưởng Thức! 🎉

Trang portfolio của bạn đã sẵn sàng!

## 🎨 Tính Năng Nổi Bật

### Design

- ✨ Glassmorphism effects
- 🌈 Gradient backgrounds động
- 🎭 Dark/Light mode toggle
- 📱 Responsive (mobile, tablet, desktop)
- 🎨 Typography chuyên nghiệp

### Animations

- 📜 Scroll-triggered animations (AOS)
- 🌟 Particles background
- 📊 Skill bars animation
- 🔄 Smooth transitions
- ⬆️ Back to top button

### Interactive

- 🎯 Smart navbar (scroll-aware)
- 📈 Scroll progress bar
- 🌓 Theme switcher (lưu preference)
- 🖱️ Hover effects
- 📱 Mobile menu

## 📋 Checklist Trước Khi Deploy

### Content

- [ ] Cập nhật thông tin cá nhân trong `thong-tin.md`
- [ ] Thay ảnh avatar (MINH-3.jpg)
- [ ] Thêm/cập nhật ảnh dự án
- [ ] Kiểm tra links (GitHub, Facebook, Email)

### Images

- [ ] Optimize images (TinyPNG, ImageOptim)
- [ ] Convert sang WebP (optional)
- [ ] Check image paths

### Testing

- [ ] Test trên Chrome
- [ ] Test trên Firefox
- [ ] Test trên Safari (nếu có Mac)
- [ ] Test trên mobile (real device)
- [ ] Test dark mode
- [ ] Test tất cả links

### Performance

- [ ] Run Lighthouse audit
- [ ] Check loading time
- [ ] Verify animations smooth
- [ ] Test on slow connection

### SEO

- [ ] Meta descriptions
- [ ] Alt text cho images
- [ ] Heading hierarchy
- [ ] Sitemap (Hugo tự tạo)

## 🔧 Customization Nhanh

### Đổi Màu Sắc Chính

Tìm trong `layouts/profile/single.html`, section `<style>`, dòng `:root`:

```css
--primary-color: #3b82f6; /* Màu chính */
--secondary-color: #8b5cf6; /* Màu phụ */
--accent-color: #10b981; /* Màu nhấn */
```

Đổi sang màu khác (ví dụ: đỏ):

```css
--primary-color: #ef4444;
--secondary-color: #dc2626;
--accent-color: #f97316;
```

### Đổi Font Chữ

Tìm `Google Fonts` link trong `<head>`:

```html
<!-- Hiện tại: Inter + Playfair Display -->
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;900&display=swap"
/>

<!-- Đổi thành: Poppins + Merriweather -->
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Merriweather:wght@700;900&display=swap"
/>
```

Sau đó update CSS:

```css
body {
  font-family: "Poppins", sans-serif; /* Đổi từ Inter */
}

.section-title {
  font-family: "Merriweather", serif; /* Đổi từ Playfair Display */
}
```

### Thay Đổi Avatar

1. Đặt ảnh mới vào `static/profile/images/`
2. Đổi tên thành `MINH-3.jpg` HOẶC
3. Cập nhật trong `content/profile/thong-tin.md`:

```yaml
avatar: "images/TEN_ANH_MOI.jpg"
```

### Thêm Section Mới

Copy template sau vào vị trí muốn thêm:

```html
<section id="new-section">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <h2 class="section-title">Tiêu Đề Section</h2>
      <p class="section-subtitle">Mô tả ngắn gọn</p>
    </div>

    <!-- Nội dung của bạn ở đây -->
    <div class="glass-card" data-aos="fade-up" data-aos-delay="100">
      <p>Nội dung...</p>
    </div>
  </div>
</section>
```

## 🌐 Deploy Lên Production

### Option 1: GitHub Pages

```bash
# Build site
hugo

# Commit và push
git add .
git commit -m "Update portfolio"
git push origin main

# Config GitHub Pages: Settings > Pages > Source: main branch > /public folder
```

### Option 2: Netlify (Recommended)

1. Push code lên GitHub
2. Vào [netlify.com](https://netlify.com)
3. "New site from Git" > Chọn repo
4. Build command: `hugo`
5. Publish directory: `public`
6. Deploy!

### Option 3: Vercel

Similar to Netlify:

1. Import project từ GitHub
2. Vercel tự detect Hugo config
3. Deploy!

## 🐛 Troubleshooting Phổ Biến

### 1. Hình Ảnh Không Hiển Thị

**Triệu chứng:** Ảnh bị broken
**Giải pháp:**

```bash
# Check path
ls static/profile/images/

# Verify trong HTML
/BlogDinhCongMinh/profile/images/MINH-3.jpg
```

### 2. Dark Mode Không Hoạt Động

**Triệu chứng:** Click nút không đổi theme
**Giải pháp:**

- Mở DevTools Console (F12)
- Check lỗi JavaScript
- Clear cache (Ctrl+Shift+Delete)
- Thử incognito mode

### 3. Animations Không Chạy

**Triệu chứng:** Page tĩnh, không có hiệu ứng
**Giải pháp:**

- Check internet (AOS load từ CDN)
- Console check: `AOS is not defined`
- Thêm fallback local nếu cần

### 4. Mobile Menu Không Mở

**Triệu chứng:** Click hamburger không có gì xảy ra
**Giải pháp:**

- CSS breakpoint: check `@media (max-width: 768px)`
- JavaScript: init mobile menu function

### 5. Slow Loading

**Triệu chứng:** Trang load chậm
**Giải pháp:**

- Compress images
- Check internet speed
- Optimize CSS/JS (use minified version)

## 📊 Metrics & Performance

### Target Scores (Lighthouse)

- 🎯 Performance: 90+
- 🎯 Accessibility: 90+
- 🎯 Best Practices: 90+
- 🎯 SEO: 90+

### How to Check

1. Mở Chrome DevTools (F12)
2. Tab "Lighthouse"
3. Click "Generate report"
4. Review scores

### Optimization Tips

```bash
# Compress images
# macOS/Linux: imagemagick
convert input.jpg -quality 85 output.jpg

# Windows: TinyPNG.com (web-based)
```

## 📱 Testing Checklist

### Desktop (1920x1080)

- [ ] Hero section đầy đủ
- [ ] Navbar sticky
- [ ] All animations smooth
- [ ] Hover effects work
- [ ] Links clickable

### Tablet (768x1024)

- [ ] Layout responsive
- [ ] Images scale properly
- [ ] Text readable
- [ ] Touch targets adequate

### Mobile (375x667)

- [ ] Mobile menu appears
- [ ] Content không bị cắt
- [ ] Touch-friendly buttons
- [ ] Fast loading

## 🎓 Learning Resources

### CSS

- [Glassmorphism Generator](https://glassmorphism.com/)
- [CSS Gradient Generator](https://cssgradient.io/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

### JavaScript

- [AOS Documentation](https://michalsnik.github.io/aos/)
- [Vanilla JS Guide](https://javascript.info/)

### Hugo

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Templates](https://gohugo.io/templates/)

## 💡 Pro Tips

### 1. Keep It Simple

Đừng thêm quá nhiều animations - subtle is better!

### 2. Optimize Images

```bash
# Good sizes:
Avatar: 500x500px
Portfolio images: 800x600px
Background: 1920x1080px
```

### 3. Test Real Devices

Emulator không đủ - test trên phone/tablet thật!

### 4. Update Regularly

Add new projects every 1-2 months.

### 5. Analytics

Thêm Google Analytics để track visitors:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"
></script>
```

### 6. Performance Budget

- Total page size: < 2MB
- Load time: < 3 seconds
- Images: < 200KB each

## 🎉 You're All Set!

Trang portfolio của bạn đã sẵn sàng để:

- ✅ Gây ấn tượng với nhà tuyển dụng
- ✅ Showcase dự án
- ✅ Kết nối với khách hàng
- ✅ Build personal brand

## 📞 Need Help?

### Quick Fixes

1. Clear cache: `Ctrl+Shift+Delete`
2. Hard reload: `Ctrl+F5`
3. Check console: `F12`
4. Restart Hugo: `Ctrl+C` then `hugo server -D`

### Documentation

- See `PORTFOLIO_GUIDE.md` for detailed info
- Check `README_PORTFOLIO.md` for features

## 🚀 Next Steps

1. **Ngay Bây Giờ:**

   - [ ] Chạy `hugo server -D`
   - [ ] Test trang web
   - [ ] Customize colors

2. **Hôm Nay:**

   - [ ] Update content
   - [ ] Optimize images
   - [ ] Test mobile

3. **Tuần Này:**

   - [ ] Add more projects
   - [ ] Setup analytics
   - [ ] Deploy to production

4. **Tháng Này:**
   - [ ] Share portfolio
   - [ ] Gather feedback
   - [ ] Iterate & improve

---

**Chúc bạn thành công! 🎊**

_Your portfolio is your digital handshake - make it count!_

Last Updated: October 2025




