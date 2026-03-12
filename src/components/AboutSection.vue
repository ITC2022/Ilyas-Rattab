<template>
  <section id="about" class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">01</span>
        <h2 class="section-title">{{ t.about.title }}</h2>
        <p class="section-sub">{{ t.about.subtitle }}</p>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <p>{{ personal.bio[currentLang][0] }}</p>
          <template v-if="expanded">
            <p v-for="(para, i) in personal.bio[currentLang].slice(1)" :key="i">{{ para }}</p>
          </template>
          <button class="read-more" @click="expanded = !expanded">
            {{ expanded ? t.about.readLess : t.about.readMore }}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              :style="{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div class="about-meta">
            <div class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {{ personal.location[currentLang] }}
            </div>
          </div>
        </div>

        <div class="about-card">
          <div class="card-avatar">
            <div class="avatar-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div class="card-stats">
            <div class="stat">
              <span class="stat-num">{{ personal.stats.projects }}</span>
              <span class="stat-label">{{ t.about.stats.projects }}</span>
            </div>
            <div class="stat">
              <span class="stat-num">{{ personal.stats.yearsExp }}</span>
              <span class="stat-label">{{ t.about.stats.yearsExp }}</span>
            </div>
            <div class="stat">
              <span class="stat-num">{{ personal.stats.technologies }}</span>
              <span class="stat-label">{{ t.about.stats.technologies }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'
import { personal } from '../data'

const { t, currentLang } = useI18n()
const expanded = ref(false)
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
  align-items: start;
}

.about-text p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.2rem;
  font-size: 1rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0;
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
  transition: opacity 0.2s;
}

.read-more:hover {
  opacity: 0.75;
}

.about-meta {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.meta-item svg {
  color: var(--accent);
}

.about-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}

.card-avatar {
  padding: 2rem;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  background: var(--bg-tertiary);
}

.avatar-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
}

.avatar-placeholder svg {
  opacity: 0.4;
}

.card-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 0.5rem;
  border-right: 1px solid var(--border);
  gap: 4px;
}

.stat:last-child {
  border-right: none;
}

.stat-num {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--accent);
  font-family: 'JetBrains Mono', monospace;
}

.stat-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-align: center;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-card {
    max-width: 400px;
  }
}
</style>