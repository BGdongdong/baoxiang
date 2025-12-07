const websiteConfig = {
    siteName: {
        zh: "AutoParts",
        en: "AutoParts"
    },
    siteDesc: {
        zh: "专业的汽车冲压件、焊接件生产及资源回收解决方案提供商",
        en: "Professional automotive stamping parts, welding parts production and resource recycling solutions provider"
    },
    
    // 使用占位图服务（可直接显示，用户后续替换）
    images: {
        // Logo
        "logo-img": "https://via.placeholder.com/120x40?text=AutoParts",
        "footer-logo": "https://via.placeholder.com/120x40?text=AutoParts",
        
        // 首页轮播图
        "hero-img-1": "https://via.placeholder.com/800x500?text=汽车零部件制造",
        "hero-img-2": "https://via.placeholder.com/800x500?text=技术创新",
        "hero-img-3": "https://via.placeholder.com/800x500?text=绿色制造",
        
        // 关于我们
        "about-img": "https://via.placeholder.com/800x500?text=公司介绍",
        
        // 资质认证
        "cert-1": "https://via.placeholder.com/200x100?text=ISO9001",
        "cert-2": "https://via.placeholder.com/200x100?text=TS16949",
        "cert-3": "https://via.placeholder.com/200x100?text=质量管理体系",
        "cert-4": "https://via.placeholder.com/200x100?text=环境管理体系",
        
        // 产品图片
        "product-1-img": "https://via.placeholder.com/400x300?text=车身冲压件",
        "product-2-img": "https://via.placeholder.com/400x300?text=底盘冲压件",
        "product-3-img": "https://via.placeholder.com/400x300?text=焊接总成件",
        "product-4-img": "https://via.placeholder.com/400x300?text=排气管焊接件",
        "product-5-img": "https://via.placeholder.com/400x300?text=金属回收",
        "product-6-img": "https://via.placeholder.com/400x300?text=零部件回收",
        
        // 技术服务
        "process-1-img": "https://via.placeholder.com/800x400?text=冲压工艺",
        "process-2-img": "https://via.placeholder.com/800x400?text=焊接工艺",
        "equipment-1-img": "https://via.placeholder.com/400x300?text=冲压设备",
        "equipment-2-img": "https://via.placeholder.com/400x300?text=焊接机器人",
        "equipment-3-img": "https://via.placeholder.com/400x300?text=检测设备",
        
        // 新闻资讯
        "news-1-img": "https://via.placeholder.com/400x200?text=新生产线",
        "news-2-img": "https://via.placeholder.com/400x200?text=行业趋势",
        "news-3-img": "https://via.placeholder.com/400x200?text=技术创新"
    },
    
    translations: {
        zh: {
            "page-title": "AutoParts - 汽车零部件制造专家",
            "brand-name": "AutoParts",
            "hero-title": "专业汽车零部件<br>制造解决方案",
            "hero-desc": "专注于冲压件、焊接件生产及资源回收，为汽车行业提供高品质、定制化的零部件产品和服务",
            "advantage-1-title": "先进制造工艺",
            "advantage-1-desc": "采用国际领先的冲压和焊接技术，确保产品精度和一致性",
            "advantage-2-title": "严格质量控制",
            "advantage-2-desc": "全流程质量检测体系，通过ISO/TS16949等多项认证",
            "advantage-3-title": "绿色可持续发展",
            "advantage-3-desc": "专业的资源回收利用体系，助力环保与可持续发展",
            
            // 关于我们
            "about-tag": "关于我们",
            "about-title": "领先的汽车零部件解决方案提供商",
            "stat-1": "行业经验",
            "stat-2": "合作伙伴",
            "stat-3": "年产量",
            "stat-4": "技术专利",
            "cert-tag": "生产资质",
            "cert-title": "权威认证 品质保证",
            
            // 产品展示
            "products-tag": "产品展示",
            "products-title": "多元化产品系列",
            "products-desc": "我们提供全面的汽车零部件解决方案，涵盖冲压件、焊接件及资源回收等多个领域",
            "product-tabs": ["全部产品", "冲压件", "焊接件", "资源回收"],
            "product-1-title": "汽车车身冲压件",
            "product-1-desc": "高精度车身结构件，采用高强度钢材，确保车身刚性和安全性",
            "product-2-title": "底盘冲压件",
            "product-2-desc": "底盘悬挂系统零部件，精密冲压工艺，确保行车稳定性",
            "product-3-title": "焊接总成件",
            "product-3-desc": "激光焊接总成部件，高精度焊接工艺，确保结构强度和耐久性",
            "product-4-title": "排气管焊接件",
            "product-4-desc": "耐高温排气管焊接组件，耐腐蚀材料，确保排气系统性能",
            "product-5-title": "金属回收利用",
            "product-5-desc": "废旧金属材料回收再利用，环保工艺，降低生产成本",
            "product-6-title": "废旧零部件回收",
            "product-6-desc": "废旧汽车零部件拆解回收，专业处理，资源再利用",
            
            // 技术服务
            "services-tag": "技术服务",
            "services-title": "专业技术支持与服务",
            "services-desc": "从产品设计到生产制造，我们提供全方位的技术支持和解决方案",
            "process-1-title": "冲压工艺",
            "process-1-desc": "采用先进的冲压设备和工艺，可完成复杂形状零部件的高精度冲压成型。拥有200-1600吨不同规格的冲压生产线，实现从薄板到厚板的全范围加工能力。",
            "process-2-title": "焊接工艺",
            "process-2-desc": "集成多种先进焊接技术，包括点焊、弧焊、激光焊接等，确保焊接质量和效率。自动化焊接生产线提高了生产效率和产品一致性。",
            "equipment-tag": "设备展示",
            "equipment-title": "先进设备 精良制造",
            "equipment-1-title": "精密冲压设备",
            "equipment-1-desc": "日本小松1600吨全自动冲压生产线，高精度，高效率",
            "equipment-2-title": "焊接机器人",
            "equipment-2-desc": "德国KUKA焊接机器人，六轴联动，高精度焊接",
            "equipment-3-title": "质量检测设备",
            "equipment-3-desc": "德国蔡司三坐标测量仪，三维尺寸精度检测",
            
            // 质量保障
            "quality-tag": "质量保障",
            "quality-title": "严格的质量管理体系",
            "quality-desc": "我们建立了完善的质量管理体系，确保每一件产品都符合最高标准",
            "quality-1-title": "来料检验",
            "quality-1-desc": "所有原材料进厂前均经过严格检验，确保材质符合标准要求，从源头控制产品质量。",
            "quality-2-title": "过程控制",
            "quality-2-desc": "生产过程中实施全面质量控制，关键工序设置质量控制点，实时监控生产参数。",
            "quality-3-title": "成品检测",
            "quality-3-desc": "成品出库前进行100%全检，包括尺寸检测、外观检查、性能测试等，确保产品合格。",
            "quality-data-title": "产品质量数据",
            "quality-chart-title": "产品合格率趋势",
            "quality-chart-label": "产品合格率 (%)",
            "defect-chart-title": "缺陷类型分布",
            "defect-labels": ["材料缺陷", "加工缺陷", "装配缺陷", "其他"],
            
            // 新闻资讯
            "news-tag": "新闻资讯",
            "news-title": "公司动态与行业资讯",
            "news-desc": "了解我们的最新动态和行业发展趋势",
            "news-1-cat": "公司新闻",
            "news-1-title": "公司新生产线正式投产",
            "news-1-desc": "我公司投资新建的自动化冲压生产线正式投产，年产能提升30%，将更好地满足客户需求。",
            "news-2-cat": "行业资讯",
            "news-2-title": "汽车零部件行业发展趋势分析",
            "news-2-desc": "随着新能源汽车的快速发展，汽车零部件行业正面临新的机遇和挑战，轻量化、智能化成为发展方向。",
            "news-3-cat": "技术创新",
            "news-3-title": "新型高强度钢冲压技术研发成功",
            "news-3-desc": "我公司研发的新型高强度钢冲压技术获得国家专利，可有效提高零部件强度，降低车身重量。",
            
            // 联系我们
            "contact-tag": "联系我们",
            "contact-title": "与我们建立合作",
            "contact-desc": "无论您有任何问题或需求，我们都将竭诚为您服务",
            "contact-info-title": "联系方式",
            "contact-address-title": "公司地址",
            "contact-address": "江苏省苏州市工业园区星海街123号",
            "contact-phone-title": "联系电话",
            "contact-phone": "0512-12345678<br>138-1234-5678",
            "contact-email-title": "电子邮箱",
            "contact-email": "info@autoparts.com<br>sales@autoparts.com",
            "contact-hours-title": "工作时间",
            "contact-hours": "周一至周五: 8:00 - 17:30<br>周六至周日: 休息",
            "contact-social-title": "关注我们",
            "contact-form-title": "发送消息",
            "form-name-label": "姓名",
            "form-email-label": "邮箱",
            "form-subject-label": "主题",
            "form-message-label": "消息内容",
            
            // 页脚
            "footer-brand": "AutoParts",
            "footer-desc": "专业的汽车零部件制造商，致力于为全球客户提供高品质的产品和服务。",
            "footer-links-title": "快速链接",
            "footer-products-title": "产品中心",
            "footer-contact-title": "联系我们",
            "footer-copyright": "&copy; 2023 AutoParts. 保留所有权利。",
            "footer-privacy": "隐私政策",
            "footer-terms": "使用条款",
            "footer-sitemap": "网站地图",
            
            // 导航链接
            "nav-links": ["首页", "关于我们", "产品展示", "技术服务", "质量保障", "新闻资讯", "联系我们"]
        },
        en: {
            "page-title": "AutoParts - Automotive Parts Manufacturing Expert",
            "brand-name": "AutoParts",
            "hero-title": "Professional Automotive Parts<br>Manufacturing Solutions",
            "hero-desc": "Focus on stamping parts, welding parts production and resource recycling, providing high-quality, customized parts products and services for the automotive industry",
            "advantage-1-title": "Advanced Manufacturing Process",
            "advantage-1-desc": "Adopt internationally leading stamping and welding technologies to ensure product precision and consistency",
            "advantage-2-title": "Strict Quality Control",
            "advantage-2-desc": "Full-process quality inspection system, certified by ISO/TS16949 and other certifications",
            "advantage-3-title": "Green Sustainable Development",
            "advantage-3-desc": "Professional resource recycling system to support environmental protection and sustainable development",
            
            // 关于我们
            "about-tag": "About Us",
            "about-title": "Leading Provider of Automotive Parts Solutions",
            "stat-1": "Industry Experience",
            "stat-2": "Partners",
            "stat-3": "Annual Output",
            "stat-4": "Technical Patents",
            "cert-tag": "Production Qualifications",
            "cert-title": "Authoritative Certification Quality Assurance",
            
            // 产品展示
            "products-tag": "Products",
            "products-title": "Diversified Product Series",
            "products-desc": "We provide comprehensive automotive parts solutions, covering stamping parts, welding parts and resource recycling",
            "product-tabs": ["All Products", "Stamping Parts", "Welding Parts", "Resource Recycling"],
            "product-1-title": "Automotive Body Stamping Parts",
            "product-1-desc": "High-precision body structural parts, using high-strength steel to ensure body rigidity and safety",
            "product-2-title": "Chassis Stamping Parts",
            "product-2-desc": "Chassis suspension system parts, precision stamping process to ensure driving stability",
            "product-3-title": "Welding Assembly Parts",
            "product-3-desc": "Laser welding assembly parts, high-precision welding process to ensure structural strength and durability",
            "product-4-title": "Exhaust Pipe Welding Parts",
            "product-4-desc": "High-temperature resistant exhaust pipe welding components, corrosion-resistant materials to ensure exhaust system performance",
            "product-5-title": "Metal Recycling",
            "product-5-desc": "Recycling and reuse of waste metal materials, environmental protection process to reduce production costs",
            "product-6-title": "Waste Parts Recycling",
            "product-6-desc": "Disassembly and recycling of waste automotive parts, professional treatment for resource reuse",
            
            // 技术服务
            "services-tag": "Technical Services",
            "services-title": "Professional Technical Support and Services",
            "services-desc": "From product design to production, we provide comprehensive technical support and solutions",
            "process-1-title": "Stamping Process",
            "process-1-desc": "Adopt advanced stamping equipment and processes to complete high-precision stamping forming of complex-shaped parts. With 200-1600 ton stamping production lines of different specifications, achieving full-range processing capacity from thin plates to thick plates.",
            "process-2-title": "Welding Process",
            "process-2-desc": "Integrate various advanced welding technologies, including spot welding, arc welding, laser welding, etc., to ensure welding quality and efficiency. Automated welding production lines improve production efficiency and product consistency.",
            "equipment-tag": "Equipment Display",
            "equipment-title": "Advanced Equipment Sophisticated Manufacturing",
            "equipment-1-title": "Precision Stamping Equipment",
            "equipment-1-desc": "Japan Komatsu 1600-ton fully automatic stamping production line, high precision and efficiency",
            "equipment-2-title": "Welding Robot",
            "equipment-2-desc": "Germany KUKA welding robot, six-axis linkage, high-precision welding",
            "equipment-3-title": "Quality Inspection Equipment",
            "equipment-3-desc": "Germany Zeiss three-coordinate measuring instrument, 3D dimensional accuracy inspection",
            
            // 质量保障
            "quality-tag": "Quality Assurance",
            "quality-title": "Strict Quality Management System",
            "quality-desc": "We have established a complete quality management system to ensure every product meets the highest standards",
            "quality-1-title": "Incoming Material Inspection",
            "quality-1-desc": "All raw materials are strictly inspected before entering the factory to ensure the material meets standard requirements and control product quality from the source.",
            "quality-2-title": "Process Control",
            "quality-2-desc": "Implement comprehensive quality control in the production process, set quality control points in key processes, and monitor production parameters in real time.",
            "quality-3-title": "Finished Product Inspection",
            "quality-3-desc": "100% inspection of finished products before delivery, including dimensional inspection, appearance inspection, performance testing, etc., to ensure product qualification.",
            "quality-data-title": "Product Quality Data",
            "quality-chart-title": "Product Qualification Rate Trend",
            "quality-chart-label": "Product Qualification Rate (%)",
            "defect-chart-title": "Defect Type Distribution",
            "defect-labels": ["Material Defects", "Processing Defects", "Assembly Defects", "Others"],
            
            // 新闻资讯
            "news-tag": "News",
            "news-title": "Company News and Industry Information",
            "news-desc": "Learn about our latest developments and industry trends",
            "news-1-cat": "Company News",
            "news-1-title": "New Production Line Officially Put into Operation",
            "news-1-desc": "The new automated stamping production line invested by our company was officially put into operation, increasing annual production capacity by 30%, which will better meet customer needs.",
            "news-2-cat": "Industry News",
            "news-2-title": "Analysis of Development Trends in the Automotive Parts Industry",
            "news-2-desc": "With the rapid development of new energy vehicles, the automotive parts industry is facing new opportunities and challenges, with lightweight and intelligence becoming development directions.",
            "news-3-cat": "Technological Innovation",
            "news-3-title": "New High-Strength Steel Stamping Technology Successfully Developed",
            "news-3-desc": "The new high-strength steel stamping technology developed by our company has obtained a national patent, which can effectively improve part strength and reduce body weight.",
            
            // 联系我们
            "contact-tag": "Contact Us",
            "contact-title": "Establish Cooperation with Us",
            "contact-desc": "Whether you have any questions or needs, we will serve you wholeheartedly",
            "contact-info-title": "Contact Information",
            "contact-address-title": "Company Address",
            "contact-address": "123 Xinghai Street, Industrial Park, Suzhou City, Jiangsu Province",
            "contact-phone-title": "Contact Phone",
            "contact-phone": "0512-12345678<br>138-1234-5678",
            "contact-email-title": "Email",
            "contact-email": "info@autoparts.com<br>sales@autoparts.com",
            "contact-hours-title": "Working Hours",
            "contact-hours": "Monday to Friday: 8:00 - 17:30<br>Saturday and Sunday: Rest",
            "contact-social-title": "Follow Us",
            "contact-form-title": "Send Message",
            "form-name-label": "Name",
            "form-email-label": "Email",
            "form-subject-label": "Subject",
            "form-message-label": "Message Content",
            
            // 页脚
            "footer-brand": "AutoParts",
            "footer-desc": "Professional automotive parts manufacturer dedicated to providing high-quality products and services to customers worldwide.",
            "footer-links-title": "Quick Links",
            "footer-products-title": "Product Center",
            "footer-contact-title": "Contact Us",
            "footer-copyright": "&copy; 2023 AutoParts. All rights reserved.",
            "footer-privacy": "Privacy Policy",
            "footer-terms": "Terms of Use",
            "footer-sitemap": "Site Map",
            
            // 导航链接
            "nav-links": ["Home", "About Us", "Products", "Services", "Quality", "News", "Contact"]
        }
    }
};