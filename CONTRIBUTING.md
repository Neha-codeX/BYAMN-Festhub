# Contributing to BYAMN Festhub 🎉


Thank you for your interest in contributing to BYAMN Festhub! We welcome contributions from everyone and are grateful for even the smallest fixes.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/byamn-festhub.git
   cd byamn-festhub
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and test them thoroughly
5. **Commit your changes**:
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** on GitHub

## 🎯 Ways to Contribute

### 🎨 Add New Festivals
- Create new festival greeting pages (Diwali, Eid, Holi, New Year, etc.)
- Follow the existing structure and naming conventions
- Include appropriate color schemes and cultural elements
- Add festival-specific wishes and images

### 🌍 Localization
- Add support for more languages
- Translate existing content
- Ensure cultural sensitivity and accuracy

### 🐛 Bug Fixes
- Fix UI/UX issues
- Improve browser compatibility
- Resolve mobile responsiveness problems
- Fix JavaScript errors

### ✨ Feature Enhancements
- Improve existing functionality
- Add new customization options
- Enhance sharing capabilities
- Optimize performance

### 📚 Documentation
- Improve README.md
- Add code comments
- Create tutorials
- Update screenshots

## 📋 Development Guidelines

### Code Style

#### HTML
```html
<!-- Use semantic HTML5 elements -->
<main class="main-content">
  <section class="greeting-section">
    <h2 class="section-title">Festival Name</h2>
    <!-- Use proper indentation (2 spaces) -->
  </section>
</main>
```

#### CSS
```css
/* Use CSS custom properties for theming */
:root {
  --primary: #your-color;
  --secondary: #your-color;
  --accent: #your-color;
}

/* Follow BEM naming convention when possible */
.greeting-card {
  /* Properties */
}

.greeting-card__title {
  /* Properties */
}

.greeting-card--featured {
  /* Properties */
}
```

#### JavaScript
```javascript
// Use modern JavaScript (ES6+)
const elements = {
  form: document.getElementById('form'),
  button: document.getElementById('button')
};

// Use meaningful variable names
function generateGreeting() {
  // Implementation
}

// Add error handling
try {
  // Code that might fail
} catch (error) {
  console.error('Error:', error);
}
```

### File Structure

When adding a new festival page:

```
BYAMN-Festhub/
├── festival-name.html      # Main festival page
├── assets/
│   ├── images/
│   │   └── festival-name/  # Festival-specific images
│   ├── css/
│   │   └── festival-name.css (optional)
│   └── js/
│       └── festival-name.js (optional)
```

### Responsive Design

Ensure your changes work on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

```css
/* Mobile first approach */
.element {
  /* Mobile styles */
}

@media (min-width: 768px) {
  .element {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .element {
    /* Desktop styles */
  }
}
```

## 🧪 Testing Checklist

Before submitting your PR, please ensure:

- [ ] **Cross-browser testing**: Chrome, Firefox, Safari, Edge
- [ ] **Mobile responsiveness**: Test on different screen sizes
- [ ] **Functionality**: All features work as expected
- [ ] **Accessibility**: Basic accessibility standards met
- [ ] **Performance**: No significant performance regressions
- [ ] **Code quality**: Clean, readable, and well-commented code
- [ ] **No console errors**: Check browser developer tools

## 🎨 Design Guidelines

### Color Schemes
Each festival should have its own color palette:

```css
/* Christmas */
:root {
  --primary: #0a5c36;   /* Forest Green */
  --secondary: #d62828; /* Christmas Red */
  --accent: #f77f00;    /* Gold */
}

/* Janmashtami */
:root {
  --primary: #4a148c;   /* Deep Purple */
  --secondary: #ffab00; /* Saffron */
  --accent: #ff6d00;    /* Orange */
}
```

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Decorative Font**: Festival-specific (Tangerine, Playfair Display, etc.)
- **Font Sizes**: Use rem units for scalability

### Images
- Use high-quality, royalty-free images
- Optimize images for web (WebP preferred)
- Provide alt text for accessibility
- Credit sources when required

## 📝 Commit Message Guidelines

Use clear and descriptive commit messages:

```
Type: Brief description

Examples:
Add: New Diwali festival page
Fix: Mobile responsiveness on Christmas page
Update: Improve accessibility for screen readers
Docs: Add contributing guidelines
Style: Fix indentation in CSS files
Refactor: Organize JavaScript functions
```

