<template>
  <footer class="w-full bg-blue-800 py-8 text-white">
    <div class="container mx-auto px-6">
      <div class="flex flex-col items-center text-center space-y-6">
        <p class="text-sm text-blue-200">
          © {{ new Date().getFullYear() }} Ahmad Syakarudin. All rights reserved.
        </p>

        <div class="flex space-x-7">
          <a
            href="https://www.linkedin.com/in/ahmad-syakarudin-7386aa2b8/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-blue-300 transition duration-300"
            aria-label="LinkedIn"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.526-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="https://github.com/AhmadSyakarudin"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-blue-300 transition duration-300"
            aria-label="GitHub"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.865 8.163 6.83 9.497.5.092.682-.217.682-.483 0-.237-.008-.853-.013-1.67a5.27 5.27 0 01-1.55-2.012c-.5-.853-1.21-2.155-2.92-3.088-.475-.252-.924-.378-.069-.387 1.258-.009 1.916 1.233 2.183 1.75.148.247.388.463.635.635.252.17.513.27.778.31.266.04.536.059.805-.008 2.05-.224 2.868-1.526 3.036-2.072.168-.546.168-1.02-.008-1.467-2.316-.217-4.757-1.15-4.757-5.152 0-1.14.409-2.083 1.083-2.822-.108-.255-.47-1.34.102-2.855 0 0 .88-.282 2.87.817.83-.23 1.716-.347 2.607-.352.89.005 1.776.122 2.606.352 1.99-1.1 2.87-.817 2.87-.817.572 1.515.21 2.599.102 2.855.674.739 1.083 1.682 1.083 2.822 0 3.99-2.446 4.93-4.76 5.147-.008.455-.008.87-.008 1.157 0 .266.182.576.69.473A8.006 8.006 0 0022 12.017C22 6.484 17.523 2 12 2z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/syaka.png/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-pink-400 transition duration-300"
            aria-label="Instagram"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 3.256.213.213 3.256.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.141 3.797 3.184 6.84 7.053 6.981 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 3.797-.141 6.84-3.184 6.981-7.053.058-1.28.072-1.688.072-4.948 0-3.259-.014-3.668-.072-4.948-.141-3.797-3.184-6.84-6.981-6.981C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
            </svg>
          </a>
        </div>

        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-200">
          <a href="#beranda" class="hover:text-white transition">Beranda</a>
          <a href="#tentang" class="hover:text-white transition">Tentang</a>
          <a href="#keahlian" class="hover:text-white transition">Keahlian</a>
          <a href="#proyek" class="hover:text-white transition">Proyek</a>
          <a href="#kontak" class="hover:text-white transition">Kontak</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>