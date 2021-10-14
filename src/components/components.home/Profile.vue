<template>
    <div class="profile">
        <h1>Владислав Звягин</h1>
        <ImagePreview src="https://sun9-72.userapi.com/impf/YZbDqAyZQ4HSgPXp6gSRf4u78x39bM03XnVhwg/6gI9T77_rRw.jpg?size=2560x2560&quality=95&sign=90c01d96e649d4afcb1f21c9263e6b4c&type=album" alt="Image" width="250" preview />
        <p>Мужчина, 22 года, родился 14 августа 1999</p>
        <span>
            <h3>Контакты:</h3>
            <p>Телефон: +7 (913) 069-52-86</p>
            <p>E-mail: kontra.bag@bk.ru</p>
        </span>
    </div>
</template>

<script>
    import ImagePreview from 'primevue/image';

    export default {
        name: 'Profile',
        components: {ImagePreview}
    }
</script>

<style lang="scss" scoped>
    .profile {
        text-align: center;
        border-radius: 3px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        max-height: 550px;
    }
</style>