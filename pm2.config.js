module.exports = {
  apps : [{
    name   : "adhim-portfolio", 
    script : "npm", // atau "yarn"
    args   : "start", // Skrip start Anda mungkin sudah menghargai variabel PORT dari .env.production
    // Atau, jika Anda perlu secara eksplisit mengatur port melalui argumen:
    // script : "node_modules/next/dist/bin/next",
    // args   : "start -p 4097",
    watch: false,
    max_memory_restart: '1G',
    env_production: {
       NODE_ENV: "production",
       PORT: 4090 
    },
  }]
}