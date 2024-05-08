<template>
    <div class="profile-page">
        <h2>个人资料页面</h2>

        <!-- 引用教师列表组件 -->
        <div class="list-container">
            <h3>教师列表</h3>
            <ul class="item-list">
                <li v-for="teacher in teachers" :key="teacher.id" class="list-item">
                    <span>{{ teacher.name }}</span>
                    <button @click="editTeacher(teacher)">编辑</button>
                    <button @click="deleteTeacher(teacher.id)">删除</button>
                    <ul>
                        <li v-for="course in teacher.courses" :key="course.id">{{ course.name }}</li>
                    </ul>
                    <router-link :to="'/student-management/' + teacher.id" class="manage-link">管理学生</router-link>
                </li>
            </ul>
            <button @click="addTeacher">添加教师</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            teachers: [
                {
                    id: 1,
                    name: '史密斯先生',
                    image: 'teacher1.jpg',
                    courses: [
                        { id: 1, name: '数学' },
                        { id: 2, name: '物理' },
                    ],
                    link: '/student-management/1'
                },
                {
                    id: 2,
                    name: '约翰逊女士',
                    image: 'teacher2.jpg',
                    courses: [
                        { id: 3, name: '生物' },
                        { id: 4, name: '化学' },
                    ],
                    link: '/student-management/2'
                },
                {
                    id: 3,
                    name: '李先生',
                    image: 'teacher3.jpg',
                    courses: [
                        { id: 5, name: '历史' },
                        { id: 6, name: '文学' },
                    ],
                    link: '/student-management/3'
                }
            ]
        };
    },
    methods: {
        editTeacher(teacher) {
            const newName = prompt('输入新姓名:', teacher.name);
            if (newName !== null) {
                teacher.name = newName; // 更新教师姓名
                console.log('编辑后的教师:', teacher);

                // 添加修改课程的逻辑
                const newCourses = prompt('输入新课程（以逗号分隔）:', teacher.courses.map(course => course.name).join(','));
                if (newCourses !== null) {
                    // 将用户输入的课程名称拆分成数组
                    const coursesArray = newCourses.split(',');
                    // 更新教师的课程列表
                    teacher.courses = coursesArray.map((courseName, index) => ({
                        id: index + 1,
                        name: courseName.trim()
                    }));
                    console.log('更新后的课程:', teacher.courses);
                }
            }
        },
        deleteTeacher(teacherId) {
            const index = this.teachers.findIndex(teacher => teacher.id === teacherId);
            if (index !== -1) {
                this.teachers.splice(index, 1); // 从数组中移除指定索引的教师对象
                console.log('删除ID为:', teacherId, '的教师');
            }
        },
        addTeacher() {
            const newName = prompt('输入教师姓名:');
            if (newName !== null && newName.trim() !== '') {
                const newTeacher = {
                    id: this.teachers.length + 1,
                    name: newName.trim(),
                    image: 'default.jpg',
                    courses: [],
                    link: '/student-management/' + (this.teachers.length + 1)
                };
                this.teachers.push(newTeacher); // 将新教师对象添加到数组中
                console.log('添加新教师:', newTeacher);
            }
        }
    }
};
</script>


<style scoped>
.profile-page {
    padding: 20px;
}

.teacher-list-container {
    border: 1px solid #ccc;
    padding: 20px;
}

.teacher-item-list {
    list-style: none;
    padding: 0;
}

.teacher-list-item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.teacher-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.teacher-actions button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.teacher-actions button:hover {
    background-color: #0056b3;
}

.course-list {
    list-style: none;
    padding: 0;
    margin-top: 5px;
}

.course-item {
    padding: 3px;
    background-color: #f9f9f9;
    margin-bottom: 3px;
}

.manage-link {
    display: block;
    margin-top: 5px;
    text-decoration: none;
    color: blue;
}

.add-teacher-button {
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.add-teacher-button:hover {
    background-color: #0056b3;
}
</style>
