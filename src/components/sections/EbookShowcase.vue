<script setup lang="ts">
import ebookgratuit from '../../assets/images/ebook/ebookgratuit.avif'
import ebookpayant from '../../assets/images/ebook/ebookpayant.jpeg'
import ebookPDF from '../../assets/ebook pdf/LES 10 --CROYANCES QUI ELOIGNENT LE MARIAGE.pdf'
// EbookShowcase.vue
</script>

<template>
  <section class="py-24 bg-midnight text-warm-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl !text-warm-white text-center mb-16 max-w-4xl mx-auto leading-tight">
        Plus qu'un simple mouvement, une préparation prophétique à l'alliance.
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Free Ebook -->
        <div class="flex flex-col md:flex-row gap-8 items-center bg-warm-white/5 p-8 rounded-3xl border border-warm-white/10 hover:border-copper/30 transition-all duration-500">
          <div class="w-full md:w-1/2 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
            <div class=" h-full bg-sage/20 rounded-lg flex items-center justify-center text-sage">
              <!-- Mockup Image Placeholder -->
               <img :src="ebookgratuit" alt="">
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <span class="text-copper font-bold tracking-widest uppercase text-sm mb-2 block">Gratuit</span>
            <h3 class="text-3xl mb-4 !text-white font-heading">10 croyances qui éloignent le mariage de toi</h3>
            <div class="space-y-4">
              <a 
                :href="ebookPDF" 
                download="Les 10 Croyances - Inspire Christian Life.pdf"
                class="w-full bg-copper text-midnight font-bold py-4 rounded-lg hover:bg-copper-light transition-all duration-300 block text-center uppercase tracking-widest text-sm shadow-lg hover:shadow-copper/20"
              >
                Télécharger l'Ebook Gratuit
              </a>
              <p class="text-warm-white/40 text-[10px] text-center uppercase tracking-widest">
                Format PDF • Directement accessible
              </p>
            </div>
          </div>
        </div>

        <!-- Paid Ebook -->
        <div class="flex flex-col md:flex-row gap-8 items-center bg-warm-white/5 p-8 rounded-3xl border border-warm-white/10 hover:border-copper/30 transition-all duration-500">
          <div class="w-full md:w-1/2 shadow-2xl -skew-y-3 hover:skew-y-0 transition-transform duration-500">
            <div class="h-full  bg-copper/20 rounded-lg flex items-center justify-center text-copper">
              <!-- Mockup Image Placeholder -->
               <img :src="ebookpayant" alt="">
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <span class="text-copper font-bold tracking-widest uppercase text-sm mb-2 block">3.000 CFA</span>
            <h3 class="text-3xl !text-white mb-4 font-heading">Je ne subis plus</h3>
            <p class="text-warm-white/70 mb-6">
              Comprendre et guérir son système émotionnel pour ne plus être victime de son passé.
            </p>
            <a
            type="submit"
            href = 'https://chretienentrepreneur.mychariow.shop/prd_xyl1m1' 
            class="w-full border-2 border-copper text-copper font-bold p-3 rounded-lg hover:bg-copper hover:text-midnight transition-all duration-300 cursor-pointer">
              Acheter maintenant
          </a>
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
</style>
