<template>
  <div class="client-home">
    <div class="welcome-section">
      <h1>Xush kelibsiz, Client Portal'ga!</h1>
      <p>Bu yerda siz o'zingizning hisobingizni boshqarishingiz mumkin</p>
    </div>

    <div class="dashboard-cards">
      <BaseCard
        title="Mening Buyurtmalarim"
        subtitle="Jami buyurtmalar soni"
        class="stats-card"
      >
        <div class="card-number">
          {{ clientStore.stats.totalOrders }}
        </div>
      </BaseCard>
      
      <BaseCard
        title="Faol Buyurtmalar"
        subtitle="Hozirda faol buyurtmalar"
        class="stats-card"
      >
        <div class="card-number">
          {{ clientStore.stats.activeOrders }}
        </div>
      </BaseCard>
      
      <BaseCard
        title="Jami Xaridlar"
        subtitle="Jami sarflangan mablag'"
        class="stats-card"
      >
        <div class="card-number">
          ${{ clientStore.stats.totalSpent }}
        </div>
      </BaseCard>
      
      <BaseCard
        title="Bonuslar"
        subtitle="To'plangan bonus ballari"
        class="stats-card"
      >
        <div class="card-number">
          {{ clientStore.stats.bonusPoints }}
        </div>
      </BaseCard>
    </div>

    <BaseCard
      title="So'nggi Faoliyat"
      class="recent-activity-card"
    >
      <div class="activity-list">
        <div
          v-for="activity in clientStore.recentActivities"
          :key="activity.id"
          class="activity-item"
        >
          <div class="activity-icon">
            📦
          </div>
          <div class="activity-content">
            <h4>{{ activity.title }}</h4>
            <p>{{ activity.description }}</p>
            <small>{{ formatDate(activity.date) }}</small>
          </div>
        </div>
      </div>
    </BaseCard>

    <div class="quick-actions">
      <h2>Tezkor Amallar</h2>
      <div class="actions-grid">
        <BaseCard class="action-card-wrapper">
          <template #actions>
            <BaseButton
              class="full-width"
              color="primary"
              label="Yangi Buyurtma"
              @click="router.push('/client/orders')"
            />
          </template>
          <div class="action-content">
            <div class="action-icon">
              🛒
            </div>
            <h3>Yangi Buyurtma</h3>
            <p>Yangi buyurtma berish</p>
          </div>
        </BaseCard>
        
        <BaseCard class="action-card-wrapper">
          <template #actions>
            <BaseButton
              class="full-width"
              color="secondary"
              label="Profilni Ko'rish"
              @click="router.push('/client/profile')"
            />
          </template>
          <div class="action-content">
            <div class="action-icon">
              👤
            </div>
            <h3>Profil</h3>
            <p>Profil ma'lumotlarini ko'rish</p>
          </div>
        </BaseCard>
        
        <BaseCard class="action-card-wrapper">
          <template #actions>
            <BaseButton
              class="full-width"
              color="accent"
              label="Yordam Olish"
              @click="router.push('/client/support')"
            />
          </template>
          <div class="action-content">
            <div class="action-icon">
              💬
            </div>
            <h3>Yordam</h3>
            <p>Qo'llab-quvvatlash xizmati</p>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { BaseCard, BaseButton } from '@apps/shared'
import { useClientStore } from '../stores'

const router = useRouter()
const clientStore = useClientStore()

onMounted(() => {
  clientStore.fetchStats()
  clientStore.fetchRecentActivities()
})

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}
</script>

<style scoped>
.client-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.welcome-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.welcome-section h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.welcome-section p {
  font-size: 1.2rem;
  color: #6b7280;
}

.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stats-card {
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.stats-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin: 1rem 0;
}

.recent-activity-card {
  margin-bottom: 3rem;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.activity-item:hover {
  background: #f3f4f6;
}

.activity-icon {
  font-size: 1.5rem;
  padding: 0.5rem;
  background: #667eea;
  border-radius: 50%;
  color: white;
  min-width: 3rem;
  text-align: center;
}

.activity-content h4 {
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.activity-content p {
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.activity-content small {
  color: #9ca3af;
  font-size: 0.8rem;
}

.quick-actions {
  margin-bottom: 2rem;
}

.quick-actions h2 {
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.action-card-wrapper {
  transition: transform 0.3s, box-shadow 0.3s;
}

.action-card-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.action-content {
  text-align: center;
  padding: 1rem 0;
}

.action-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.action-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  color: #1f2937;
}

.action-content p {
  color: #6b7280;
  font-size: 0.9rem;
}

.full-width {
  width: 100%;
}
</style>
