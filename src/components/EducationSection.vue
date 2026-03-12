<template>
  <section id="education" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">04</span>
        <h2 class="section-title">{{ t.education.title }}</h2>
        <p class="section-sub">{{ t.education.subtitle }}</p>
      </div>
      <div class="edu-grid">
        <div v-for="(item, i) in education" :key="i" class="edu-card">
          <div class="edu-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div class="edu-content">
            <h3 class="edu-degree">{{ item.degree }}</h3>
            <div class="edu-school">{{ item.school }}</div>
            <span class="edu-period">{{ item.period }}</span>
            <p class="edu-desc">{{ item.description[currentLang] }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { education } from '../data'
const { t, currentLang } = useI18n()
</script>

<style scoped>
.edu-grid { display: flex; flex-direction: column; gap: 1.5rem; }
.edu-card { display: flex; gap: 1.5rem; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 14px; padding: 1.5rem; transition: border-color 0.2s, transform 0.2s; }
.edu-card:hover { border-color: var(--accent); transform: translateX(4px); }
.edu-icon { width: 48px; height: 48px; border-radius: 12px; background: var(--accent-subtle); border: 1px solid var(--accent); display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0; }
.edu-degree { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px; }
.edu-school { font-size: 0.85rem; color: var(--accent); font-weight: 600; margin-bottom: 6px; }
.edu-period { display: inline-block; font-size: 0.75rem; color: var(--text-muted); font-family: 'JetBrains Mono', monospace; background: var(--bg-tertiary); padding: 2px 8px; border-radius: 6px; border: 1px solid var(--border); margin-bottom: 0.75rem; }
.edu-desc { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7; margin: 0; }
</style>
