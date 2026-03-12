<template>
  <section id="skills" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">02</span>
        <h2 class="section-title">{{ t.skills.title }}</h2>
        <p class="section-sub">{{ t.skills.subtitle }}</p>
      </div>
      <div class="skills-grid">
        <div v-for="group in skillGroups" :key="group.key" class="skill-group">
          <div class="group-header">
            <span class="group-icon" v-html="group.icon"></span>
            <h3 class="group-title">{{ (t.skills as any)[group.key] }}</h3>
          </div>
          <div class="skills-list">
            <div v-for="skill in group.items" :key="skill.name" class="skill-item">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" :style="{ width: skill.level + '%', background: group.color }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import { skills } from '../data'

const { t } = useI18n()

const icons: Record<string, string> = {
  frontend: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  backend:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  tools:    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
}

const skillGroups = computed(() => skills.map(g => ({ ...g, icon: icons[g.key] ?? '' })))
</script>

<style scoped>
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.skill-group { background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 16px; padding: 1.75rem; transition: transform 0.2s, box-shadow 0.2s; }
.skill-group:hover { transform: translateY(-4px); box-shadow: 0 12px 40px var(--shadow); }
.group-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
.group-icon { color: var(--accent); }
.group-title { font-size: 0.95rem; font-weight: 700; color: var(--text-primary); }
.skills-list { display: flex; flex-direction: column; gap: 1rem; }
.skill-info { display: flex; justify-content: space-between; margin-bottom: 6px; }
.skill-name { font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; }
.skill-level { font-size: 0.75rem; color: var(--text-muted); font-family: 'JetBrains Mono', monospace; }
.skill-bar { height: 4px; background: var(--border); border-radius: 4px; overflow: hidden; }
.skill-fill { height: 100%; border-radius: 4px; }
@media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr; } }
@media (min-width: 600px) and (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
</style>
