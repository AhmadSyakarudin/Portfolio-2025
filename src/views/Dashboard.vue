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
        class="lg:flex lg:items-center lg:space-x-16 transition-all duration-700 ease-out"
      >
        <div class="lg:w-1/2 order-2 lg:order-1 space-y-7">
          <section>
            <h2
              class="text-4xl font-extrabold mb-5 text-blue-200 leading-tight"
            >
              Ahmad Syakarudin
            </h2>

            <p class="text-lg text-gray-200 leading-relaxed mb-6">
              Saya adalah seorang
              <span class="font-semibold text-blue-300">developer muda</span>
              yang berdedikasi dalam merancang masa depan digital melalui
              <strong class="text-white">Full Stack Development</strong>. 
            </p>
          </section>
        </div>

        <div
          class="lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0 flex justify-center lg:justify-end"
        >
          <div class="relative group">
            <img
              src="@/assets/images/dashboard-image.png"
              alt="Ilustrasi Developer"
              class="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 rounded-2xl ring-4 ring-blue-400/30 group-hover:ring-blue-300/50 transition-all duration-500 pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
