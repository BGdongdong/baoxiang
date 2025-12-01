// 主题切换功能
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const logoImg = document.getElementById('logo-img');
    const footerLogo = document.getElementById('footer-logo');
    
    // 检查本地存储的主题设置
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
        updateLogoForDarkTheme();
    } else {
        htmlElement.classList.remove('dark');
        updateLogoForLightTheme();
    }
    
    // 主题切换事件
    themeToggle.addEventListener('click', function() {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.theme = 'light';
            updateLogoForLightTheme();
        } else {
            htmlElement.classList.add('dark');
            localStorage.theme = 'dark';
            updateLogoForDarkTheme();
        }
    });
    
    // 根据主题更新Logo
    function updateLogoForLightTheme() {
        if (logoImg) logoImg.src = websiteConfig.images["logo-img"].replace('logo-dark', 'logo-light');
        if (footerLogo) footerLogo.src = websiteConfig.images["footer-logo"].replace('logo-dark', 'logo-light');
    }
    
    function updateLogoForDarkTheme() {
        if (logoImg) logoImg.src = websiteConfig.images["logo-img"].replace('logo-light', 'logo-dark');
        if (footerLogo) footerLogo.src = websiteConfig.images["footer-logo"].replace('logo-light', 'logo-dark');
    }
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (e.matches) {
            htmlElement.classList.add('dark');
            updateLogoForDarkTheme();
            localStorage.theme = 'dark';
        } else {
            htmlElement.classList.remove('dark');
            updateLogoForLightTheme();
            localStorage.theme = 'light';
        }
    });
});
