<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-container>
                    <el-header>
                        <el-row>
                            <el-col :span="12">Food Items</el-col>
                            <el-col :span="6" class="pull-right">
                                <el-popover placement="bottom" width="250" trigger="click">
                                    <div v-if="carts.length">
                                        <ul>
                                            <li v-for="(item,key) in carts" v-bind:key="key">
                                                <span
                                                    class="el-danger"
                                                >{{item.name}} X {{item.quantity}} - {{item.price | currency}}</span>
                                                <i class="el-icon-delete color-danger" @click="removeCartItem(item.id)"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div v-else>
                                        <el-row>
                                            <el-col :span="24">
                                                <span>No items in cart</span>
                                            </el-col>
                                        </el-row>
                                    </div>
                                    <el-badge :value="carts.length" class="item" slot="reference">
                                        <el-button
                                            icon="el-icon-shopping-cart-2"
                                            circle
                                            size="medium"
                                        ></el-button>
                                    </el-badge>
                                </el-popover>
                            </el-col>
                            <!-- <el-col :span="6">
                                Cart Total - {{cartTotal | currency}}
                            </el-col> -->
                        </el-row>
                    </el-header>
                    <div style="display:none">{{carts}} </div>
                    <el-main>
                        <el-row :gutter="20">
                            <el-col
                                :span="6"
                                class="spacing"
                                v-for="(item,key) in items"
                                v-bind:key="key"
                            >
                                <div class="grid-content bg-purple">
                                    <figure class="food_image">
                                        <img :src="item.image" />
                                    </figure>
                                    <span>{{item.name}}</span>
                                    <span>{{item.price | currency}}</span>
                                    <el-button
                                        type="primary"
                                        @click="addItemToCart(item)"
                                    >Add to Cart</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </el-main>
                </el-container>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { mapMutations } from "vuex";


export default Vue.extend({
    data() {
        return {
            show: false,
            items: [] as object
        };
    },
    created() {
        this.getFoodItems();
    },
    computed: {
        carts() {
            return this.$store.getters["cart/cartItems"];
        },
        cartTotal(){
            return this.$store.getters['cart/cartTotal']
        }
    },
    methods: {
        getFoodItems() {
            this.items = [
                {
                    id: 1,
                    name: "sandwich",
                    price: 100,
                    inventory: 100,
                    image:
                        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/sonic-drive-beefs-menu-biggie-cheese-499.jpg?itok=L8Ljd-WY",
                },
                {
                    id: 2,
                    name: "burger",
                    image:
                        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/sonic-drive-beefs-menu-biggie-cheese-499.jpg?itok=L8Ljd-WY",
                    price: 10,
                    inventory: 100,
                },
                {
                    id: 3,
                    name: "pizza",
                    image:
                        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/sonic-drive-beefs-menu-biggie-cheese-499.jpg?itok=L8Ljd-WY",
                    price: 20,
                    inventory: 100,
                },
                {
                    id: 4,
                    name: "samosa",
                    image:
                        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/sonic-drive-beefs-menu-biggie-cheese-499.jpg?itok=L8Ljd-WY",
                    price: 50,
                    inventory: 100,
                },
                {
                    id: 5,
                    name: "pasta",
                    image:
                        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/sonic-drive-beefs-menu-biggie-cheese-499.jpg?itok=L8Ljd-WY",
                    price: 90,
                    inventory: 100,
                },
                {
                    id: 6,
                    name: "maggie",
                    image:
                        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/sonic-drive-beefs-menu-biggie-cheese-499.jpg?itok=L8Ljd-WY",
                    price: 70,
                    inventory: 100,
                },
                {
                    id: 7,
                    name: "sweet corn",
                    image:
                        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/sonic-drive-beefs-menu-biggie-cheese-499.jpg?itok=L8Ljd-WY",
                    price: 45,
                    inventory: 100,
                },
                {
                    id: 8,
                    name: "popcorn",
                    image:
                        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/sonic-drive-beefs-menu-biggie-cheese-499.jpg?itok=L8Ljd-WY",
                    price: 68,
                    inventory: 100,
                },
            ];
        },
        addItemToCart(product: object) {
            this.$store.dispatch("cart/addItemToCart", product);
        },
      
        removeCartItem(product: object) {
            this.$store.commit("cart/removeCartItem", product);
        },
    },
});
</script>
<style>
.spacing {
    padding: 10px;
}
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.bg-purple {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

.el-badge__content.is-fixed {
    top: 10px;
}

.food_image img {
    height: 188px;
    margin: 10px;
}
</style>