<template>
    <div class="teacher-list-container">
        <h3>Teacher List</h3>
        <ul class="teacher-item-list">
            <li v-for="teacher in teachers" :key="teacher.id" class="teacher-list-item">
                <div class="teacher-info">
                    <span>{{ teacher.name }}</span>
                    <div class="teacher-actions">
                        <button @click="editTeacher(teacher)">Edit</button>
                        <button @click="deleteTeacher(teacher.id)">Delete</button>
                    </div>
                </div>
                <ul class="course-list">
                    <li v-for="course in teacher.courses" :key="course.id" class="course-item">{{ course.name }}</li>
                </ul>
                <router-link :to="'/student-management/' + teacher.id" class="manage-link">Manage Students</router-link>
            </li>
        </ul>
        <button @click="addTeacher" class="add-teacher-button">Add Teacher</button>
    </div>
</template>

<script>
export default {
    props: {
        teachers: Array,
        editTeacher: Function,
        deleteTeacher: Function,
        addTeacher: Function
    },
    methods: {
        editTeacher(teacher) {
            const newName = prompt('Enter new name:', teacher.name);
            if (newName !== null) {
                teacher.name = newName;
                console.log('Edited teacher:', teacher);
                const newCourses = prompt('Enter new courses (comma-separated):', teacher.courses.map(course => course.name).join(','));
                if (newCourses !== null) {
                    const coursesArray = newCourses.split(',');
                    teacher.courses = coursesArray.map((courseName, index) => ({
                        id: index + 1,
                        name: courseName.trim()
                    }));
                    console.log('Updated courses:', teacher.courses);
                }
            }
        },
        deleteTeacher(teacherId) {
            const index = this.teachers.findIndex(teacher => teacher.id === teacherId);
            if (index !== -1) {
                this.teachers.splice(index, 1);
                console.log('Deleted teacher with ID:', teacherId);
            }
        },
        addTeacher() {
            const newName = prompt('Enter teacher name:');
            if (newName !== null && newName.trim() !== '') {
                const newTeacher = {
                    id: this.teachers.length + 1,
                    name: newName.trim(),
                    image: 'default.jpg',
                    courses: [],
                    link: '/student-management/' + (this.teachers.length + 1)
                };
                this.teachers.push(newTeacher);
                console.log('Added new teacher:', newTeacher);
            }
        }
    }
};
</script>

<style scoped>
.teacher-list-container {
    margin-top: 20px;
}

.teacher-item-list {
    list-style: none;
    padding: 0;
}

.teacher-list-item {
    padding: 15px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    background-color: #f9f9f9;
}

.teacher-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.teacher-actions button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}

.teacher-actions button:hover {
    background-color: #0056b3;
}

.course-list {
    list-style: none;
    padding: 0;
    margin-top: 10px;
}

.course-item {
    padding: 5px;
    background-color: #fff;
    margin-bottom: 5px;
}

.manage-link {
    margin-top: 10px;
    text-decoration: none;
    color: blue;
}

.add-teacher-button {
    margin-top: 20px;
    padding: 10px 15px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}

.add-teacher-button:hover {
    background-color: #0056b3;
}
</style>
