<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const isSuccess = ref(false);
const error = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  error.value = '';
  
  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    });
    
    const result = await response.json();
    if (response.ok) {
      isSuccess.value = true;
      form.value = { name: '', email: '', subject: '', message: '' };
    } else {
      error.value = result.error || "Une erreur est survenue lors de l'envoi.";
    }
  } catch (err) {
    error.value = "Erreur de connexion au serveur.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="pt-32 pb-24 bg-white min-h-screen">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <!-- Left Side: Text and Info -->
        <div class="max-w-xl">
          <h1 class="text-5xl md:text-7xl font-bold text-black mb-8 uppercase tracking-tighter leading-none">
            Parlons de <br/> votre future <span class="text-copper">Mariage</span>
          </h1>
           <li>
             <p class="text-xl text-gray-600 mb-12 font-body leading-relaxed">
            Une question sur nos formations ? Un besoin d'accompagnement spécifique ? Nous sommes à votre écoute pour vous aider à bâtir votre futur.
            </p>
           </li>
          <div class="space-y-8">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xs font-bold uppercase tracking-widest text-copper mb-1">Email</h3>
                <p class="text-[13px] font-bold">Inpirechristianlife.infos@gmail.com</p>
              </div>
            </div>

            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xs font-bold uppercase tracking-widest text-copper mb-1">Session</h3>
                <p class="text-lg font-bold">Réserver un appel de découverte</p>
                <button class="mt-2 text-sm font-bold underline hover:text-copper transition-colors">Voir les disponibilités</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="bg-gray-50 p-8 md:p-12 rounded-3xl border border-black/5 relative overflow-hidden">
          <Transition name="fade">
            <div v-if="isSuccess" class="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8">
              <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-black mb-4">Message Envoyé !</h2>
              <p class="text-gray-600 mb-8 max-w-xs">Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
              <button @click="isSuccess = false" class="btn-primary">Envoyer un autre message</button>
            </div>
          </Transition>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Votre Nom</label>
              <input 
                v-model="form.name"
                type="text" 
                class="w-full bg-white border-b border-black/10 py-4 focus:outline-none focus:border-black transition-colors font-body"
                required
                :disabled="isSubmitting"
              />
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                class="w-full bg-white border-b border-black/10 py-4 focus:outline-none focus:border-black transition-colors font-body"
                required
                :disabled="isSubmitting"
              />
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
              <textarea 
                v-model="form.message"
                rows="4"
                class="w-full bg-white border-b border-black/10 py-4 focus:outline-none focus:border-black transition-colors font-body resize-none"
                required
                :disabled="isSubmitting"
              ></textarea>
            </div>

            <div v-if="error" class="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium">
              {{ error }}
            </div>

            <button 
              type="submit" 
              class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">
                <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
