<template>
  <div class="toc-container">
    <h3 class="toc-title">目录</h3>
    <ul v-if="headers.length > 0" class="toc-list">
      <li 
        v-for="header in headers" 
        :key="header.slug"
        :class="['toc-item', `level-${header.level}`]"
      >
        <a 
          :href="`#${header.slug}`"
          :class="['toc-link', { active: activeId === header.slug }]"
          @click="setActive(header.slug)"
        >
          {{ header.title }}
        </a>
      </li>
    </ul>
    <p v-else class="no-headers">本文暂无目录</p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Toc',
  props: {
    headers: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const activeId = ref('')

    const setActive = (id) => {
      activeId.value = id
    }

    const onScroll = () => {
      // 简化的滚动检测逻辑
      const headings = document.querySelectorAll('.content h2, .content h3')
      let currentId = ''
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        if (heading.offsetTop <= window.scrollY + 100) {
          currentId = heading.id
          break
        }
      }
      
      activeId.value = currentId
    }

    onMounted(() => {
      window.addEventListener('scroll', onScroll)
      onScroll() // 初始化
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
    })

    return {
      activeId,
      setActive
    }
  }
}
</script>

<style scoped>
.toc-container {
  position: sticky;
  top: calc(var(--vp-nav-height) + 24px);
  height: fit-content;
  min-width: 200px;
  max-width: 250px;
  padding: 16px;
  border-right: 1px solid var(--vp-c-divider);
}

.toc-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  margin-bottom: 8px;
}

.toc-item.level-3 {
  padding-left: 16px;
}

.toc-link {
  font-size: 14px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  display: block;
  transition: color 0.25s;
  padding: 4px 0;
}

.toc-link:hover {
  color: var(--vp-c-brand-1);
}

.toc-link.active {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.no-headers {
  font-size: 14px;
  color: var(--vp-c-text-3);
  font-style: italic;
}
</style>