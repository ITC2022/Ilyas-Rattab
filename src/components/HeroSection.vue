<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="grid-overlay"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
    </div>

    <div class="hero-content">
      <div v-if="personal.available" class="hero-badge">
        <span class="badge-dot"></span>
        {{ t.about.available }}
      </div>

      <p class="hero-greeting">{{ t.hero.greeting }}</p>

      <h1 class="hero-name">
        <span class="name-text">{{ personal.name }}</span>
        <span class="cursor">_</span>
      </h1>

      <div class="hero-role">
        <span class="role-prefix">&lt;</span>
        <span class="role-text">{{ personal.role[currentLang] }}</span>
        <span class="role-prefix">/&gt;</span>
      </div>

      <p class="hero-tagline">{{ personal.tagline[currentLang] }}</p>

      <div class="hero-stack">
        <span v-for="tech in stack" :key="tech" class="stack-tag">{{ tech }}</span>
      </div>

      <div class="hero-ctas">
        <a href="#contact" class="cta-primary" @click="highlightGithub" >
          {{ t.hero.cta }}
          
        </a>
        <a href="#contact" class="cta-secondary">{{ t.hero.ctaContact }}</a>
      </div>
    </div>

    <div class="hero-scroll">
      <div class="scroll-line"></div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
const highlightGithub = () => {
  setTimeout(() => {
    const el = document.getElementById('github-card')
    if (el) {
      el.classList.add('highlighted')
      setTimeout(() => el.classList.remove('highlighted'), 2000)
    }
  }, 800) // aspetta che lo scroll finisca
}
import { useI18n } from '../composables/useI18n'
import { personal } from '../data'

const { t, currentLang } = useI18n()
const stack = ['Vue 3', 'TypeScript', 'Node.js', 'Express', 'Docker', 'Git']
</script>

<style scoped>
.hero { position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 8rem 2rem 4rem; }
.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.grid-overlay { position: absolute; inset: 0; background-image: linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px); background-size: 60px 60px; opacity: 0.4; }
.glow { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; }
.glow-1 { width: 600px; height: 600px; background: var(--accent); top: -200px; right: -100px; animation: float 8s ease-in-out infinite; }
.glow-2 { width: 400px; height: 400px; background: var(--accent2); bottom: -100px; left: -100px; animation: float 10s ease-in-out infinite reverse; }
@keyframes float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-30px) scale(1.05)} }
.hero-content { position: relative; max-width: 800px; width: 100%; z-index: 1; text-align: center; margin: 0 auto;}
.hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 0.4rem 1rem; border-radius: 20px; border: 1px solid var(--accent); background: var(--accent-subtle); color: var(--accent); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 1.5rem; animation: fadeInUp 0.6s ease both;  }
.badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); animation: pulse 2s infinite; }
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
.hero-greeting { font-size: 1.1rem; color: var(--text-muted); font-family: 'JetBrains Mono', monospace; margin-bottom: 0.5rem; animation: fadeInUp 0.6s 0.1s ease both; }
.hero-name { font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 800; color: var(--text-primary); line-height: 1; margin-bottom: 1rem; letter-spacing: -0.03em; animation: fadeInUp 0.6s 0.2s ease both; }
.cursor { color: var(--accent); animation: blink 1s step-end infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
.hero-role { font-family: 'JetBrains Mono', monospace; font-size: clamp(1rem, 2.5vw, 1.4rem); color: var(--text-secondary); margin-bottom: 1.5rem; animation: fadeInUp 0.6s 0.3s ease both; }
.role-prefix { color: var(--accent); font-weight: 700; }
.role-text { color: var(--accent2); font-weight: 600; margin: 0 4px; }
.hero-tagline { font-size: clamp(0.95rem, 1.8vw, 1.1rem); color: var(--text-muted); max-width: 560px; line-height: 1.7; margin-bottom: 2rem; animation: fadeInUp 0.6s 0.4s ease both; }
.hero-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2.5rem; animation: fadeInUp 0.6s 0.5s ease both; }
.stack-tag { padding: 0.3rem 0.8rem; border-radius: 6px; background: var(--bg-secondary); border: 1px solid var(--border); color: var(--text-secondary); font-size: 0.8rem; font-family: 'JetBrains Mono', monospace; font-weight: 500; transition: all 0.2s; }
.stack-tag:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-subtle); }
.hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; animation: fadeInUp 0.6s 0.6s ease both; }
.cta-primary { display: inline-flex; align-items: center; gap: 8px; padding: 0.8rem 1.8rem; border-radius: 10px; background: var(--accent); color: #fff; font-weight: 700; font-size: 0.9rem; text-decoration: none; transition: all 0.25s; box-shadow: 0 4px 20px var(--accent-glow); }
.cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px var(--accent-glow); }
.cta-secondary { display: inline-flex; align-items: center; padding: 0.8rem 1.8rem; border-radius: 10px; border: 1px solid var(--border); color: var(--text-secondary); font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: all 0.25s; background: var(--bg-secondary); }
.cta-secondary:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
.hero-scroll { position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; color: var(--text-muted); font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; font-family: 'JetBrains Mono', monospace; animation: fadeIn 1s 1s ease both; }
.scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--accent), transparent); animation: scrollPulse 2s ease-in-out infinite; }
.hero-tagline {margin-left: auto; margin-right: auto;}
.hero-stack {justify-content: center;}
.hero-ctas {justify-content: center;}
.hero-badge {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.08);
  color: #22c55e;
}

.badge-dot {
  background: #22c55e;
}
@keyframes scrollPulse { 0%,100%{opacity:.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.1)} }
@keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn { from{opacity:0} to{opacity:1} }
@media (max-width: 600px) { .hero-ctas{flex-direction:column} .cta-primary,.cta-secondary{justify-content:center} }
</style>