Types:
- `Add`: New features or files
- `Fix`: Bug fixes
- `Update`: Improvements to existing features
- `Remove`: Deleted files or features
- `Docs`: Documentation changes
- `Style`: Code formatting, no functional changes
- `Refactor`: Code restructuring
- `Test`: Adding or fixing tests

## 🤝 Code Review Process

1. **Automated Checks**: Your PR will be checked for basic issues
2. **Manual Review**: Maintainers will review your code
3. **Feedback**: You may receive suggestions for improvements
4. **Approval**: Once approved, your PR will be merged

### What Reviewers Look For

- **Code Quality**: Clean, readable, and maintainable code
- **Functionality**: Features work as intended
- **Design Consistency**: Follows existing design patterns
- **Performance**: No unnecessary performance impacts
- **Accessibility**: Basic accessibility considerations
- **Browser Compatibility**: Works across major browsers

## 🎉 Festival-Specific Guidelines

### Adding a New Festival

1. **Research**: Understand the cultural significance and traditions
2. **Design**: Choose appropriate colors, fonts, and imagery
3. **Content**: Include authentic wishes and greetings
4. **Respect**: Ensure cultural sensitivity and accuracy

### Example Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy [Festival Name]</title>
    <!-- Include required fonts and styles -->
</head>
<body>
    <header>
        <h1>[Festival Name]</h1>
        <button class="btn-create">Create</button>
    </header>
    
    <main class="main-content">
        <!-- Festival-specific content -->
    </main>
    
    <script>
        // Festival-specific JavaScript
    </script>
</body>
</html>
```

## 🆘 Getting Help

- **Issues**: [GitHub Issues](https://github.com/yourusername/byamn-festhub/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/byamn-festhub/discussions)
- **Questions**: Feel free to ask in issues or discussions

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Help others learn and grow
- Follow GitHub's community guidelines

## 🏆 Recognition

Contributors will be:
- Listed in the project credits
- Mentioned in release notes
- Invited to join the contributors team (for regular contributors)

=======
# Contributing to BYAMN Festhub 🎉

Thank you for your interest in contributing to BYAMN Festhub! We welcome contributions from everyone and are grateful for even the smallest fixes.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/byamn-festhub.git
   cd byamn-festhub
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and test them thoroughly
5. **Commit your changes**:
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** on GitHub

## 🎯 Ways to Contribute

### 🎨 Add New Festivals
- Create new festival greeting pages (Diwali, Eid, Holi, New Year, etc.)
- Follow the existing structure and naming conventions
- Include appropriate color schemes and cultural elements
- Add festival-specific wishes and images

### 🌍 Localization
- Add support for more languages
- Translate existing content
- Ensure cultural sensitivity and accuracy

### 🐛 Bug Fixes
- Fix UI/UX issues
- Improve browser compatibility
- Resolve mobile responsiveness problems
- Fix JavaScript errors

### ✨ Feature Enhancements
- Improve existing functionality
- Add new customization options
- Enhance sharing capabilities
- Optimize performance

### 📚 Documentation
- Improve README.md
- Add code comments
- Create tutorials
- Update screenshots

## 📋 Development Guidelines

### Code Style

#### HTML
```html
<!-- Use semantic HTML5 elements -->
<main class="main-content">
  <section class="greeting-section">
    <h2 class="section-title">Festival Name</h2>
    <!-- Use proper indentation (2 spaces) -->
  </section>
</main>
```

#### CSS
```css
/* Use CSS custom properties for theming */
:root {
  --primary: #your-color;
  --secondary: #your-color;
  --accent: #your-color;
}

/* Follow BEM naming convention when possible */
.greeting-card {
  /* Properties */
}

.greeting-card__title {
  /* Properties */
}

.greeting-card--featured {
  /* Properties */
}
```

#### JavaScript
```javascript
// Use modern JavaScript (ES6+)
const elements = {
  form: document.getElementById('form'),
  button: document.getElementById('button')
};

// Use meaningful variable names
function generateGreeting() {
  // Implementation
}

