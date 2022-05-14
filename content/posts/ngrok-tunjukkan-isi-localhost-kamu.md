+++
date = 2022-05-13T17:00:00Z
tags = ["programming"]
title = "Ngrok - Tunjukkan isi localhost kamu"

+++
Pengen nunjukin projek local kamu ke temen atau tim tanpa harus kirim  source code. Ngrok \[en-ji-rok\] jawabannya.
<br>
##### Apa itu??????
<br>
Ngrok adalah aplikasi untuk menghubungkan local ke internet melalui jalur yang aman. Untuk lebih jelas bisa kamu baca di website resminya [https://ngrok.com/](https://ngrok.com/ "ngrok.com")
<br>
<br>
Prinsipnya ngrok akan menghubungkan port yang ditentukan dan akan membuat url untuk mengakses port local tersebut sehingga dapat diakses di public atau internet.
<br>
<br>
### Instalasi
<br>
<br>
Untuk instalasi dan penggunaannya cukup simple. Sebelum menggunakan ngrok, kamu harus login atau register jika belum memiliki akun ke [https://ngrok.com/](https://ngrok.com/ "https://ngrok.com/"). Bisa registrasi via email, Google, ataupun GitHub.
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652504544/uploads/ngrok-secure-introspectable-tunnels-to-localhost_o9uexx.png)
<br>
<br>
Setelah login, kamu bisa download ngrok sesuaiOS yang kamu punya.
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652504768/uploads/Setup-ngrok_wnwen5.png)
<br>
<br>
Disini aku mendemonstrasikan instalasi mengunakan Windows. Untuk Linux dan Mac OS bisa mengikuti panduan yang ada di websitenya.
<br>
<br>
Setelah didownload akan ada file zip hasil download ngrok. Ekstrak zipnya.
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652505703/uploads/Screenshot_2022-05-14_122112_oaaf43.png)
<br>
<br>
Setelah di ekstrak, buka folder hasil ekstrak. Lalu copy atau cut.
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652505847/uploads/Screenshot_2022-05-14_122351_zjhahs.png)
<br>
<br>
Lalu pastekan ke tempat dimana kamu ingin menyimpan ngrok nya. Misal saya ingin menaruh ngrok saya di `C:\ngrok`. Kalau belum ada, buat foldernya di drive C.
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652506463/uploads/Screenshot_2022-05-14_123413_gzew8v.png)
<br>
<br>
Setelah file dipindahkan, Copy directory ngrok disimpan. Buka menu search, cari `Edit the system environment variables` Lalu klik.
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652506724/uploads/Screenshot_2022-05-14_123642_qvehkx.png)
<br>
<br>
Klik Environment Variables.
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652507188/uploads/Screenshot_2022-05-14_124403_glwy7l.png)<br>
<br>

Klik Path yang ada di `User Variable`
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652507187/uploads/Screenshot_2022-05-14_124431_ldjd14.png)
<br>
<br>
Klik New. Lalu akan muncul list kosong baru. Pastekan path ngrok disimpan. Lalu close. Klik Ok.
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652507187/uploads/Screenshot_2022-05-14_124531_f8lvqz.png)
<br>
<br>
Coba ketikkan di terminal `ngrok -v`. Jika muncul teks seperti di bawah, maka ngrok sukses diinstall.
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652507582/uploads/term_a3t6hi.png)<br>
<br><br>
<br>
### Penggunaan<br>

> Untuk setting pertama kali, kamu harus menkonfigurasikan ngrok agar bisa terhubung ke aku [https://ngrok.com/](https://ngrok.com/ "https://ngrok.com/") kamu. Masuk ke [https://ngrok.com/](https://ngrok.com/ "https://ngrok.com/") untuk masuk ke dashboard. 
> Klik "Getting Started > Setup & Instalation". Scroll ke bawah sampai ke bagiian Connect your account. Lalu copy kan command yang ada di sana
>
> ![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652508384/uploads/Setup-ngrok_1_sg8no5.png)
>
<br>
<br>
Pastikan web server kalian berjalan. Contohnya NodeJS. Port yang berjalan di aplikasi ini adalah port 4040
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652508641/uploads/Screenshot_2022-05-14_130920_od18so.png)
<br>
<br>
Ketikkan `bash ngrok http <port>`
`Note: <port> -> ganti dengan port yang berjalan`
Lalu akan muncul teks seperti ini.
<br>
<br>
![](https://res.cloudinary.com/dblexpcs4/image/upload/v1652509063/uploads/ngrokurl_u5u7ub.png)
<br>
<br>
Untuk yang digarisbawahi adalah url public yang bisa diakses oleh semua orang. Untuk url yang dibuat akan acak kecuali jika kamu berlangganan di website [https://ngrok.com/](https://ngrok.com/ "https://ngrok.com/") 
<br>
<br>
Mungkin itu saja yang aku bisa tulis. Kamu bisa bereksperimen dengan teknik yang sudah kalian dapatkan.
<br>
<br>
Thx.