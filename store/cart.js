export const state = () => ({
    products: []
})


export const actions = {
    addItemToCart(store, product) {
        if (product.inventory > 0) {
            let cartItem = store.state.products.find(item => product.id === item.id)
            if (cartItem) {
                store.commit("incrementItemQuantity", cartItem)
            } else {
                product.quantity = 1;
                store.commit("pushItemToCart", product);
            }
            

        }
    },

}

export const mutations = {
    pushItemToCart(store, product) {
        store.products.push(product)
    },
    incrementItemQuantity(store, product) {
        console.log(product)
        product.inventory++;
        product.quantity++;

    },
    remove(store, { productId }) {
        store.products.splice(store.products.indexOf(productId), 1)
    },
    
}