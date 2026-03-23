import bcrypt from 'bcryptjs';
import db from './database.js';
// Create default admin
const adminEmail = 'admin@siffrum.com';
const adminPassword = 'siffrum2024';
const existing = db.prepare('SELECT id FROM admins WHERE email = ?').get(adminEmail);
if (!existing) {
    const hash = bcrypt.hashSync(adminPassword, 12);
    db.prepare('INSERT INTO admins (email, password) VALUES (?, ?)').run(adminEmail, hash);
    console.log(`✅ Admin created: ${adminEmail} / ${adminPassword}`);
}
else {
    console.log(`ℹ️  Admin already exists: ${adminEmail}`);
}
// Seed sample projects
const projectCount = db.prepare('SELECT COUNT(*) as count FROM projects').get();
if (projectCount.count === 0) {
    const projects = [
        {
            title: 'FinTech Dashboard',
            description: 'Real-time financial analytics dashboard for institutional traders with live market data and AI predictions.',
            long_description: 'A comprehensive trading analytics platform featuring real-time data visualization, portfolio management, risk assessment tools, and machine learning-powered market predictions. Built for a leading financial services firm processing millions of data points per second.',
            tags: JSON.stringify(['React', 'Node.js', 'WebSocket', 'D3.js', 'Python']),
            category: 'Web App',
            client: 'TradeCorp',
            live_url: '',
            featured: 1,
        },
        {
            title: 'HealthSync Mobile',
            description: 'Cross-platform health tracking app with AI-powered insights and wearable device integration.',
            long_description: 'A next-generation health and wellness application that syncs with popular wearable devices, provides AI-driven health insights, medication reminders, and connects patients with healthcare providers through telemedicine features.',
            tags: JSON.stringify(['React Native', 'Python', 'ML', 'Firebase', 'HealthKit']),
            category: 'Mobile App',
            client: 'MedTech Inc',
            live_url: '',
            featured: 1,
        },
        {
            title: 'E-Commerce Platform',
            description: 'Scalable multi-vendor marketplace processing 10K+ orders daily with real-time inventory management.',
            long_description: 'A full-featured multi-vendor e-commerce platform with advanced search, recommendation engine, real-time inventory tracking, payment processing, and seller analytics dashboard. Handles over 10,000 orders per day with 99.99% uptime.',
            tags: JSON.stringify(['Next.js', 'Go', 'PostgreSQL', 'Redis', 'Stripe']),
            category: 'Web App',
            client: 'ShopFlow',
            live_url: '',
            featured: 1,
        },
        {
            title: 'Fleet Management System',
            description: 'GPS tracking and route optimization platform for logistics companies managing 500+ vehicles.',
            long_description: 'An enterprise fleet management solution with real-time GPS tracking, intelligent route optimization, fuel consumption analytics, driver behavior monitoring, and predictive maintenance scheduling.',
            tags: JSON.stringify(['React', 'Node.js', 'MongoDB', 'Maps API', 'IoT']),
            category: 'Web App',
            client: 'LogiTrack',
            live_url: '',
            featured: 0,
        },
        {
            title: 'Social Fitness App',
            description: 'Community-driven fitness platform with workout sharing, challenges, and personal training.',
            long_description: 'A social fitness application that combines workout tracking with community features. Users can share workouts, join challenges, follow trainers, and track their progress with detailed analytics and AI-powered workout recommendations.',
            tags: JSON.stringify(['Flutter', 'Node.js', 'PostgreSQL', 'Firebase']),
            category: 'Mobile App',
            client: 'FitTribe',
            live_url: '',
            featured: 0,
        },
        {
            title: 'Brand Identity System',
            description: 'Complete brand redesign including logo, design system, marketing materials, and style guide.',
            long_description: 'A comprehensive brand identity overhaul for a creative agency, including logo design, typography system, color palette, component library, marketing collateral templates, and detailed brand guidelines documentation.',
            tags: JSON.stringify(['Figma', 'Illustrator', 'After Effects', 'Design Systems']),
            category: 'UI/UX',
            client: 'Nova Studios',
            live_url: '',
            featured: 0,
        },
    ];
    const stmt = db.prepare(`INSERT INTO projects (title, description, long_description, tags, category, client, live_url, featured)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
    for (const p of projects) {
        stmt.run(p.title, p.description, p.long_description, p.tags, p.category, p.client, p.live_url, p.featured);
    }
    console.log(`✅ ${projects.length} sample projects seeded`);
}
else {
    console.log(`ℹ️  Projects already exist (${projectCount.count})`);
}
console.log('\n🎉 Seed complete!');
