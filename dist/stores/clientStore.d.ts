interface ClientUser {
    id: number;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    birthDate?: string;
    avatar?: string;
    joinDate: Date;
    status: 'active' | 'inactive';
}
interface ClientStats {
    totalOrders: number;
    activeOrders: number;
    totalSpent: number;
    bonusPoints: number;
}
interface Order {
    id: number;
    date: Date;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    items: OrderItem[];
    total: number;
}
interface OrderItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
    image?: string;
}
interface Activity {
    id: number;
    title: string;
    description: string;
    date: Date;
    type: 'order' | 'payment' | 'delivery' | 'support';
}
interface SupportTicket {
    id: number;
    subject: string;
    message: string;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    status: 'open' | 'in_progress' | 'resolved' | 'closed';
    createdAt: Date;
    updatedAt: Date;
}
interface ClientSettings {
    emailNotifications: boolean;
    smsNotifications: boolean;
    marketingEmails: boolean;
}
interface SupportRequest {
    subject: string;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    message: string;
    attachments: File[];
}
export declare const useClientStore: import('pinia').StoreDefinition<"client", Pick<{
    currentClient: import('vue').Ref<{
        id: number;
        name: string;
        email: string;
        phone?: string | undefined;
        address?: string | undefined;
        birthDate?: string | undefined;
        avatar?: string | undefined;
        joinDate: Date;
        status: "active" | "inactive";
    } | null, ClientUser | {
        id: number;
        name: string;
        email: string;
        phone?: string | undefined;
        address?: string | undefined;
        birthDate?: string | undefined;
        avatar?: string | undefined;
        joinDate: Date;
        status: "active" | "inactive";
    } | null>;
    stats: import('vue').Ref<{
        totalOrders: number;
        activeOrders: number;
        totalSpent: number;
        bonusPoints: number;
    }, ClientStats | {
        totalOrders: number;
        activeOrders: number;
        totalSpent: number;
        bonusPoints: number;
    }>;
    orders: import('vue').Ref<{
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[], Order[] | {
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[]>;
    recentActivities: import('vue').Ref<{
        id: number;
        title: string;
        description: string;
        date: Date;
        type: "order" | "payment" | "delivery" | "support";
    }[], Activity[] | {
        id: number;
        title: string;
        description: string;
        date: Date;
        type: "order" | "payment" | "delivery" | "support";
    }[]>;
    supportTickets: import('vue').Ref<{
        id: number;
        subject: string;
        message: string;
        priority: "low" | "medium" | "high" | "urgent";
        status: "open" | "in_progress" | "resolved" | "closed";
        createdAt: Date;
        updatedAt: Date;
    }[], SupportTicket[] | {
        id: number;
        subject: string;
        message: string;
        priority: "low" | "medium" | "high" | "urgent";
        status: "open" | "in_progress" | "resolved" | "closed";
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    notifications: import('vue').Ref<string[], string[]>;
    isLoggedIn: import('vue').ComputedRef<boolean>;
    hasNotifications: import('vue').ComputedRef<boolean>;
    totalOrderValue: import('vue').ComputedRef<number>;
    pendingOrders: import('vue').ComputedRef<{
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[]>;
    completedOrders: import('vue').ComputedRef<{
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[]>;
    fetchStats: () => Promise<void>;
    fetchOrders: () => Promise<void>;
    fetchRecentActivities: () => Promise<void>;
    fetchSupportTickets: () => Promise<void>;
    setCurrentClient: (client: ClientUser) => void;
    logout: () => void;
    updateProfile: (profileData: Partial<ClientUser>) => Promise<void>;
    updateSettings: (settings: ClientSettings) => Promise<void>;
    cancelOrder: (orderId: number) => void;
    reorderItems: (orderId: number) => void;
    submitSupportRequest: (request: SupportRequest) => Promise<void>;
    addNotification: (message: string) => void;
    removeNotification: (message: string) => void;
    clearAllNotifications: () => void;
    initializeDemoClient: () => void;
}, "currentClient" | "stats" | "orders" | "recentActivities" | "supportTickets" | "loading" | "error" | "notifications">, Pick<{
    currentClient: import('vue').Ref<{
        id: number;
        name: string;
        email: string;
        phone?: string | undefined;
        address?: string | undefined;
        birthDate?: string | undefined;
        avatar?: string | undefined;
        joinDate: Date;
        status: "active" | "inactive";
    } | null, ClientUser | {
        id: number;
        name: string;
        email: string;
        phone?: string | undefined;
        address?: string | undefined;
        birthDate?: string | undefined;
        avatar?: string | undefined;
        joinDate: Date;
        status: "active" | "inactive";
    } | null>;
    stats: import('vue').Ref<{
        totalOrders: number;
        activeOrders: number;
        totalSpent: number;
        bonusPoints: number;
    }, ClientStats | {
        totalOrders: number;
        activeOrders: number;
        totalSpent: number;
        bonusPoints: number;
    }>;
    orders: import('vue').Ref<{
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[], Order[] | {
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[]>;
    recentActivities: import('vue').Ref<{
        id: number;
        title: string;
        description: string;
        date: Date;
        type: "order" | "payment" | "delivery" | "support";
    }[], Activity[] | {
        id: number;
        title: string;
        description: string;
        date: Date;
        type: "order" | "payment" | "delivery" | "support";
    }[]>;
    supportTickets: import('vue').Ref<{
        id: number;
        subject: string;
        message: string;
        priority: "low" | "medium" | "high" | "urgent";
        status: "open" | "in_progress" | "resolved" | "closed";
        createdAt: Date;
        updatedAt: Date;
    }[], SupportTicket[] | {
        id: number;
        subject: string;
        message: string;
        priority: "low" | "medium" | "high" | "urgent";
        status: "open" | "in_progress" | "resolved" | "closed";
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    notifications: import('vue').Ref<string[], string[]>;
    isLoggedIn: import('vue').ComputedRef<boolean>;
    hasNotifications: import('vue').ComputedRef<boolean>;
    totalOrderValue: import('vue').ComputedRef<number>;
    pendingOrders: import('vue').ComputedRef<{
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[]>;
    completedOrders: import('vue').ComputedRef<{
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[]>;
    fetchStats: () => Promise<void>;
    fetchOrders: () => Promise<void>;
    fetchRecentActivities: () => Promise<void>;
    fetchSupportTickets: () => Promise<void>;
    setCurrentClient: (client: ClientUser) => void;
    logout: () => void;
    updateProfile: (profileData: Partial<ClientUser>) => Promise<void>;
    updateSettings: (settings: ClientSettings) => Promise<void>;
    cancelOrder: (orderId: number) => void;
    reorderItems: (orderId: number) => void;
    submitSupportRequest: (request: SupportRequest) => Promise<void>;
    addNotification: (message: string) => void;
    removeNotification: (message: string) => void;
    clearAllNotifications: () => void;
    initializeDemoClient: () => void;
}, "isLoggedIn" | "hasNotifications" | "totalOrderValue" | "pendingOrders" | "completedOrders">, Pick<{
    currentClient: import('vue').Ref<{
        id: number;
        name: string;
        email: string;
        phone?: string | undefined;
        address?: string | undefined;
        birthDate?: string | undefined;
        avatar?: string | undefined;
        joinDate: Date;
        status: "active" | "inactive";
    } | null, ClientUser | {
        id: number;
        name: string;
        email: string;
        phone?: string | undefined;
        address?: string | undefined;
        birthDate?: string | undefined;
        avatar?: string | undefined;
        joinDate: Date;
        status: "active" | "inactive";
    } | null>;
    stats: import('vue').Ref<{
        totalOrders: number;
        activeOrders: number;
        totalSpent: number;
        bonusPoints: number;
    }, ClientStats | {
        totalOrders: number;
        activeOrders: number;
        totalSpent: number;
        bonusPoints: number;
    }>;
    orders: import('vue').Ref<{
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[], Order[] | {
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[]>;
    recentActivities: import('vue').Ref<{
        id: number;
        title: string;
        description: string;
        date: Date;
        type: "order" | "payment" | "delivery" | "support";
    }[], Activity[] | {
        id: number;
        title: string;
        description: string;
        date: Date;
        type: "order" | "payment" | "delivery" | "support";
    }[]>;
    supportTickets: import('vue').Ref<{
        id: number;
        subject: string;
        message: string;
        priority: "low" | "medium" | "high" | "urgent";
        status: "open" | "in_progress" | "resolved" | "closed";
        createdAt: Date;
        updatedAt: Date;
    }[], SupportTicket[] | {
        id: number;
        subject: string;
        message: string;
        priority: "low" | "medium" | "high" | "urgent";
        status: "open" | "in_progress" | "resolved" | "closed";
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    notifications: import('vue').Ref<string[], string[]>;
    isLoggedIn: import('vue').ComputedRef<boolean>;
    hasNotifications: import('vue').ComputedRef<boolean>;
    totalOrderValue: import('vue').ComputedRef<number>;
    pendingOrders: import('vue').ComputedRef<{
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[]>;
    completedOrders: import('vue').ComputedRef<{
        id: number;
        date: Date;
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
        items: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image?: string | undefined;
        }[];
        total: number;
    }[]>;
    fetchStats: () => Promise<void>;
    fetchOrders: () => Promise<void>;
    fetchRecentActivities: () => Promise<void>;
    fetchSupportTickets: () => Promise<void>;
    setCurrentClient: (client: ClientUser) => void;
    logout: () => void;
    updateProfile: (profileData: Partial<ClientUser>) => Promise<void>;
    updateSettings: (settings: ClientSettings) => Promise<void>;
    cancelOrder: (orderId: number) => void;
    reorderItems: (orderId: number) => void;
    submitSupportRequest: (request: SupportRequest) => Promise<void>;
    addNotification: (message: string) => void;
    removeNotification: (message: string) => void;
    clearAllNotifications: () => void;
    initializeDemoClient: () => void;
}, "fetchStats" | "fetchOrders" | "fetchRecentActivities" | "fetchSupportTickets" | "setCurrentClient" | "logout" | "updateProfile" | "updateSettings" | "cancelOrder" | "reorderItems" | "submitSupportRequest" | "addNotification" | "removeNotification" | "clearAllNotifications" | "initializeDemoClient">>;
export {};
//# sourceMappingURL=clientStore.d.ts.map