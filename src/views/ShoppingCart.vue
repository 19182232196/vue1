<template>
    <div class="shopping-cart">
        <h2>购物车</h2>

        <div v-if="cart.length === 0" class="empty-cart">您的购物车是空的</div>

        <div v-else>
            <div class="cart-item" v-for="(item, index) in cart" :key="index">
                <div class="item-info">
                    <p>{{ item.name }}</p>
                    <p>价格：$ {{ item.price }}</p>
                </div>
                <div class="quantity-controls">
                    <button @click="decrementQuantity(index)">-</button>
                    <span>{{ item.quantity }}</span>
                    <button @click="incrementQuantity(index)">+</button>
                </div>
                <button @click="removeFromCart(index)" class="remove-btn">移除</button>
            </div>

            <p class="total">总价：$ {{ getTotalPrice() }}</p>
        </div>

        <hr>

        <h3>可用产品</h3>
        <div class="product-list">
            <div v-for="(product, index) in products" :key="index" class="product-item">
                <img :src="product.image" alt="Product Image" class="product-image">
                <p>{{ product.name }}</p>
                <p>价格：$ {{ product.price }}</p>
                <button @click="addToCart(product)" class="add-btn">加入购物车</button>
            </div>
        </div>
    </div>
</template>

<script>
import product1Image from '@/assets/product1.jpg';
import product2Image from '@/assets/product2.jpg';
import product3Image from '@/assets/product3.jpg';

export default {
    data() {
        return {
            products: [
                { name: '产品1', price: 10, image: product1Image },
                { name: '产品2', price: 20, image: product2Image },
                { name: '产品3', price: 30, image: product3Image }
            ],
            cart: []
        };
    },
    methods: {
        addToCart(product) {
            const existingItem = this.cart.find(item => item.name === product.name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(index) {
            this.cart.splice(index, 1);
        },
        incrementQuantity(index) {
            this.cart[index].quantity++;
        },
        decrementQuantity(index) {
            if (this.cart[index].quantity > 1) {
                this.cart[index].quantity--;
            }
        },
        getTotalPrice() {
            return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
        }
    }
};
</script>

<style scoped>
.shopping-cart {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.shopping-cart h2 {
    text-align: center;
}

.empty-cart {
    text-align: center;
    margin-top: 20px;
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.item-info {
    flex-grow: 1;
}

.quantity-controls {
    display: flex;
    align-items: center;
}

.quantity-controls button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 5px;
}

.remove-btn {
    background-color: #dc3545;
}

.total {
    margin-top: 10px;
    text-align: right;
}

.product-list {
    display: flex;
    flex-wrap: wrap;
}

.product-item {
    width: calc(33.33% - 20px);
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.product-item p {
    margin: 5px 0;
}

.add-btn {
    background-color: #28a745;
}

.product-image {
    width: 100px;
    height: auto; 
}
</style>
