// قائمة الكوبونات الأسطورية مرتبة حسب عدد اللايكات
const couponsDatabase = {
    "MOSSLIM-10K": { likes: 10000, color: "gold" },   // المركز الأول
    "GAMER-5000": { likes: 5000, color: "purple" },   // المركز الثاني
    "TUBE-1000": { likes: 1000, color: "blue" },      // المركز الثالث
    "START-500": { likes: 500, color: "green" },      // المركز الرابع
    "GIFT-100": { likes: 100, color: "white" }        // المركز الخامس
};

// محاكاة لعملية الفحص (لتشغيل كودك الحالي)
window.fetch = (url) => {
    return new Promise((resolve) => {
        const urlObj = new URL(url, window.location.origin);
        if (urlObj.pathname === '/check-coupon') {
            const code = urlObj.searchParams.get('code');
            const found = couponsDatabase[code];

            if (found) {
                resolve({
                    json: () => Promise.resolve({ valid: true, likes: found.likes })
                });
            } else {
                resolve({
                    json: () => Promise.resolve({ valid: false, message: "كود غير صحيح يا بطل!" })
                });
            }
        }
    });
};
