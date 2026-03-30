<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { chatbotKnowledge, defaultResponse } from '../../utils/chatbotKnowledge';

const isOpen = ref(false);
const currentMessage = ref('');
const messages = ref<{ text: string; isUser: boolean }[]>([
  { text: "Bonjour ! Je suis l'assistant IA d'Inspire Christian Life. Comment puis-je vous aider aujourd'hui ?", isUser: false }
]);
const isTyping = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const handleSend = async () => {
  if (!currentMessage.value.trim() || isTyping.value) return;

  const userText = currentMessage.value;
  messages.value.push({ text: userText, isUser: true });
  currentMessage.value = '';
  scrollToBottom();

  isTyping.value = true;
  
  // Simulate AI Thinking
  setTimeout(() => {
    const response = getAIResponse(userText);
    messages.value.push({ text: response, isUser: false });
    isTyping.value = false;
    scrollToBottom();
  }, 1000);
};

const getAIResponse = (text: string) => {
  const lowerText = text.toLowerCase();
  
  // Search for keywords in knowledge base
  for (const item of chatbotKnowledge) {
    if (item.keywords.some(keyword => lowerText.includes(keyword))) {
      return item.response;
    }
  }
  
  return defaultResponse;
};

const toggleChat = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    scrollToBottom();
  }
};
</script>

<template>
  <div class="fixed bottom-8 right-8 z-[100] font-body">
    <!-- Chat Window -->
    <transition name="chat-fade">
      <div 
        v-if="isOpen" 
        class="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-sage/10"
      >
        <!-- Header -->
        <div class="bg-midnight p-6 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-copper flex items-center justify-center text-midnight font-bold">
              ICL
            </div>
            <div>
              <h3 class="text-white font-heading font-bold text-lg leading-tight">Inspire Bot</h3>
              <p class="text-copper/70 text-xs uppercase tracking-widest font-bold">En ligne</p>
            </div>
          </div>
          <button @click="toggleChat" class="text-white hover:text-copper transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Messages Area -->
        <div ref="messagesContainer" class="flex-grow p-6 overflow-y-auto space-y-4 bg-warm-white/30 scroll-smooth">
          <div 
            v-for="(msg, index) in messages" 
            :key="index"
            :class="[
              'flex w-full',
              msg.isUser ? 'justify-end' : 'justify-start'
            ]"
          >
            <div 
              :class="[
                'max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm',
                msg.isUser 
                  ? 'bg-midnight text-white rounded-tr-none' 
                  : 'bg-white text-midnight border border-sage/10 rounded-tl-none'
              ]"
            >
              {{ msg.text }}
            </div>
          </div>
          
          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-white border border-sage/10 p-4 rounded-2xl rounded-tl-none flex gap-1">
              <div class="w-1.5 h-1.5 bg-copper rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div class="w-1.5 h-1.5 bg-copper rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div class="w-1.5 h-1.5 bg-copper rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="p-4 bg-white border-t border-sage/10">
          <div class="relative flex items-center">
            <input 
              v-model="currentMessage" 
              @keyup.enter="handleSend"
              type="text" 
              placeholder="Écrivez votre message..." 
              class="w-full bg-sage/5 border border-sage/10 rounded-full py-3 px-6 pr-12 focus:outline-none focus:border-copper/50 transition-colors text-sm"
            />
            <button 
              @click="handleSend"
              :disabled="!currentMessage.trim() || isTyping"
              class="absolute right-2 p-2 bg-midnight text-copper rounded-full disabled:opacity-50 hover:bg-black transition-all"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Toggle Button -->
    <button 
      @click="toggleChat"
      class="w-16 h-16 bg-midnight text-copper rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-copper/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      
      <svg v-if="!isOpen" class="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
      <svg v-else class="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      
      <span v-if="!isOpen" class="absolute -top-1 -right-1 w-4 h-4 bg-copper border-2 border-midnight rounded-full flex items-center justify-center">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75"></span>
      </span>
    </button>
  </div>
</template>

<style scoped>
.chat-fade-enter-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.chat-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.chat-fade-enter-from,
.chat-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  transform-origin: bottom right;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
