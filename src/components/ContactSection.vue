<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">05</span>
        <h2 class="section-title">{{ t.contact.title }}</h2>
        <p class="section-sub">{{ t.contact.subtitle }}</p>
      </div>
      <div class="contact-wrapper">
        <div class="contact-links">
          <a :href="`mailto:${contact.email}`" class="contact-card">
            <div class="contact-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div class="contact-label">{{ t.contact.email }}</div>
              <div class="contact-value">{{ contact.email }}</div>
            </div>
          </a>
          <a id="github-card" :href="`https://${contact.github}`" target="_blank" class="contact-card">
            <div class="contact-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </div>
            <div>
              <div class="contact-label">{{ t.contact.github }}</div>
              <div class="contact-value">{{ contact.github }}</div>
            </div>
          </a>
          <a :href="`https://${contact.linkedin}`" target="_blank" class="contact-card">
            <div class="contact-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <div>
              <div class="contact-label">{{ t.contact.linkedin }}</div>
              <div class="contact-value">{{ contact.linkedin }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { contact } from '../data'
const { t } = useI18n()
</script>

<style scoped>
.contact-wrapper { max-width: 700px; margin: 0 auto; }
.contact-links { display: flex; flex-direction: column; gap: 1rem; }
.contact-card { display: flex; align-items: center; gap: 1.25rem; padding: 1.25rem 1.5rem; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 14px; text-decoration: none; transition: all 0.2s; }
.contact-card:hover { border-color: var(--accent); transform: translateX(6px); box-shadow: 0 4px 20px var(--shadow); }
.contact-icon { width: 48px; height: 48px; border-radius: 12px; background: var(--accent-subtle); border: 1px solid var(--accent); display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0; }
.contact-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 2px; }
.contact-value { font-size: 0.9rem; color: var(--text-primary); font-weight: 600; }
.contact-card.highlighted {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
  transform: translateX(6px);
}
</style>
