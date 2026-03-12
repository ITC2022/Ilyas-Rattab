<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">03</span>
        <h2 class="section-title">{{ t.experience.title }}</h2>
        <p class="section-sub">{{ t.experience.subtitle }}</p>
      </div>
      <div class="timeline">
        <div v-for="(item, i) in experience" :key="i" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="card-top">
              <div>
                <h3 class="exp-role">{{ item.role }}</h3>
                <div class="exp-company">{{ item.company }}</div>
              </div>
              <div class="exp-meta">
                <span class="exp-period">{{ item.period }}</span>
                <span class="exp-location">{{ item.location }}</span>
              </div>
            </div>
            <p class="exp-desc">{{ item.description[currentLang] }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { experience } from '../data'
const { t, currentLang } = useI18n()
</script>

<style scoped>
.timeline { position: relative; padding-left: 2rem; }
.timeline::before { content: ''; position: absolute; left: 0; top: 8px; bottom: 8px; width: 1px; background: linear-gradient(to bottom, var(--accent), transparent); }
.timeline-item { position: relative; margin-bottom: 2rem; }
.timeline-item:last-child { margin-bottom: 0; }
.timeline-dot { position: absolute; left: -2.4rem; top: 1.2rem; width: 12px; height: 12px; border-radius: 50%; background: var(--accent); border: 2px solid var(--bg-primary); box-shadow: 0 0 0 3px var(--accent-subtle); }
.timeline-card { background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 14px; padding: 1.5rem; transition: border-color 0.2s, transform 0.2s; }
.timeline-card:hover { border-color: var(--accent); transform: translateX(4px); }
.card-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap; }
.exp-role { font-size: 1.05rem; font-weight: 700; color: var(--text-primary); }
.exp-company { font-size: 0.85rem; color: var(--accent); font-weight: 600; margin-top: 2px; }
.exp-meta { text-align: right; display: flex; flex-direction: column; gap: 4px; }
.exp-period { font-size: 0.8rem; color: var(--text-muted); font-family: 'JetBrains Mono', monospace; background: var(--bg-tertiary); padding: 2px 8px; border-radius: 6px; border: 1px solid var(--border); }
.exp-location { font-size: 0.78rem; color: var(--text-muted); text-align: right; }
.exp-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; }
@media (max-width: 600px) { .card-top{flex-direction:column} .exp-meta{text-align:left} .exp-location{text-align:left} }
</style>
