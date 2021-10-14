<template>
    <div class="info">
        <Fieldset legend="Frontend-developer" :toggleable="true">
            <ul>
                <h3>Информационные технологии, интернет, телеком</h3>
                <li>
                    Программирование, Разработка
                </li>
                <li>
                    Web инженер
                </li>
            </ul>
            <Divider type="dashed"/>
            <p>
                Занятость: полная занятость
                <br>
                График работы: полный день
            </p>
        </Fieldset>
        <Fieldset legend="Опыт работы" :toggleable="true">
            <h3>Февраль 2021 — по настоящее время
                9 месяцев</h3>
            <h4>Новосибирская Областная Юношеская Библиотека
                Новосибирск</h4>

            Искусство, культура
            <br>
            Инженер-программист
            <br>
            Разработка сайта библиотеки на стеке Django + MySQL, включая клиентскую и серверную части сайта и модулей.
            <Divider type="dashed"/>
            <h3>Ноябрь 2019 — апрель 2020 6 месяцев</h3>
            <h4>ФИЛИАЛ ПАО "МЕГАФОН" (Г НОВОСИБИРСК)
                Новосибирск, megafon.ru</h4>

            Телекоммуникации, связь
            <br>
            Специалист федерального телемаркетига
            <br>
            Телефонные продажи с персональными предложениями для клиентов.
        </Fieldset>
        <Fieldset legend="Навыки" :toggleable="true">

        </Fieldset>
    </div>
</template>

<script>
    import Fieldset from 'primevue/fieldset';
    import Divider from 'primevue/divider';

    export default {
        name: 'Info',
        components: {
            Fieldset,
            Divider
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>