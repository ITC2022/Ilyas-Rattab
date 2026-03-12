<template>
  <div class="app">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
    <footer class="footer">
      <div class="footer-inner">
        <span>{{ t.footer.built }}</span>
        <span>© {{ new Date().getFullYear() }} {{ personal.name }} — {{ t.footer.rights }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'
import { useI18n } from './composables/useI18n'
import { personal } from './data'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'

const { initTheme } = useTheme()
const { t } = useI18n()

onMounted(() => initTheme())
</script>

<style scoped>
.footer { border-top: 1px solid var(--border); background: var(--bg-secondary); padding: 1.5rem 2rem; }
.footer-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--text-muted); gap: 1rem; flex-wrap: wrap; }
</style>
