<template>
  <div class="contact-page container mx-auto px-4 py-4 md:py-4 font-poppins">
    <div
      class="p-8 md:p-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-2xl border border-blue-700/30 hover:shadow-blue-900/50 hover:shadow-2xl transition-all duration-500"
    >
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-blue-200 mb-4">
          Hubungi Saya
        </h2>
        <p class="text-lg text-gray-200 max-w-3xl mx-auto">
          Saya terbuka untuk peluang kolaborasi baru dan pekerjaan *freelance*.
          Mari diskusikan proyek Anda!
        </p>
      </div>

      <div class="lg:flex lg:space-x-12">
        <div
          class="lg:w-1/3 mb-10 lg:mb-0 space-y-8 p-6 rounded-xl bg-blue-800/50 border border-blue-600/40"
        >
          <h3
            class="text-2xl font-bold text-white mb-4 border-b pb-3 border-blue-600/40"
          >
            Detail Kontak
          </h3>

          <div class="flex items-start space-x-4">
            <svg
              class="w-6 h-6 text-blue-300 flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
              ></path>
            </svg>
            <div>
              <p class="text-sm font-semibold text-gray-200">Email</p>
              <a
                :href="'mailto:' + contactInfo.email"
                class="text-blue-300 hover:text-blue-100 transition duration-300 font-medium break-all"
              >
                {{ contactInfo.email }}
              </a>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <svg
              class="w-6 h-6 text-blue-300 flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-4.5a14.504 14.504 0 01-14.5-14.5V5z"
              ></path>
            </svg>
            <div>
              <p class="text-sm font-semibold text-gray-200">Telepon</p>
              <a
                :href="'tel:' + contactInfo.phone"
                class="text-white hover:text-blue-300 transition duration-300 font-medium"
              >
                {{ contactInfo.phone }}
              </a>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <svg
              class="w-6 h-6 text-blue-300 flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <div>
              <p class="text-sm font-semibold text-gray-200">Lokasi</p>
              <p class="text-white font-medium">{{ contactInfo.location }}</p>
            </div>
          </div>

          <div class="pt-4 border-t border-blue-600/40">
            <h4 class="text-lg font-semibold text-white mb-3">Ikuti Saya</h4>
            <div class="flex space-x-4">
              <a
                :href="contactInfo.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-blue-300 transition duration-300"
              >
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.526-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
              <a
                :href="contactInfo.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-blue-300 transition duration-300"
              >
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.865 8.163 6.83 9.497.5.092.682-.217.682-.483 0-.237-.008-.853-.013-1.67a5.27 5.27 0 01-1.55-2.012c-.5-.853-1.21-2.155-2.92-3.088-.475-.252-.924-.378-.069-.387 1.258-.009 1.916 1.233 2.183 1.75.148.247.388.463.635.635.252.17.513.27.778.31.266.04.536.059.805-.008 2.05-.224 2.868-1.526 3.036-2.072.168-.546.168-1.02-.008-1.467-2.316-.217-4.757-1.15-4.757-5.152 0-1.14.409-2.083 1.083-2.822-.108-.255-.47-1.34.102-2.855 0 0 .88-.282 2.87.817.83-.23 1.716-.347 2.607-.352.89.005 1.776.122 2.606.352 1.99-1.1 2.87-.817 2.87-.817.572 1.515.21 2.599.102 2.855.674.739 1.083 1.682 1.083 2.822 0 3.99-2.446 4.93-4.76 5.147-.008.455-.008.87-.008 1.157 0 .266.182.576.69.473A8.006 8.006 0 0022 12.017C22 6.484 17.523 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                :href="contactInfo.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-pink-400 transition duration-300"
              >
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 3.256.213.213 3.256.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.141 3.797 3.184 6.84 7.053 6.981 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 3.797-.141 6.84-3.184 6.981-7.053.058-1.28.072-1.688.072-4.948 0-3.259-.014-3.668-.072-4.948-.141-3.797-3.184-6.84-6.981-6.981C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                  />
                </svg>
              </a>
            </div>  
          </div>
        </div>

        <div class="lg:w-2/3">
          <form @submit.prevent="submitForm" class="space-y-6">
            <p
              class="text-xl font-bold text-white mb-6 border-b pb-3 border-blue-600/40"
            >
              Kirim Pesan Langsung
            </p>

            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-200 mb-1"
                >Nama Lengkap</label
              >
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-4 py-3 border border-blue-600/40 bg-blue-800/30 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300 placeholder-gray-400"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-200 mb-1"
                >Alamat Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-blue-600/40 bg-blue-800/30 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300 placeholder-gray-400"
                placeholder="contoh@email.com"
              />
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-200 mb-1"
                >Subjek</label
              >
              <input
                type="text"
                id="subject"
                name="subject"
                required
                class="w-full px-4 py-3 border border-blue-600/40 bg-blue-800/30 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300 placeholder-gray-400"
                placeholder="Contoh: Diskusi Proyek Baru"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-200 mb-1"
                >Pesan Anda</label
              >
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-blue-600/40 bg-blue-800/30 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300 placeholder-gray-400"
                placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50 transition duration-300 transform hover:scale-[1.01]"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const contactInfo = {
  email: "asyakarudin@email.com",
  phone: "+62 838 7898 7463",
  location: "Bogor, West Java, Indonesia",
  linkedin: "https://www.linkedin.com/in/ahmad-syakarudin-7386aa2b8/",
  github: "https://github.com/AhmadSyakarudin",
  instagram: "https://www.instagram.com/syaka.png/",
};
</script>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
