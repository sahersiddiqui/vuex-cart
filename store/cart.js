export const state = () => ({
    products: []
})


export const getters = {
    cartItems(state) {
        return state.products
    },
    cartTotal(state) {
        return state.products.reduce((total, item) => total + item.price * item.quantity, 0)
    }

}
export const actions = {
    addItemToCart(store, product) {
        if (product.inventory > 0) {
            let cartItem = store.state.products.find(item => product.id === item.id)
            if (!cartItem) {
                product.quantity = 1;
                store.commit("pushItemToCart", product);
            } else {
                store.commit("incrementItemQuantity", cartItem)
            }


        }
    },
    removeCartItem(store, product) {
        store.commit("removeCartItem" ,product)
    }

}

export const mutations = {
    pushItemToCart(store, product) {
        store.products.push(product)
    },
    incrementItemQuantity(store, product) {
        product.quantity++;
        product.inventory--;

    },
    removeCartItem(store, product) {
        let index = store.products.filter((item,key) => {
            return item.id == product.id ? key : null;
        })
        store.products.splice(index, 1)
    },

}