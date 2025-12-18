<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
    <img
      src="@/assets/images/image 2.png"
      alt="Halaman Tidak Ditemukan"
      class="mx-auto mb-12 w-48 md:w-64 object-contain"  
    />

    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Halaman Tidak Ditemukan
    </h1>

    <p class="text-base md:text-lg text-gray-600 max-w-md">
      Maaf, halaman yang kamu cari sedang dalam tahap pengembangan, silahkan coba lagi nanti.
    </p>

    <router-link
      to="/"
      class="mt-10 inline-block px-8 py-3 bg-gradient-to-r from-blue-900 to-indigo-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
    >
      Kembali ke Beranda
    </router-link>
  </div>
</template>

