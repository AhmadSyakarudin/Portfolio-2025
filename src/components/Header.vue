<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4"
    :class="[isScrolled ? 'md:py-3' : 'md:py-5']"
  >
    <div class="container mx-auto px-4">
      <div
        class="relative overflow-hidden transition-all duration-500 border border-white/10 shadow-2xl rounded-2xl bg-slate-900/60 backdrop-blur-xl"
        :class="[isScrolled ? 'shadow-blue-500/10' : '']"
      >
        <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

        <div class="flex justify-between items-center px-6 py-3 md:px-8 md:py-4">
          <div class="group cursor-pointer">
            <div class="text-2xl md:text-3xl font-black tracking-tighter">
              <span class="inline-block transition-transform duration-300 group-hover:-translate-y-1 text-white">
                Ah
              </span>
              <span class="inline-block transition-transform duration-300 group-hover:translate-y-1 text-blue-400">
                mad
              </span>
            </div>
          </div>

          <nav class="hidden md:block">
            <ul class="flex items-center space-x-1">
              <li v-for="item in navItems" :key="item.id" class="relative group">
                <router-link 
                  :to="item.path" 
                  class="nav-link px-4 py-2"
                  active-class="nav-active"
                >
                  <span class="relative z-10">{{ item.name }}</span>
                  
                  <div class="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                  
                  <div class="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                    <div class="w-full h-full bg-blue-400 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                  </div>
                </router-link>
              </li>
            </ul>
          </nav>

          <div class="hidden md:block">
            <button 
              @click="scrollToContact"
              class="px-5 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg text-sm font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              Hire Me
            </button>
          </div>

          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white relative z-50"
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                v-if="!isMobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-0 top-20 bg-slate-900/95 backdrop-blur-2xl z-40 flex items-center justify-center"
        @click="isMobileMenuOpen = false"
      >
        <nav 
          class="w-full max-w-sm px-8"
          @click.stop  <!-- biar klik di dalam menu ga nutup -->
        >
          <ul class="space-y-8 text-center">
            <li v-for="item in navItems" :key="item.id">
              <router-link 
                :to="item.path"
                @click="isMobileMenuOpen = false"
                class="block text-2xl font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                active-class="text-blue-400"
              >
                {{ item.name }}
              </router-link>
            </li>
            <li class="pt-8">
              <button 
                @click="scrollToContactAndClose"
                class="w-full px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-xl text-xl font-bold transition-all duration-300 shadow-lg active:scale-95"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navItems = [
  { id: 1, name: 'Beranda', path: '/#beranda' },
  { id: 2, name: 'Tentang', path: '/#tentang' },
  { id: 3, name: 'Keahlian', path: '/#keahlian' },
  { id: 4, name: 'Proyek', path: '/#proyek' },
  { id: 5, name: 'Kontak', path: '/#kontak' },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollToContact = () => {
  const contactSection = document.getElementById('kontak');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToContactAndClose = () => {
  isMobileMenuOpen.value = false;
  scrollToContact();
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-link {
  @apply relative text-slate-300 text-sm font-medium transition-colors duration-300 flex items-center;
}

.nav-link:hover {
  @apply text-white;
}

.nav-active {
  @apply text-blue-400;
}

.nav-active span::after {
  content: '';
  @apply absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400;
}
</style>