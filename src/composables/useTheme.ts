import { ref, watch } from 'vue'

// State and watcher are OUTSIDE the function — shared across all components
const isDark = ref(true)

watch(isDark, (val) => {
  document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light')
  localStorage.setItem('theme', val ? 'dark' : 'light')
}, { immediate: true })

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  const initTheme = () => {
    const saved = localStorage.getItem('theme')
    isDark.value = saved ? saved === 'dark' : true
  }

  return { isDark, toggleTheme, initTheme }
}
