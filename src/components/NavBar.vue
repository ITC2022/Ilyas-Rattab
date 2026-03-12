<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a href="#" class="nav-logo" @click.prevent="scrollTo('hero')">
        <span class="logo-bracket">{</span>
        <span class="logo-name">dev</span>
        <span class="logo-bracket">}</span>
      </a>

      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.id">
          <a href="#" class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id)">
            {{ item.label }}
          </a>
        </li>
        <li>
          <a href="/cv.pdf" target="_blank" class="nav-cv">
            <span>{{ t.nav.cv }}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
        </li>
      </ul>

      <div class="nav-controls">
        <div class="lang-switcher">
          <button
            v-for="lang in langs"
            :key="lang"
            class="lang-btn"
            :class="{ active: currentLang === lang }"
            @click="setLang(lang)"
          >{{ lang.toUpperCase() }}</button>
        </div>

        <button class="theme-btn" @click="toggleTheme" :title="isDark ? 'Light mode' : 'Dark mode'">
          <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>

        <button class="mobile-menu-btn" @click="mobileOpen = !mobileOpen">
          <span :class="{ open: mobileOpen }"></span>
        </button>
      </div>
    </div>

    <div class="mobile-nav" :class="{ open: mobileOpen }">
      <a v-for="item in navItems" :key="item.id"
        href="#" class="mobile-link"
        @click.prevent="scrollTo(item.id)">
        {{ item.label }}
      </a>
      <a href="/cv.pdf" target="_blank" class="mobile-link mobile-cv">{{ t.nav.cv }}</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n, type Lang } from '../composables/useI18n'
import { useTheme } from '../composables/useTheme'

const { t, currentLang, setLang } = useI18n()
const { isDark, toggleTheme } = useTheme()

const langs: Lang[] = ['en', 'it', 'de']
const isScrolled = ref(false)
const activeSection = ref('hero')
const mobileOpen = ref(false)

const navItems = computed(() => [
  { id: 'about',      label: t.value.nav.about },
  { id: 'skills',     label: t.value.nav.skills },
  { id: 'experience', label: t.value.nav.experience },
  { id: 'education',  label: t.value.nav.education },
  { id: 'contact',    label: t.value.nav.contact },
])

// Scroll to section with navbar offset compensation
const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  const navHeight = 70
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight
  window.scrollTo({ top, behavior: 'smooth' })
  mobileOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  const sections = ['hero', 'about', 'skills', 'experience', 'education', 'contact']
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 130) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: all 0.3s ease;
  padding: 0;
}
.navbar.scrolled {
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 4px 30px var(--shadow);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.nav-logo {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}
.logo-bracket { color: var(--accent); }
.logo-name { color: var(--text-primary); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0; padding: 0;
}
.nav-link {
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s;
  letter-spacing: 0.01em;
}
.nav-link:hover, .nav-link.active {
  color: var(--accent);
  background: var(--accent-subtle);
}
.nav-cv {
  display: flex; align-items: center; gap: 6px;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
  border: 1px solid var(--accent);
  text-decoration: none;
  transition: all 0.2s;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.nav-cv:hover { background: var(--accent); color: #fff; }

.nav-controls { display: flex; align-items: center; gap: 0.75rem; }
.lang-switcher {
  display: flex; gap: 2px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 2px;
}
.lang-btn {
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.05em;
}
.lang-btn.active { background: var(--accent); color: #fff; }
.lang-btn:hover:not(.active) { color: var(--text-primary); }

.theme-btn {
  width: 36px; height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-secondary);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.theme-btn:hover { color: var(--accent); border-color: var(--accent); }

.mobile-menu-btn {
  display: none;
  width: 36px; height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-secondary);
  cursor: pointer;
  align-items: center; justify-content: center;
  flex-direction: column; gap: 5px;
}
.mobile-menu-btn span,
.mobile-menu-btn span::before,
.mobile-menu-btn span::after {
  display: block;
  width: 18px; height: 2px;
  background: var(--text-secondary);
  border-radius: 2px;
  transition: all 0.3s;
  position: relative;
}
.mobile-menu-btn span::before,
.mobile-menu-btn span::after {
  content: '';
  position: absolute;
}
.mobile-menu-btn span::before { top: -6px; }
.mobile-menu-btn span::after { top: 6px; }

.mobile-nav {
  display: none;
  flex-direction: column;
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--border);
  padding: 1rem 2rem;
  gap: 0.25rem;
}
.mobile-nav.open { display: flex; }
.mobile-link {
  padding: 0.6rem 0.75rem;
  border-radius: 6px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s;
}
.mobile-link:hover { color: var(--accent); background: var(--accent-subtle); }
.mobile-cv { color: var(--accent); font-weight: 600; margin-top: 0.5rem; }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .mobile-menu-btn { display: flex; }
}
</style>
