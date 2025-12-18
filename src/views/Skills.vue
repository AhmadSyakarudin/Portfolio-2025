<template>
  <section
    id="skills"
    class="w-full min-h-screen py-16 font-poppins bg-[#0f172a]"
  >
    <div class="container mx-auto px-4">
      <div
        class="p-8 md:p-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-2xl border border-blue-700/30"
      >
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Kemampuan saya
          </h2>
          <div class="w-24 h-1 bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p class="text-lg text-blue-100 max-w-2xl mx-auto opacity-80">
            Daftar teknologi dan perangkat lunak yang saya gunakan untuk
            membangun solusi digital.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(group, index) in skills"
            :key="index"
            class="group bg-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/50 hover:border-blue-400/50 transition-all duration-300 shadow-lg"
          >
            <div class="flex items-center mb-6">
              <div
                class="p-3 bg-blue-500/20 rounded-lg mr-4 group-hover:bg-blue-500/40 transition-colors"
              >
                <svg
                  v-if="group.category.includes('Frontend')"
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <svg
                  v-else-if="group.category.includes('Backend')"
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                  />
                </svg>
                <svg
                  v-else
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a2 2 0 012 2v1a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2V7a2 2 0 012-2V5a2 2 0 012-2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white tracking-tight">
                {{ group.category }}
              </h3>
            </div>

            <div class="flex flex-wrap gap-3">
              <div
                v-for="item in group.items"
                :key="item"
                class="px-4 py-2 bg-blue-800/50 hover:bg-blue-400 hover:text-blue-900 text-blue-100 text-sm font-medium rounded-xl border border-blue-600/30 transition-all duration-300 cursor-default"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    category: "Frontend Development",
    items: ["Vue.js", "JavaScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    category: "Backend & Database",
    items: ["Laravel", "MySQL", "PostgreSQL", "RESTful API"],
  },
  {
    category: "Tools & Others",
    items: [
      "Git & GitHub",
      "Figma",
      "VS Code",
      "Responsive Design",
      "Problem Solving",
      "Teamwork",
      "Time Management",
    ],
  },
  {
    category: "Mobile Development",
    items: ["Flutter", "Dart", "RESTful API"],
  },
];
</script>
  
<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}

.group:hover {
  transform: translateY(-5px);
}
</style>
