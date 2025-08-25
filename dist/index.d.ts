import { Component } from 'vue';
export { default as ClientLayout } from './layouts/ClientLayout.vue';
export { default as ClientHome } from './pages/ClientHome.vue';
export { default as ClientProfile } from './pages/ClientProfile.vue';
export { default as ClientOrders } from './pages/ClientOrders.vue';
export { default as ClientSupport } from './pages/ClientSupport.vue';
export { useClientStore } from './stores';
export interface ClientRoute {
    path: string;
    name: string;
    component: () => Promise<Component>;
}
export declare function getClientRoutes(): ClientRoute[];
//# sourceMappingURL=index.d.ts.map