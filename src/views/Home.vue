<script setup>
import Header from "@/components/Header.vue";
import Dashboard from "@/views/Dashboard.vue";
import About from "@/views/About.vue";
import Skills from "@/views/Skills.vue";
import Projects from "@/views/Project.vue";
import Contact from "@/views/Contact.vue";
import Footer from "@/components/Footer.vue"; 
</script>

<template>
  <div class="bg-slate-900 min-h-screen flex flex-col"> 
    <Header />

    <main class="flex-1">
      <section id="beranda" class="pt-28 md:pt-32">
        <Dashboard />
      </section>

      <section id="tentang" class="pt-10 md:pt-14">
        <About />
      </section>

      <section id="keahlian" class="pt-10 md:pt-14">
        <Skills />
      </section>

      <section id="proyek" class="pt-10 md:pt-14">
        <Projects />
      </section>

      <section id="kontak" class="pt-10 md:pt-14 pb-20">
        <Contact />
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
section {
  scroll-margin-top: 80px;
}

html {
  scroll-behavior: smooth;
}
</style>