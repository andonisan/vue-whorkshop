This lab will walk you through routing and how it can be used to load and display different components. You'll learn how to define routes, work with the `router-view` directive, and link to routes using `router-link`.



### Exercise 1: Defining Routes

In this exercise you'll explore the lab application code and define routes to display Villains and Orders components.



#### Step 1

Open `workshop` in your editor.

#### Step 2

Open a terminal window in the root of the project and run `vue add router`. This adds the Vue router to your dependencies and includes it n your app.

When you are prompted to use history mode, type `y` and press `ENTER`.

#### Step 3

Notice that the Vue CLI tells you that several files have been updated. The `router.ts` file now contains all of your routing/navigation logic and tells Vue to use the router. The `App.vue` file now contains a place for the routes to show their views (the `<router-view>`).


```command-line
The following files have been updated / added:

     src/router/index.ts
     src/views/About.vue
     src/views/Home.vue
     package-lock.tson
     package.tson
     src/App.vue
     src/main.ts
```

#### Step 4

We also have new files `Home.vue` and `About.vue`. Let's delete those because we'll be adding our own views.

We'll be using the following files instead:

*   VillainsList.vue

*   OrdersList.vue

*   NotFound.vue


They'll be displayed in the application using routing.

#### Step 5

Open `router.ts`. Notice that `vue-router` along with the `About` and `Home` views are imported at the top of the file. We removed the About and Home views, so let's remove their imports too.

#### Step 6

Open `router.ts` and and import `VillainsList.vue` and the `HeroesList.vue` at the top of the file.


```javascript
import Vue from 'vue';
import Router from 'vue-router';
import VillainsList from './views/VillainsList.vue';
import HeroesList from './views/HeroesList.vue';

Vue.use(Router);
```

#### Step 7

Go to the `router.ts` file and look for the route definitions. Change the default path of `/` from home to villains. This `VillainsList.vue` will load using eager loading because we specify the component explicitly.


```javascript
routes: [
  {
    path: '/',
    name: 'villains',
    component: VillainsList
  },
```

#### Step 8

In `router.ts`, look for the route definitions. Add a route definition such that `/heroes` displays the `HeroesList.vue`.


```javascript
routes: [
  {
    path: '/heroes',
    name: 'heroes',
    component: HeroesList
  },
```

#### Step 9

Go to the `router.ts` file and look for the route definitions. Change the `/about` path from about to orders. Use the lazy loading syntax for orders.


```javascript
{
  path: '/orders',
  name: 'orders',
  component: () => import(/* webpackChunkName: "orders" */ '@/views/OrdersList.vue')
}
```

#### Step 10

Go to the `router.ts` file and look for the route definitions. Add a path at the end of the route definitions to catch all unknown routes, and send it to the NotFound view. You will also want to import the `NotFound.vue` file at the top of this file.


```javascript
import NotFound from './views/NotFound.vue';

///

{ path: '*', component: NotFound }
```

#### Step 11

Open `App.vue` and notice we have a `router-link` pointing to `/` for Home and `/about` for About. Update the Home route to point to / and to display Villains.


```html
<div id="nav">
  <router-link to="/">Villains</router-link>
  |
  <router-link to="/about">About</router-link>
</div>
<router-view />
```

#### Step 12

Run `npm run serve` and visit `http://localhost:8080` in the browser. Now explore the routing navigation you just successfully created!


### Exercise 2: Router Links and Parameters

In this exercise you'll use the `router-link` component to create a link to a route. You'll also create a computed property that will be used to access a route parameter value and display it.



#### Step 1

Open `VillainsList.vue`. Locate the `Add router-link Here` comment and replace it with the following code to link to the `OrdersList.vue` and pass it the order ID.


```html
<router-link :to="{ name: 'orders', params: { id: v.id }}">
  View Orders
</router-link>
```


<course-item
  type="Note"
  title="Defining a Route Parameter">
  Notice that you're using the `name` property to reference the name of the route created earlier and the `params` property to define the value of the `id` route parameter.

</course-item>

#### Step 2

Open `OrdersList.vue`. Notice that the top of the template writes out the value of a `villainId` property.

#### Step 3

Locate the `Add router-link Here` comment in the `OrdersList.vue` template. Replace the comment with the following code to link back to the `VillainsList.vue`.


```html
<router-link :to="{ name: 'villains' }">View Villains</router-link>
```

#### Step 4

Add a new computed property named `villainId` into the component's script section.

The computed property function should accept a single parameter named `vm` and return a value of `vm.$route.params.id`. Click on the `Hint` below if you need help.


<course-item
  type="Note"
  title="Using $route">
  The $route object can be used to access route parameters (such as the `:id` parameter defined in the previous exercise) or even access query-string parameters.

</course-item>


<course-item
  type="Hint"
  title="Need Help?">
  The computed property function should look like the following:


```javascript
 get villainId(): string {
    return this.$route.params.id;
  }
```

</course-item>

#### Step 5

Run `npm run serve` to build the project and start the local server. Visit `http://localhost:8080` in the browser.

#### Step 6

A list of villains should be displayed. Click on the `View Orders` link next to any villain to see their orders. Notice that the villain's `Id` is shown.

#### Step 7

Stop the server by pressing `ctrl+c`. This lab is complete.