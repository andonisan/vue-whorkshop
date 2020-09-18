
This lab will walk you through using `Vuex` to handle state management in a Vue.js application that will allow users to work with a shopping cart.



### Exercise 1: Create Your Vuex Store

In this exercise you'll add Vuex to your app and create your data store.



#### Step 1

Open `workshop` in your editor.

#### Step 2

Run `npm install` to install the project dependencies.

#### Step 3

Open a terminal window in the root of the project and run `vue add vuex`. This adds Vuex to your dependencies and includes it in your app. Notice your terminal displays what files were modified by this command to ad Vuex.

#### Step 4

Open `package.json` and notice that a new dependency has been added for `vuex`.

#### Step 5

Let's now look at what the `vue add vuex` command did to the project. Open the `src` folder and notice that a `store/index.ts` file has been added. It does the following:

*   Tells Vue to use Vuex by calling `Vue.use(Vuex)`

*   Creates a new `Vuex.Store` object with `state`, `mutations`, and `actions` properties.


<course-item
  type="Note"
  title="">
  The `store` file is also imported into `main.ts` and is passed to the `Vue` object created there.

</course-item>

#### Step 6

Add classes for carts and products



#### Step 7

Locate the `state` property in `Vuex.Store` and add the following code into it.


```javascript
    cart: Array<CartProduct>(),
    products: Array<Product>()
```


<course-item
  type="Note"
  title="">
  These two properties will be stored by Vuex in the store and be accessible throughout the entire application.

</course-item>

#### Step 8

Copy and paste the following code into the `mutations` property in `Vuex.Store` to provide add, remove, and clear functionality to the store. Mutations are what mutates (changes) the state in the store.


```javascript
 addProduct(state, product: Product) {
      state.products.push(product);
    },
    addToCart(state, product: Product) {
      const itemIndex = state.cart.findIndex(item => item.id === product.id);
      if (itemIndex === -1) {
        state.cart.push({ ...product, quantity: 1, total: product.price })
      } else {
        let cartItem = state.cart[itemIndex];
        cartItem.quantity++;
        cartItem.total = cartItem.price * cartItem.quantity;
      }
    },
    removeFromCart(state, item: CartProduct) {
      const itemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
      state.cart.splice(itemIndex, 1);
    }
```

#### Step 9

We won;t be calling mutations directly, because we do not want to mutate the store from a component. Instead we want to fire an action that will decide what should happen to the state. The actions may call 0 or many mutations.

Copy the following code into the `actions` property. This will create three actions which we will call to add to the cart, get the products, and remove an item from the cart.


```javascript
addToCartAction(product) {
      this.commit('addToCart', product);
    },
    getProductsAction() {
      if (!this.state.products.length) {
        fetch(BaseUrl + 'products')
          .then(res => res.json())
          .then(products => {
            for (let product of products) {
              this.commit('addProduct', {
                id: product.id,
                name: product.name,
                price: product.price
              });
            }
          });
      }
    },
    removeFromCartAction(item) {
      this.commit('removeFromCart', item);
    }
```


<course-item
  type="Note"
  title="">
  Note that we suffix each action with the word "Action" to make sure there are no naming conflicts with mutations that may have the same name.

</course-item>


<course-item
  type="Note"
  title="">
  Note that the action function calls can use destructuring to access `commit` and `state` objects. The `commit` object lets the action commit a mutation. The `state` object gives the action access to the state.

</course-item>


<course-item
  type="Note"
  title="">
  Note that Axios or another library could be used to make the HTTP call as well as shown in the HTTP lab.

</course-item>

#### Step 10

Your work in `store/index.ts` is almost done! To finish things up, add a `getters` property into the `Vuex.Store` object at the same level as the `actions`, `mutations`, and `state`. Then create a custom `cartTotal` property in the `getters` property. This property will return the shopping cart's total cost.


```javascript
getters: {
  cartTotal: ({ cart }) => {
    let total = 0;
    for (let item of cart) {
      total += item.price * item.quantity;
    }
    return total;
  }
}
```


<course-item
  type="Note"
  title="">
  Note that Axios or another library could be used to Don't forget to add a comma after the last `actions` property bracket.

</course-item>

#### Step 11

Save `store/index.ts` before continuing.

#### Step 12

Run the command `npm run build` from your terminal to build your app. This will verify that you have no errors before continuing to the next exercise.


### Exercise 2: Using the Vuex Store in Components

In this exercise you'll add functionality into components to handle storing and retrieving state from the Vuex store.



#### Step 1

Open `src/views/Products.vue` in your editor and take a moment to note the following:

*   Examine the HTML code in the template. Notice that it renders products as well as a `Cart` component.

*   Notice that Vuex functionality is imported in the `scripts` section. The `mapState` and `mapActions` functions will be used to access store state and call into the store's actions.

#### Step 2

Add the following code into the components:


```javascript
  @Action('getProductsAction') private getProductsAction!: () => Promise<void>;
  @Action('addToCartAction') private addToCartAction!: (product: Product) => Promise<void>;

  
  created(): void {
    this.getProductsAction();
  }
```


<course-item
  type="Note"
  title="">
  The `mapActions` code makes the `getProductsAction` and `addToCartAction` actions in the Vuex store accessible to the component.

</course-item>

#### Step 3

Add the following code into the component's .


```javascript
 @State('products') protected products!: Product[];
```


<course-item
  type="Note"
  title="">
  This will allow the `products` property from the Vuex store's `state` to be used in the component. Take a moment to locate the `v-for` directive in the component's template to see where the `products` property is used.

</course-item>

#### Step 4

Open `src/components/cart.vue` in your editor. Notice that the component's template handles rendering cart items.

#### Step 5

Locate the `scripts` section and note how it uses `mapState()` and `mapGetters()` to make the store's `cart` and `cartTotal` values available to the component.

#### Step 6

Add the following code into the `methods` property of the component.


```javascript

 @Action('removeFromCartAction') private removeFromCartAction!:() => Promise<void>;
 @State('cart') protected cart!:CartProduct[];
 @Getter('cartTotal') protected cartTotal!:number;
 ```


<course-item
  type="Note"
  title="">
  This code allows the `removeFromCartAction()` function defined in the store's actions property to be used by the `Cart` component. The `removeFromCartAction()` function is called when a button in the template is clicked.

</course-item>

#### Step 7

Save all of the files you've modified up to this point.

#### Step 8

Run the following command to start the server and run the application.


```console
npm run serve
```

#### Step 9

Browse to [http://localhost:8080](http://localhost:8080).

Click on the `Products` item in the menu. Notice that products are displayed but that the cart is empty. Click on the `Buy` button next to a product and it should be added into the cart. You can click on a product multiple times to increase the quantity purchased. Cart items can be removed by clicking the `X` button next to the item.

#### Step 10

Congratulations! You've successfully implemented a Vuex store!

#### Step 11

Stop the server by pressing `ctrl+c`. This lab is complete.

