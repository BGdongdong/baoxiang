// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置图片
    for (const [key, value] of Object.entries(websiteConfig.images)) {
        const el = document.getElementById(key);
        if (el) el.src = value;
    }
    
    // 初始化主题
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // 主题切换
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    }
    
    // 初始化语言
    if (localStorage.lang === 'en') {
        updateLanguage('en');
        document.getElementById('lang-text').textContent = '中文';
    } else {
        updateLanguage('zh');
        document.getElementById('lang-text').textContent = 'EN';
    }
    
    // 移动端菜单切换
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2', 'shadow-md');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.add('py-4');
            navbar.classList.remove('py-2', 'shadow-md');
        }
        
        // 返回顶部按钮
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
            } else {
                backToTop.classList.add('opacity-0', 'invisible');
                backToTop.classList.remove('opacity-100', 'visible');
            }
        }
    });
    
    // 返回顶部功能
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // 首页轮播功能
    const carousel = document.getElementById('hero-carousel');
    if (carousel) {
        const carouselItems = carousel.querySelector('.flex');
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        const dots = document.querySelectorAll('.carousel-dot');
        let currentIndex = 0;
        
        if (carouselItems && prevBtn && nextBtn) {
            const totalSlides = 3; // 轮播总数
            
            // 切换轮播
            function goToSlide(index) {
                currentIndex = index;
                carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // 更新指示器
                dots.forEach((dot, i) => {
                    if (i === currentIndex) {
                        dot.classList.add('bg-primary');
                        dot.classList.remove('bg-primary/50', 'dark:bg-primary/30');
                    } else {
                        dot.classList.remove('bg-primary');
                        dot.classList.add('bg-primary/50', 'dark:bg-primary/30');
                    }
                });
            }
            
            // 按钮事件
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                goToSlide(currentIndex);
            });
            
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                goToSlide(currentIndex);
            });
            
            // 指示器事件
            dots.forEach((dot, i) => {
                dot.addEventListener('click', () => goToSlide(i));
            });
            
            // 自动轮播
            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                goToSlide(currentIndex);
            }, 5000);
        }
    }
    
    // 产品标签切换
    const productTabs = document.querySelectorAll('.product-tab');
    const productItems = document.querySelectorAll('.product-item');
    
    if (productTabs.length > 0 && productItems.length > 0) {
        productTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                productTabs.forEach(t => {
                    t.classList.remove('active', 'bg-primary', 'text-white');
                    t.classList.add('bg-gray-200', 'dark:bg-gray-700', 'hover:bg-gray-300', 'dark:hover:bg-gray-600');
                });
                
                tab.classList.add('active', 'bg-primary', 'text-white');
                tab.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'hover:bg-gray-300', 'dark:hover:bg-gray-600');
                
                const filter = tab.textContent.trim().toLowerCase();
                const filterMap = {
                    '全部产品': 'all',
                    'all products': 'all',
                    '冲压件': '冲压件',
                    'stamping parts': '冲压件',
                    '焊接件': '焊接件',
                    'welding parts': '焊接件',
                    '资源回收': '资源回收',
                    'resource recycling': '资源回收'
                };
                
                const key = filterMap[filter] || 'all';
                
                productItems.forEach(item => {
                    if (key === 'all' || item.classList.contains(key)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }
    
    // 百度地图初始化
    if (window.BMapGL && document.getElementById('map')) {
        const map = new BMapGL.Map('map');
        const point = new BMapGL.Point(120.629650, 31.317230);
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);
        
        const marker = new BMapGL.Marker(point);
        map.addOverlay(marker);
        
        const infoWindow = new BMapGL.InfoWindow('AutoParts Headquarters');
        marker.addEventListener('click', () => {
            map.openInfoWindow(infoWindow, point);
        });
    }
    
    // 图表初始化
    if (window.Chart) {
        // 质量趋势图
        const qualityChartEl = document.getElementById('qualityChart');
        if (qualityChartEl) {
            const lang = localStorage.lang || 'zh';
            const translations = websiteConfig.translations[lang];
            
            new Chart(qualityChartEl, {
                type: 'line',
                data: {
                    labels: lang === 'zh' ? ['1月', '2月', '3月', '4月', '5月', '6月'] : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: translations['quality-chart-label'] || 'Product Qualification Rate (%)',
                        data: [98.2, 98.5, 98.8, 99.0, 99.2, 99.5],
                        borderColor: '#165DFF',
                        backgroundColor: 'rgba(22, 93, 255, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: translations['quality-chart-title'] || 'Product Qualification Rate Trend' }
                    },
                    scales: { y: { min: 98, max: 100 } }
                }
            });
        }
        
        // 缺陷分布图
        const defectChartEl = document.getElementById('defectChart');
        if (defectChartEl) {
            const lang = localStorage.lang || 'zh';
            const translations = websiteConfig.translations[lang];
            
            new Chart(defectChartEl, {
                type: 'doughnut',
                data: {
                    labels: translations['defect-labels'] || ['Material Defects', 'Processing Defects', 'Assembly Defects', 'Others'],
                    datasets: [{
                        data: [15, 60, 20, 5],
                        backgroundColor: ['#165DFF', '#36CFC9', '#FF7D00', '#86909C']
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: translations['defect-chart-title'] || 'Defect Type Distribution' }
                    }
                }
            });
        }
    }
    
    // 语言切换
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = document.getElementById('lang-text').textContent;
            if (currentLang === 'EN') {
                updateLanguage('en');
                document.getElementById('lang-text').textContent = '中文';
                localStorage.lang = 'en';
            } else {
                updateLanguage('zh');
                document.getElementById('lang-text').textContent = 'EN';
                localStorage.lang = 'zh';
            }
        });
    }
});

