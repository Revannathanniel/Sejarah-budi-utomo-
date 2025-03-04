document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-btn");
    const contentSection = document.getElementById("content");

    const contentData = {
        pendahuluan: `
            <h2>Pendahuluan</h2>
            <p>Pada awal abad ke-20, Indonesia masih berada di bawah penjajahan Belanda. Saat itu, kehidupan rakyat pribumi sangat sulit, terutama dalam hal pendidikan dan ekonomi. Kesempatan belajar bagi rakyat biasa sangat terbatas, karena pendidikan hanya bisa diakses oleh kaum elite dan priyayi.</p>
            <p>Namun, muncul kesadaran di kalangan pemuda, terutama mahasiswa STOVIA (School tot Opleiding van Inlandsche Artsen), bahwa satu-satunya cara untuk meningkatkan kesejahteraan rakyat adalah melalui pendidikan.</p>
            <p>Kesadaran ini melahirkan organisasi Budi Utomo, yang menjadi organisasi modern pertama di Indonesia dan dianggap sebagai awal Kebangkitan Nasional. Organisasi ini bertujuan untuk meningkatkan pendidikan dan kebudayaan pribumi, serta menjadi inspirasi bagi gerakan nasionalisme yang lebih luas hingga menuju kemerdekaan Indonesia.</p>
        `,
        "latar-belakang": `
            <h2>Latar Belakang Pendirian Budi Utomo</h2>
            <p>Budi Utomo lahir karena beberapa faktor penting yang mendorong kesadaran nasional, yaitu:</p>
            <ol>
                <li><strong>Pendidikan yang Tidak Merata</strong><br>Pada masa kolonial, pendidikan di Indonesia sangat terbatas. Sekolah-sekolah yang ada hanya diperuntukkan bagi anak-anak dari kalangan priyayi (bangsawan) dan pegawai pemerintah. Rakyat biasa sulit mendapatkan pendidikan karena biayanya mahal dan kesempatan sangat terbatas. Kurikulum yang diajarkan lebih banyak berorientasi pada kepentingan pemerintah kolonial.</li>
                <li><strong>Politik Etis Belanda (1901)</strong><br>Politik Etis diperkenalkan oleh Ratu Wilhelmina (di usulkan oleh 3 orang Belanda yaitu: Pieter Brooshooft, Conrad Theodor van Deventer, Wolter Robert van Hoëvell) terdiri dari tiga program utama: irigasi (pengairan), emigrasi (perpindahan penduduk), dan edukasi (pendidikan). Pemerintah kolonial mulai membangun beberapa sekolah untuk pribumi, tetapi jumlahnya masih sangat sedikit dan lebih menguntungkan Belanda. Pendidikan untuk pribumi lebih berfokus pada mencetak pegawai rendahan, bukan untuk membangun intelektual pribumi.</li>
                <li><strong>Perubahan Sosial dan Munculnya Kaum Intelektual Pribumi</strong><br>Dengan semakin banyak pribumi yang mendapatkan pendidikan, lahirlah generasi baru yang mulai sadar akan pentingnya persatuan dan kemajuan bangsa. Mereka menyadari bahwa satu-satunya cara untuk meningkatkan kesejahteraan adalah melalui pendidikan.</li>
                <li><strong>Pengaruh dari Pergerakan Nasional di Negara Lain</strong><br>Di luar negeri, banyak bangsa yang mulai melawan penjajahan, seperti di India dengan gerakan Mahatma Gandhi. Pemuda-pemuda Indonesia yang belajar di luar negeri mulai membawa ide-ide nasionalisme dan perlawanan terhadap penjajahan.</li>
            </ol>
        `,
        pendirian: `
            <h2>Pendirian Budi Utomo</h2>
            <p><strong>Kapan dan di Mana Budi Utomo Didirikan?</strong><br>Budi Utomo resmi didirikan pada 20 Mei 1908 di Batavia (sekarang Jakarta). Hari ini kemudian ditetapkan sebagai Hari Kebangkitan Nasional.</p>
            <p><strong>Siapa Pendiri Budi Utomo?</strong></p>
            <ol>
                <li><strong>dr. Wahidin Sudirohusodo</strong><br>Seorang dokter lulusan STOVIA yang memiliki kepedulian terhadap pendidikan pribumi. Ia berkeliling Jawa untuk menggalang dana pendidikan bagi anak-anak pribumi berbakat. Mengusulkan ide pembentukan organisasi yang fokus pada kemajuan bangsa melalui pendidikan.</li>
                <li><strong>dr. Soetomo</strong><br>Mahasiswa STOVIA yang menerima gagasan Wahidin Sudirohusodo. Bersama teman-temannya, ia mengambil langkah konkret dengan mendirikan Budi Utomo. Kelak menjadi tokoh penting dalam pengembangan organisasi ini.</li>
                <li><strong>Goenawan Mangoenkoesoemo & Soeraji</strong><br>Dua mahasiswa STOVIA yang turut serta dalam perumusan dan pendirian Budi Utomo.</li>
                <li><strong>R.T. Ario Tirtokusumo</strong><br>Tokoh yang kemudian terpilih sebagai ketua pertama Budi Utomo.</li>
            </ol>
        `,
        kongres: `
            <h2>Kongres Pertama Budi Utomo dan Hasilnya</h2>
            <p>Setelah berdiri, Budi Utomo segera mengadakan kongres pertamanya pada 3-5 Oktober 1908 di Yogyakarta. Kongres ini bertujuan untuk merumuskan struktur organisasi dan arah perjuangan.</p>
            <p><strong>Hasil Kongres Pertama:</strong></p>
            <ol>
                <li>Ketua pertama organisasi → R.T. Ario Tirtokusumo.</li>
                <li>Kantor pusat organisasi → Yogyakarta.</li>
                <li>Fokus utama organisasi → Pendidikan dan kebudayaan, bukan politik.</li>
            </ol>
            <p>Dalam kongres ini, terjadi perdebatan antara dua kelompok besar dalam organisasi:</p>
            <ul>
                <li>Kelompok muda (seperti dr. Soetomo dan mahasiswa STOVIA) menginginkan agar Budi Utomo lebih aktif dalam pergerakan nasional.</li>
                <li>Kelompok priyayi (golongan bangsawan dan pegawai pemerintahan) lebih memilih jalur yang lebih moderat dan menghindari konfrontasi dengan pemerintah kolonial.</li>
            </ul>
            <p>Akhirnya, Budi Utomo memutuskan untuk berfokus pada peningkatan pendidikan dan kebudayaan pribumi, tanpa terlibat dalam politik.</p>
        `,
        tujuan: `
            <h2>Sifat dan Tujuan Organisasi</h2>
            <p><strong>Sifat Organisasi</strong><br>Budi Utomo adalah organisasi yang bersifat sosial, budaya, dan pendidikan, bukan politik.</p>
            <p><strong>Tujuan Utama:</strong></p>
            <ol>
                <li>Meningkatkan pendidikan rakyat pribumi.</li>
                <li>Memajukan kebudayaan dan kesenian pribumi.</li>
                <li>Mendorong persatuan di kalangan pemuda pribumi.</li>
            </ol>
            <p><strong>Slogan dan Prinsip Budi Utomo:</strong><br>Slogan utama: "Indie Vooruit" atau "Hindia Maju". Mereka percaya bahwa kemajuan bangsa harus dimulai dari pendidikan yang baik.</p>
        `,
        kemunduran: `
            <h2>Kemunduran Organisasi</h2>
            <p>Meskipun awalnya berkembang pesat, Budi Utomo mulai mengalami kemunduran akibat beberapa faktor:</p>
            <ol>
                <li><strong>Kurangnya Keberanian dalam Politik</strong><br>Budi Utomo lebih fokus pada pendidikan dan budaya, sementara rakyat mulai menginginkan perjuangan yang lebih tegas melawan Belanda.</li>
                <li><strong>Munculnya Organisasi Baru</strong><br>Banyak anggota muda yang kecewa dan keluar untuk mendirikan organisasi lain yang lebih aktif dalam perjuangan politik, seperti:
                    <ul>
                        <li>Sarekat Islam (1911) → Dipimpin oleh H.O.S. Tjokroaminoto, lebih fokus pada perjuangan ekonomi dan politik rakyat pribumi.</li>
                        <li>Indische Partij (1912) → Didirikan oleh Tiga Serangkai (Douwes Dekker, Cipto Mangunkusumo, Ki Hajar Dewantara), yang menentang penjajahan secara terang-terangan.</li>
                    </ul>
                </li>
                <li><strong>Bergabung dengan Partai Indonesia Raya (Parindra)</strong><br>Pada Kongres Solo tahun 1935, Budi Utomo bergabung dengan Parindra. Setelah bergabung, nama Budi Utomo mulai tenggelam dan akhirnya tidak lagi aktif sebagai organisasi mandiri.</li>
            </ol>
        `,
        kesimpulan: `
            <h2>Kesimpulan</h2>
            <p>Budi Utomo adalah organisasi modern pertama di Indonesia yang menjadi pelopor gerakan nasionalisme. Meskipun tidak bertahan lama, organisasi ini membuka jalan bagi perjuangan kemerdekaan Indonesia.</p>
            <p><strong>Dampak dan Warisan Budi Utomo:</strong></p>
            <ul>
                <li>Menjadi organisasi pertama yang memicu gerakan nasionalisme di Indonesia.</li>
                <li>Mendorong pentingnya pendidikan bagi rakyat pribumi.</li>
                <li>Menginspirasi lahirnya organisasi-organisasi lain yang lebih aktif dalam perjuangan kemerdekaan.</li>
            </ul>
            <p>Karena peran besarnya, tanggal 20 Mei ditetapkan sebagai Hari Kebangkitan Nasional.</p>
        `
    };

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const section = this.getAttribute("data-section");
            contentSection.innerHTML = contentData[section];
        });
    });
});
