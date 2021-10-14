<template>
    <div>
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="../assets/logo.png" height="40" class="p-mr-2">
            </template>
        </Menubar>
    </div>
</template>

<script>
    import Menubar from 'primevue/menubar';

    export default {
        components: {Menubar},
        name: 'HeaderLayout',
        data() {
            return {
                items: [
                    {
                        label:'Home',
                        icon:'pi pi-fw pi-home',
                        to: {name: 'home'}
                    },
                    {
                        label:'Projects',
                        icon:'pi pi-fw pi-folder',
                        to: {name: 'projects'}
                    },
                    {
                        label:'About',
                        icon:'pi pi-fw pi-star',
                        to: {name: 'about'}
                    }
                ]
            }
        }
    }
</script>