<template>
  <div class="custom-layout">
    <aside v-if="hasOutline" class="custom-aside">
      <div class="outline-container">
        <h3 class="outline-title">目录</h3>
        <ul class="outline-list" v-if="headers.length > 0">
          <li 
            v-for="header in headers" 
            :key="header.slug"
            :class="['outline-item', `level-${header.level}`]"
          >
            <a 
              :href="`#${header.slug}`"
              :class="['outline-link', { active: activeHeader === header.slug }]"
              @click="handleHeaderClick(header.slug)"
            >
              {{ header.title }}
            </a>
          </li>
        </ul>
        <p v-else class="no-headers">暂无目录</p>
      </div>
    </aside>
    <main class="custom-main">
      <slot />
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'CustomLayout',
  props: {
    headers: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const activeHeader = ref('')
    const hasOutline = ref(true)

    const handleHeaderClick = (slug) => {
      activeHeader.value = slug
      // 滚动到对应位置
      const element = document.getElementById(slug)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const onScroll = () => {
      // 检测当前可见的标题
      const headers = document.querySelectorAll('.content h2, .content h3')
      let currentId = ''
      
      for (let i = headers.length - 1; i >= 0; i--) {
        const header = headers[i]
        const rect = header.getBoundingClientRect()
        if (rect.top <= 100) {
          currentId = header.id
          break
        }
      }
      
      activeHeader.value = currentId
    }

    onMounted(() => {
      window.addEventListener('scroll', onScroll)
      onScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
    })

    return {
      activeHeader,
      hasOutline,
      handleHeaderClick
    }
  }
}
</script>

<style scoped>
.custom-layout {
  display: flex;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.custom-aside {
  position: sticky;
  top: calc(var(--vp-nav-height) + 24px);
  height: fit-content;
  min-width: 200px;
  max-width: 250px;
  padding: 16px;
  border-right: 1px solid var(--vp-c-divider);
}

.outline-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.outline-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.outline-item {
  margin-bottom: 8px;
}

.outline-item.level-3 {
  padding-left: 16px;
}

.outline-link {
  font-size: 14px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  display: block;
  transition: color 0.25s;
  padding: 4px 0;
}

.outline-link:hover {
  color: var(--vp-c-brand-1);
}

.outline-link.active {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.custom-main {
  flex: 1;
  min-width: 0;
}

.no-headers {
  font-size: 14px;
  color: var(--vp-c-text-3);
  font-style: italic;
}

@media (max-width: 960px) {
  .custom-layout {
    flex-direction: column;
  }
  
  .custom-aside {
    position: relative;
    top: 0;
    max-width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--vp-c-divider);
  }
}
</style>