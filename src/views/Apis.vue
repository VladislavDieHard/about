<template>
  <div class="about p-grid">
    <div class="http-cat p-col-6">
      <a href="https://http.cat" target="_blank"><h2>https://http.cat</h2></a>
      <img :src="`https://http.cat/${status}`" alt="?" v-if="status">
      <select name="cat-code" id="cat-code" v-model="status">
        <option v-for="statusValue in statuses" :value="statusValue.code">{{statusValue.message}}</option>
      </select>
    </div>
    <div class="questions p-col-6">
      <a href="https://yesno.wtf/api" target="_blank"><h2>https://yesno.wtf/api</h2></a>
      <img :src="answerImg" @load="setAnswer" alt="?" v-if="answerImg">
      <InputText type="text" v-model="question" placeholder="Задай свой вопрос. Ответом будет (Да/Нет)" />
      <span>Ответ: <h3>{{answer}}</h3></span>
      <Button @click="ask" label="?" class="p-button-rounded p-button-secondary"/>
    </div>
  </div>
</template>

<script>
  import Button from 'primevue/button';
  import ImagePreview from 'primevue/image';
  import InputText from 'primevue/inputtext';
  import CascadeSelect from 'primevue/cascadeselect';
  import Statuses from '../statuses'

  export default {
    name: 'About',
    components: {
      Button,
      ImagePreview,
      InputText,
      CascadeSelect
    },
    data() {
      return {
        question: '',
        answerResponse: null,
        answerImg: '',
        answer: '',
        statuses: Statuses,
        status: Statuses[Math.round(Math.random() * (Statuses.length))].code
      }
    },
    mounted() {
    },
    methods: {
      async ask() {
        const response = await fetch('https://yesno.wtf/api', {
          method: 'GET'
        });
        let result = await response.json();
        this.answerResponse = result;
        this.answerImg = result.image;
      },
      setAnswer() {
        this.answer = this.answerResponse.answer;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    display: flex;
    justify-content: center;
    a {
      color: white;
    }
  }

  .questions {
    display: flex;
    flex-direction: column;
    width: 500px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;

    input {
      width: 400px;
    }

    span {
      display: flex;
      align-items: center;
    }
  }

  .http-cat {
    display: flex;
    flex-direction: column;
    width: 500px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;

    img {
      max-width: 80%;
    }
  }

  .p-col-6 {
    margin: 30px 10px 0 10px;
  }
</style>