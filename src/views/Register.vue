<template>
    <div class="register-container">
        <h2 class="register-title">注册</h2>
        <form @submit.prevent="register" class="register-form">
            <div class="form-group">
                <label for="username" class="form-label">用户:</label>
                <input type="text" id="username" v-model="registerData.username" class="form-input">
            </div>
            <div class="form-group">
                <label for="password" class="form-label">密码:</label>
                <input type="password" id="password" v-model="registerData.password" class="form-input">
            </div>
            <button type="submit" class="register-button">注册</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            registerData: {
                username: '',
                password: ''
            },
            errorMessage: ''
        };
    },
    methods: {
        register() {
            if (this.registerData.username && this.registerData.password) {
                console.log('Registering...');
                // 在这里可以将注册信息提交给后端进行注册
                // 例如使用 axios 发送 POST 请求
                // axios.post('/api/register', this.registerData)
                //   .then(response => {
                //     console.log('Registration successful!');
                //     // 可以根据后端返回的数据进行相应的处理
                //   })
                //   .catch(error => {
                //     console.error('Registration failed:', error);
                //     this.errorMessage = 'Registration failed. Please try again later.';
                //   });
            } else {
                this.errorMessage = 'Please enter both username and password.';
            }
        }
    }
};
</script>

<style scoped>
.register-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.register-title {
    font-size: 24px;
    margin-bottom: 20px;
}

.register-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

.form-label {
    margin-bottom: 5px;
}

.form-input {
    padding: 8px;
    font-size: 16px;
}

.register-button {
    padding: 10px;
    font-size: 18px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>
