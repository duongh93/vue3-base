<template>
  <div class="login-box">
    <div class="card">
      <div class="card-body login-card-body">
        <div class="login-logo">
          <span>Binance Manager</span>
        </div>
        <br>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <div class="input-group">
              <input type="text" name="email" v-model="email" class="form-control" placeholder="email"
                     value="">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="input-group">
              <input type="password" name="password" v-model="password" class="form-control" placeholder="Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12">
              <button type="submit" class="btn btn-primary btn-block">Đăng nhập</button>
            </div>
          </div>
          <div v-if="error" class="error">{{ error }}</div>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref, reactive} from 'vue';
import { useStore } from 'vuex';

const email = ref('');
const password = ref('');
const error = ref('');
const store = useStore();

const handleSubmit = async () => {
  try {
    await store.dispatch('login', { email: email.value, password: password.value });

  } catch (err) {
    error.value = err.message;
  }
};

</script>

<style scoped>

</style>

