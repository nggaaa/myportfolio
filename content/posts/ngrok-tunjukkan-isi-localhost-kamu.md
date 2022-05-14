+++
date = 2022-05-13T17:00:00Z
tags = ["programming"]
title = "Ngrok - Tunjukkan isi localhost kamu"

+++
Pengen nunjukin projek local kamu ke temen atau tim tanpa harus kirim  source code. Ngrok \[en-ji-rok\] jawabannya.

##### Apa itu??????

Ngrok adalah aplikasi untuk menghubungkan local ke internet melalui jalur yang aman. Untuk lebih jelas bisa kamu baca di website resminya [https://ngrok.com/](https://ngrok.com/ "ngrok.com")

Prinsipnya ngrok akan menghubungkan port yang ditentukan dan akan membuat url untuk mengakses port local tersebut sehingga dapat diakses di public atau internet.

### Instalasi

Untuk instalasi dan penggunaannya cukup simple. Sebelum menggunakan ngrok, kamu harus login atau register jika belum memiliki akun ke [https://ngrok.com/](https://ngrok.com/ "https://ngrok.com/"). Bisa registrasi via email, Google, ataupun GitHub.

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652504544/uploads/ngrok-secure-introspectable-tunnels-to-localhost_o9uexx.png)

Setelah login, kamu bisa download ngrok sesuaiOS yang kamu punya.

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652504768/uploads/Setup-ngrok_wnwen5.png)

Disini aku mendemonstrasikan instalasi mengunakan Windows. Untuk Linux dan Mac OS bisa mengikuti panduan yang ada di websitenya.

Setelah didownload akan ada file zip hasil download ngrok. Ekstrak zipnya.

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652505703/uploads/Screenshot_2022-05-14_122112_oaaf43.png)

Setelah di ekstrak, buka folder hasil ekstrak. Lalu copy atau cut.

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652505847/uploads/Screenshot_2022-05-14_122351_zjhahs.png)

Lalu pastekan ke tempat dimana kamu ingin menyimpan ngrok nya. Misal saya ingin menaruh ngrok saya di `C:\ngrok`. Kalau belum ada, buat foldernya di drive C.

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652506463/uploads/Screenshot_2022-05-14_123413_gzew8v.png)

Setelah file dipindahkan, Copy directory ngrok disimpan. Buka menu search, cari `Edit the system environment variables` Lalu klik.

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652506724/uploads/Screenshot_2022-05-14_123642_qvehkx.png)

Klik Environment Variables.

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652507188/uploads/Screenshot_2022-05-14_124403_glwy7l.png)

Klik Path yang ada di `User Variable`

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652507187/uploads/Screenshot_2022-05-14_124431_ldjd14.png)

Klik New. Lalu akan muncul list kosong baru. Pastekan path ngrok disimpan. Lalu close. Klik Ok.

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652507187/uploads/Screenshot_2022-05-14_124531_f8lvqz.png)

Coba ketikkan di terminal `ngrok -v`. Jika muncul teks seperti di bawah, maka ngrok sukses diinstall.

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652507582/uploads/term_a3t6hi.png)

### Penggunaan

> Untuk setting pertama kali, kamu harus menkonfigurasikan ngrok agar bisa terhubung ke aku [https://ngrok.com/](https://ngrok.com/ "https://ngrok.com/") kamu. Masuk ke [https://ngrok.com/](https://ngrok.com/ "https://ngrok.com/") untuk masuk ke dashboard. Klik Getting Started > Setup & Instalation. Scroll ke bawah sampai ke bagiian Connect your account. Lalu copy kan command yang ada di sana
>
> ![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652508384/uploads/Setup-ngrok_1_sg8no5.png)

Pastikan web server kalian berjalan. Contohnya NodeJS. Port yang berjalan di aplikasi ini adalah port 4040

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652508641/uploads/Screenshot_2022-05-14_130920_od18so.png)

Ketikkan `bash ngrok http <port>`

`Note: <port> -> ganti dengan port yang berjalan`

Lalu akan muncul teks seperti ini.

![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652509063/uploads/ngrokurl_u5u7ub.png)

Untuk yang digarisbawahi adalah url public yang bisa diakses oleh semua orang. Untuk url yang dibuat akan acak kecuali jika kamu berlangganan di website [https://ngrok.com/](https://ngrok.com/ "https://ngrok.com/") 

Mungkin itu saja yang aku bisa tulis. Kamu bisa bereksperimen dengan teknik yang sudah kalian dapatkan.

Thx.