// 语言更新函数
function updateLanguage(lang) {
    const translations = websiteConfig.translations[lang];
    
    // 更新页面标题
    document.title = translations['page-title'] || 'AutoParts - Automotive Parts Manufacturing Expert';
    
    // 更新所有文本元素
    for (const [key, value] of Object.entries(translations)) {
        const el = document.getElementById(key);
        if (el) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                if (value.includes('<br>')) {
                    el.innerHTML = value;
                } else {
                    el.textContent = value;
                }
            }
        }
    }
    
    // 更新导航链接
    const navLinks = translations['nav-links'] || ['Home', 'About Us', 'Products', 'Services', 'Quality', 'News', 'Contact'];
    const desktopLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    desktopLinks.forEach((link, i) => { if (i < navLinks.length) link.textContent = navLinks[i]; });
    mobileLinks.forEach((link, i) => { if (i < navLinks.length) link.textContent = navLinks[i]; });
    
    // 更新产品标签
    const productTabTexts = translations['product-tabs'] || ['All Products', 'Stamping Parts', 'Welding Parts', 'Resource Recycling'];
    const productTabs = document.querySelectorAll('.product-tab');
    productTabs.forEach((tab, i) => { if (i < productTabTexts.length) tab.textContent = productTabTexts[i]; });
    
    // 更新图表标题
    if (window.Chart) {
        const qualityChart = Chart.getChart('qualityChart');
        if (qualityChart) {
            qualityChart.options.plugins.title.text = translations['quality-chart-title'] || 'Product Qualification Rate Trend';
            qualityChart.data.datasets[0].label = translations['quality-chart-label'] || 'Product Qualification Rate (%)';
            qualityChart.data.labels = lang === 'zh' ? ['1月', '2月', '3月', '4月', '5月', '6月'] : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            qualityChart.update();
        }
        
        const defectChart = Chart.getChart('defectChart');
        if (defectChart) {
            defectChart.options.plugins.title.text = translations['defect-chart-title'] || 'Defect Type Distribution';
            defectChart.data.labels = translations['defect-labels'] || ['Material Defects', 'Processing Defects', 'Assembly Defects', 'Others'];
            defectChart.update();
        }
    }
    
    // 更新百度地图信息窗口
    if (window.BMapGL) {
        const map = BMapGL.Map.getInstance('map');
        if (map) {
            const overlays = map.getOverlays();
            overlays.forEach(overlay => {
                if (overlay instanceof BMapGL.Marker) {
                    const infoWindow = new BMapGL.InfoWindow(lang === 'zh' ? 'AutoParts 总部' : 'AutoParts Headquarters');
                    overlay.removeEventListener('click');
                    overlay.addEventListener('click', () => {
                        map.openInfoWindow(infoWindow, overlay.getPosition());
                    });
                }
            });
        }
    }
}