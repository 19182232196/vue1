<template>
    <div class="student-management">
        <h2>学生管理</h2>

        <!-- 学生列表 -->
        <h3>学生列表</h3>
        <ul class="student-list">
            <li v-for="student in students" :key="student.id" class="student-item">
                {{ student.name }}
            </li>
        </ul>

        <!-- 添加学生表单 -->
        <form @submit.prevent="addStudent" class="add-student-form">
            <input type="text" v-model="newStudentName" placeholder="输入学生姓名" class="student-input">
            <button type="submit" class="add-button">添加学生</button>
        </form>

        <!-- 返回教师列表 -->
        <router-link to="/profile" class="back-link">返回教师列表</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            students: [
                { id: 1, name: '爱丽丝' },
                { id: 2, name: '鲍勃' },
                { id: 3, name: '查理' }
            ],
            newStudentName: ''
        };
    },
    methods: {
        addStudent() {
            if (this.newStudentName.trim() !== '') {
                this.students.push({ id: this.students.length + 1, name: this.newStudentName });
                this.newStudentName = '';
            }
        }
    }
};
</script>

<style scoped>
.student-management {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.student-list {
    list-style: none;
    padding: 0;
}

.student-item {
    margin-bottom: 5px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add-student-form {
    margin-top: 20px;
}

.student-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.add-button {
    padding: 8px 15px;
    margin-left: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.add-button:hover {
    background-color: #0056b3;
}

.back-link {
    margin-top: 20px;
    display: block;
    text-decoration: none;
    color: #007bff;
}

.back-link:hover {
    text-decoration: underline;
}
</style>
