<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: "Weather App",
    description: "Aplikasi sederhana untuk menampilkan cuaca berdasarkan lokasi yang dicari.",
    image: "https://awsimages.detik.net.id/community/media/visual/2022/10/11/bagaimana-cuaca-besok-ini-10-cara-cek-prakiraan-cuaca-besok_169.jpeg?w=600&q=90", 
    stack: ["Flutter", "Dart", "OpenWeatherMap API"],
    liveLink: "/error",
    githubLink: "https://github.com/AhmadSyakarudin/Weather-App",
    date: "Dec 2025",
  },
  {
    title: "Sewa Lapangan App",
    description: "Aplikasi untuk sewa lapangan seperti, sepak bola, basket, tenis meja, dll.",
    image: "https://images.pexels.com/photos/2143453/pexels-photo-2143453.jpeg",
    stack: ["Flutter", "Dart"],
    liveLink: "/error",
    githubLink: "https://github.com/AhmadSyakarudin/SewaLapangan",
    date: "Oct 2025",
  },
  {
    title: "Perpustakaan App",
    description: "Aplikasi untuk perpustakaan seperti, perpustakaan, perpustakaan online, dll.",
    image: "https://pengadaan.penerbitdeepublish.com/wp-content/uploads/2023/04/perpustakaan-sekolah.webp",
    stack: ["Laravel", "PHP", "Bootstrap"],
    liveLink: "/error",
    githubLink: "https://github.com/AhmadSyakarudin/perpustakaan",
    date: "Dec 2024",
  },
]);
</script>

<template>
  <div class="project-page w-full min-h-screen py-12 font-poppins bg-[#0f172a]">
    <div class="container mx-auto px-4">
      
      <div class="p-8 md:p-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-2xl border border-blue-700/50">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Portofolio Proyek
          </h2>
          <p class="text-lg text-blue-100 max-w-3xl mx-auto">
            Kumpulan proyek yang telah saya kembangkan, menunjukkan kemampuan 
            saya dalam Full Stack Development.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="group relative bg-gradient-to-br from-blue-800 to-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-600/50"
          >
            <router-link :to="project.liveLink" class="block">
              <div class="relative overflow-hidden rounded-xl mb-5 border border-blue-900/50">
                <img
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-auto object-cover rounded-xl aspect-video group-hover:scale-110 transition-transform duration-700 bg-blue-900/20"
                />
                <div class="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <span class="text-white font-bold text-lg border-2 border-white px-4 py-2 rounded-lg">
                    Lihat Live Demo →
                  </span>
                </div>
              </div>
              
              <h3 class="text-xl font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                {{ project.title }}
              </h3>
              
              <p class="text-blue-100/80 text-sm mb-4 line-clamp-2">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span 
                  v-for="tech in project.stack" 
                  :key="tech"
                  class="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 text-blue-900 shadow-sm"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="flex justify-between items-center mt-auto border-t border-blue-700/50 pt-4">
                <p class="text-blue-300/60 text-xs font-medium">{{ project.date }}</p>
                
                <a 
                  :href="project.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                  class="inline-flex items-center text-blue-300 hover:text-white transition-colors duration-300 text-sm font-semibold"
                >
                  GitHub
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </router-link>
          </div>
        </div>

        <p class="text-center mt-12 text-blue-200/60 text-sm italic">
          *Klik pada kartu untuk melihat demo langsung atau tautan GitHub.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}
.aspect-video {
  aspect-ratio: 16 / 9;
}
.group:hover {
  transform: translateY(-5px);
}
</style>