<script setup lang="ts">
const testimonials = [
  {
    name: "Marie L.",
    location: "Douala, Cameroun",
    quote: "J'ai enfin compris qui j'étais et comment mon histoire personnelle influençait mes relations. Une révélation prophétique qui a tout changé.",
    rating: 5
  },
  {
    name: "Jean D.",
    location: "Yaoundé, Cameroun",
    quote: "L'école des futurs époux m'a donné des outils pratiques et spirituels que je n'avais trouvés nulle part ailleurs. Je me sens prêt pour l'alliance.",
    rating: 5
  },
  {
    name: "Sarah K.",
    location: "Abidjan, Côte d'Ivoire",
    quote: "Le programme de guérison émotionnelle est intense mais tellement libérateur. Je ne subis plus mes émotions, je marche dans ma destinée.",
    rating: 5
  }
];
</script>

<template>
  <section class="py-24 bg-warm-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl text-midnight text-center mb-16 px-4">
        Ils ont découvert leur Destinée...
      </h2>

      <div class="flex flex-wrap lg:flex-nowrap gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="min-w-full md:min-w-[45%] lg:min-w-[32%] snap-center card-premium p-10 flex flex-col justify-between"
        >
          <div>
            <!-- Star Rating -->
            <div class="flex gap-1 mb-6">
              <svg 
                v-for="i in testimonial.rating" 
                :key="i"
                class="w-5 h-5 text-copper" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <p class="text-anthracite italic text-lg leading-relaxed mb-8">
              "{{ testimonial.quote }}"
            </p>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center font-bold text-sage">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div>
              <h4 class="font-bold text-midnight">{{ testimonial.name }}</h4>
              <p class="text-sm text-anthracite/60">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