// Add error handling
try {
  // Code that might fail
} catch (error) {
  console.error('Error:', error);
}
```

### File Structure

When adding a new festival page:

```
BYAMN-Festhub/
├── festival-name.html      # Main festival page
├── assets/
│   ├── images/
│   │   └── festival-name/  # Festival-specific images
│   ├── css/
│   │   └── festival-name.css (optional)
│   └── js/
│       └── festival-name.js (optional)
```

### Responsive Design

Ensure your changes work on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

```css
/* Mobile first approach */
.element {
  /* Mobile styles */
}

@media (min-width: 768px) {
  .element {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .element {
    /* Desktop styles */
  }
}
```

## 🧪 Testing Checklist

Before submitting your PR, please ensure:

- [ ] **Cross-browser testing**: Chrome, Firefox, Safari, Edge
- [ ] **Mobile responsiveness**: Test on different screen sizes
- [ ] **Functionality**: All features work as expected
- [ ] **Accessibility**: Basic accessibility standards met
- [ ] **Performance**: No significant performance regressions
- [ ] **Code quality**: Clean, readable, and well-commented code
- [ ] **No console errors**: Check browser developer tools

## 🎨 Design Guidelines

### Color Schemes
Each festival should have its own color palette:

```css
/* Christmas */
:root {
  --primary: #0a5c36;   /* Forest Green */
  --secondary: #d62828; /* Christmas Red */
  --accent: #f77f00;    /* Gold */
}

/* Janmashtami */
:root {
  --primary: #4a148c;   /* Deep Purple */
  --secondary: #ffab00; /* Saffron */
  --accent: #ff6d00;    /* Orange */
}
```

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Decorative Font**: Festival-specific (Tangerine, Playfair Display, etc.)
- **Font Sizes**: Use rem units for scalability

### Images
- Use high-quality, royalty-free images
- Optimize images for web (WebP preferred)
- Provide alt text for accessibility
- Credit sources when required

## 📝 Commit Message Guidelines

Use clear and descriptive commit messages:

```
Type: Brief description

Examples:
Add: New Diwali festival page
Fix: Mobile responsiveness on Christmas page
Update: Improve accessibility for screen readers
Docs: Add contributing guidelines
Style: Fix indentation in CSS files
Refactor: Organize JavaScript functions
```

Types:
- `Add`: New features or files
- `Fix`: Bug fixes
- `Update`: Improvements to existing features
- `Remove`: Deleted files or features
- `Docs`: Documentation changes
- `Style`: Code formatting, no functional changes
- `Refactor`: Code restructuring
- `Test`: Adding or fixing tests

## 🤝 Code Review Process

1. **Automated Checks**: Your PR will be checked for basic issues
2. **Manual Review**: Maintainers will review your code
3. **Feedback**: You may receive suggestions for improvements
4. **Approval**: Once approved, your PR will be merged

### What Reviewers Look For

- **Code Quality**: Clean, readable, and maintainable code
- **Functionality**: Features work as intended
- **Design Consistency**: Follows existing design patterns
- **Performance**: No unnecessary performance impacts
- **Accessibility**: Basic accessibility considerations
- **Browser Compatibility**: Works across major browsers

## 🎉 Festival-Specific Guidelines

### Adding a New Festival

1. **Research**: Understand the cultural significance and traditions
2. **Design**: Choose appropriate colors, fonts, and imagery
3. **Content**: Include authentic wishes and greetings
4. **Respect**: Ensure cultural sensitivity and accuracy

### Example Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy [Festival Name]</title>
    <!-- Include required fonts and styles -->
</head>
<body>
    <header>
        <h1>[Festival Name]</h1>
        <button class="btn-create">Create</button>
    </header>
    
    <main class="main-content">
        <!-- Festival-specific content -->
    </main>
    
    <script>
        // Festival-specific JavaScript
    </script>
</body>
</html>
```

## 🆘 Getting Help

- **Issues**: [GitHub Issues](https://github.com/yourusername/byamn-festhub/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/byamn-festhub/discussions)
- **Questions**: Feel free to ask in issues or discussions

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Help others learn and grow
- Follow GitHub's community guidelines

## 🏆 Recognition

Contributors will be:
- Listed in the project credits
- Mentioned in release notes
- Invited to join the contributors team (for regular contributors)

>>>>>>> origin/main
Thank you for contributing to BYAMN Festhub! Your efforts help spread joy and celebration across cultures. 🎊