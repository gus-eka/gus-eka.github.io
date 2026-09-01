// ====================================================================
// 🛠️ CONFIGURATION DATA (WEDDING DATA)
// SILAKAN EDIT SEMUA TEXT, FOTO, DAN LINK DI DALAM KOTAK INI!
// ====================================================================
const WEDDING_DATA = {
    googleSheetUrl: "https://script.google.com/a/~/macros/s/AKfycbzAdINo5-JaLNo4_x2vqwtv_XErRaLB_xB4y9MPimaVQa6_ivkmEHo_sa26TYZJneGP/exec",
    authToken: "5A9EsdY6b5hg3lKYYV6TbzqUziLSbMQlj2uxwivdQUJt27LRIbVmbPbWCGBBRsdI",
    
    loading: {
        text: "The Wedding of Gus Eka & Ayu Krisma"
    },
    slideshow: { // The MASTER/GLOBAL setting
        interval: 5000,  // How long a photo stays on screen (e.g., 5000ms = 5 seconds)
        duration: 2000   // How slow the fade effect is (e.g., 1500ms = 1.5 seconds)
    },
    title: {
        name: "The Wedding of Gus Eka & Ayu Krisma"
    },
    greeting: {
        icon: "assets/images/gold.png",
        sign: "Om Swastiastu",
        content: "Dengan penuh kebahagiaan",
        content2: `“May the two of you be blessed with a lifetime of love, harmony, and meaningful days together.”`,
        content3: "Dengan memohon rahmat Ida Sang Hyang Widhi Wasa, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu.",
        bgImage: "assets/images/quote.webp"
    },
    closing: {
        sign: "Om Santih, Santih, Santih, Om",
        content: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.",
        bgImage: "assets/images/closing.webp"
    },
    cover: {
        title: "Gus Eka <span class='font-script text-brand-gold my-2'>&</span> Ayu Krisma",
        images: [
            "assets/images/cover1_portrait.webp", 
            "assets/images/cover2_portrait.webp",
            "assets/images/cover3_portrait.webp"
        ],
        imagesPortrait: [
            "assets/images/cover1_portrait.webp", 
            "assets/images/cover2_portrait.webp",
            "assets/images/cover3_portrait.webp"
        ],
        imagesLandscape: [
            "assets/images/cover1_landscape.webp", 
            "assets/images/cover3_landscape.webp"
        ],
        slideshow: {
             interval: 5000,
             duration: 3000
        }
    },
    groom: {
        fullName: "Ida Bagus Putu Eka Narayana",
        parents: "Putra Pertama dari Pasangan:<br><span class='font-semibold text-brand-dark'>Bapak Ida Bagus Surya Candra<br/>&<br/>Ibu Dayu</span>",
        address: "Geriya Gede Batutabih, Banjar Takmung, Klungkung",
        ig: "@ib.eka",
        igLink: "https://instagram.com/ib.eka",
        images: [
            "assets/images/groom1.webp"
        ],
        slideshow: {
             interval: 7000,
             duration: 3000
        }
    },
    bride: {
        fullName: "Dewa Ayu Komang Krismanitasari",
        parents: "Putri Ketiga dari Pasangan:<br><span class='font-semibold text-brand-dark'>Bapak Dewa Ardika (Alm.)<br/>&<br/>Ibu Wayan Gatri</span>",
        address: "Banjar Sumbul, Desa Yeh Sumbul, Jembrana",
        ig: "@dewayukrisma",
        igLink: "https://instagram.com/dewayukrisma",
        images: [
            "assets/images/bride1.webp"
        ],
        slideshow: {
             interval: 7000,
             duration: 3000
        }
    },
    event: {
        countdownTarget: "Oct 07, 2026 16:00:00", // Format Wajib: "MMM DD, YYYY HH:MM:SS"
        resepsiDate: "Rabu, 07 Oktober 2026",
        resepsiStartTime: "16.00",
        resepsiEndTime: "21.30",
        timezone: "WITA",
        resepsiVenue: "Geriya Gede Batutabih",
        resepsiAddress: "Jl. Raya Batu Tabih, Takmung, Kec. Banjarangkan, Kabupaten Klungkung, Bali",
        mapLink: "https://maps.app.goo.gl/Rc99MqnDxDzp4xWEA",
        bgImage: "assets/images/event.webp"
    },
    gift: {
        bgImage: "assets/images/gift.webp",
        content: "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun, jika Bapak/Ibu/Saudara/i bermaksud memberikan tanda kasih, dapat melalui fitur di bawah ini:",
        banks: [
            { 
                bankName: "BCA", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1920px-Bank_Central_Asia.svg.png", 
                no: "6690440332", 
                name: "DW A KM KRISMANITASARI" 
            },
            { 
                bankName: "MANDIRI", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=original", 
                no: "1450014899385", 
                name: "IDA BAGUS PUTU EKA NARAYANA" 
            }
        ]
    },
    galleryImages: [
        "assets/images/gallery/gallery1.webp", 
        "assets/images/gallery/gallery2.webp",  
        "assets/images/gallery/gallery3.webp", 
        "assets/images/gallery/gallery4.webp",
        "assets/images/gallery/gallery5.webp", 
        "assets/images/gallery/gallery6.webp",
        "assets/images/gallery/gallery7.webp", 
        "assets/images/gallery/gallery8.webp",
        "assets/images/gallery/gallery9.webp", 
        "assets/images/gallery/gallery10.webp",
        "assets/images/gallery/gallery11.webp",
        "assets/images/gallery/gallery12.webp", 
        "assets/images/gallery/gallery13.webp",
        "assets/images/gallery/gallery14.webp",
        "assets/images/gallery/gallery15.webp",
        "assets/images/gallery/gallery16.webp"     
    ]
};