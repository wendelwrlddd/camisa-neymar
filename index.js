const app = Vue.createApp({
    data() {
        return {
            images: [
                'img/D_NQ_NP_780355-MLB81742375228_012025-O.webp',
                'img/D_NQ_NP_751772-MLB81742249430_012025-O.webp',
                'img/D_NQ_NP_780355-MLB81742375228_012025-O.webp',
                'img/D_NQ_NP_837219-MLB81742249434_012025-O.webp'
            ],
            currentIndex: 0
        };
    },
    methods: {
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        autoSlide() {
            setInterval(() => {
                this.nextImage();
            }, 3000);
        }
    },
    mounted() {
        this.autoSlide();
    }
});

app.mount('#app');