<template>
  <div class="about-page container mx-auto px-2 py-2 md:py-2 font-poppins">
    <div
      class="p-8 md:p-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-2xl border border-blue-700/30 hover:shadow-blue-900/50 hover:shadow-2xl transition-all duration-500"
    >
      <p
        class="text-left text-2xl font-bold mb-10 pb-4 border-b border-blue-600/40 text-white"
      >
        Hai Semuanya! 👋
      </p>

      <div
        class="lg:flex lg:items-center lg:space-x-16 mb-16 transition-all duration-700 ease-out"
      >
        <div
          class="lg:w-1/2 order-1 lg:order-1 mb-10 lg:mb-0 flex justify-center lg:justify-start"
        >
          <div class="relative group">
            <img
              src="@/assets/images/About.png"
              alt="Ilustrasi Developer"
              class="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 rounded-2xl ring-4 ring-blue-400/30 group-hover:ring-blue-300/50 transition-all duration-500 pointer-events-none"
            ></div>
          </div>
        </div>

        <div class="lg:w-1/2 order-2 lg:order-2 space-y-7">
          <section>
            <h2
              class="text-4xl font-extrabold mb-5 text-blue-200 leading-tight"
            >
              Tentang Saya
            </h2>

            <p class="text-lg text-gray-200 leading-relaxed mb-6">
              Saya adalah seorang
              <span class="font-semibold text-blue-300">developer muda</span>
              dan juga seorang <span class="font-semibold text-blue-300">UI/UX Designer muda</span>yang berdedikasi untuk menciptakan solusi digital inovatif melalui
              <strong class="text-white">Full Stack Development</strong>. Saya
              percaya bahwa teknologi bukan sekadar baris kode, melainkan
              jembatan untuk mengubah ide kreatif menjadi antarmuka pengguna
              yang memukau dan sistem <em class="text-blue-300">backend</em>
              yang tangguh.
            </p>
          </section>
        </div>
      </div>

      <div class="border-t border-blue-600/40 pt-12">
        <h2 class="text-4xl font-extrabold mb-12 text-center text-blue-200">
          Sertifikat Saya
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            class="group relative bg-gradient-to-br from-blue-800 to-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-600/40"
          >
            <a
              href="https://www.dicoding.com/certificates/GRX528JWKX0M"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <div class="relative overflow-hidden rounded-xl mb-5">
                <img
                  src="@/assets/certificates/dicoding-1.png"
                  alt="IBM Full Stack Software Developer Professional Certificate - Coursera"
                  class="w-full h-auto object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  class="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                >
                  <span class="text-white font-bold text-lg"
                    >Lihat Sertifikat →</span
                  >
                </div>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">
                Belajar Dasar Pemrograman Web
              </h3>
              <p class="text-blue-200 text-sm mb-1">Dicoding Indonesia</p>
              <p class="text-blue-300 text-xs">Diterbitkan: November 2023</p>
            </a>
          </div>

          <div
            class="group relative bg-gradient-to-br from-blue-800 to-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-600/40"
          >
            <a
              href="https://www.dicoding.com/certificates/81P2NJ7WNXOY"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <div class="relative overflow-hidden rounded-xl mb-5">
                <img
                  src="@/assets/certificates/dicoding-2.png"
                  alt="Responsive Web Design Certification - freeCodeCamp"
                  class="w-full h-auto object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  class="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                >
                  <span class="text-white font-bold text-lg"
                    >Lihat Sertifikat →</span
                  >
                </div>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">
                Belajar Prinsip Pemrograman Solid
              </h3>
              <p class="text-blue-200 text-sm mb-1">Dicoding Indonesia</p>
              <p class="text-blue-300 text-xs">Diterbitkan: Agustus 2024</p>
            </a>
          </div>
        </div>

        <p class="text-center mt-10 text-gray-300">
          Semua sertifikat dapat diverifikasi melalui link resmi yang
          disediakan.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
