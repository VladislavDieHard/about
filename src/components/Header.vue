<template>
    <div>
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="../assets/logo.png" height="40" class="p-mr-2" >
            </template>
        </Menubar>
    </div>
</template>

<script>
    import Menubar from 'primevue/menubar';
    import BadgeDirective from 'primevue/badgedirective';

    export default {
        components: {Menubar, BadgeDirective },
        name: 'HeaderLayout',
        data() {
            return {
                items: [
                    {
                        label:'Home',
                        icon:'pi pi-fw pi-home',
                        to: {name: 'home'},
                    },
                    {
                        label:'Projects',
                        icon:'pi pi-fw pi-folder',
                        to: {name: 'projects'}
                    },
                    {
                        label:'Apis',
                        icon:'pi pi-fw pi-star',
                        to: {name: 'apis'}
                    }
                ]
            }
        }
    }
</script>