This lab will walk you through using lifecycle hooks, using computed properties, and engaging with watchers.

### Exercise 1: Using the Created LifeCycle Hook

In this exercise you'll use the `created` lifecycle hook to load your hero data your component.



#### Step 1

Open the `workshop` folder in your editor and run `npm install`

#### Step 2

Run the app using the command `npm run serve`. Then browse to [http://localhost:8080](http://localhost:8080). Notice the hero does not load. This is because we need to load the hero into the `hero` data model.

#### Step 3

Open the _Heroes_ view in `src/components/heroes.vue` and notice the `hero` data model is an empty object.

#### Step 4

Add the `created` lifecycle hook in the component. This hook is called when the component is created. Make the `created` lifecycle hook call the local method `loadHero()`, which will fill the `hero` data model.



```javascript
created() {
  this.loadHero();
},
```

#### Step 5

Notice the hero now loads in the running app!


### Exercise 2: Creating a Computed Property

In this exercise you'll created a computed property to display the full name or your hero in the component.



#### Step 1

Open the _Heroes_ view in `src/components/heroes.vue` and notice the title bar says "TITLE". We are going to change that to display the hero's full name.

#### Step 2

Add a `computed` section in the component.

#### Step 3

Create a computed property named `fullName` in the `computed` section of the component. Make the `fullName` computed property return the first and last name of the hero, concatenated together with a space between them.



```javascript
  fullName() {
    return `${this.hero.firstName} ${this.hero.lastName}`;
  }
```

</course-item>

#### Step 4

Now find the HTML in your template that displays "TITLE" in the header. Replace the hard coded word "TITLE" and instead render the computed property you just created.


<course-item
  type="Hint"
  title="Need Help?">
  TITLE was hard coded. But we need to use interpolation to render the `fullName` computed property. When complete, your code will look like the following:


```html
<header class="card-header">
  <p class="card-header-title">{{ fullName }}</p>
</header>
```

</course-item>

#### Step 5

Notice that after the hero loads that the title is the full name. Change the hero's first name or last name and you will see the title reflect those changes.


### Exercise 3: Creating a Watcher

In this exercise you will use a watcher to update the `capeMessage` data model whenever the `capeCounter` data model changes.



#### Step 1

Open the _Heroes_ view in `src/components/heroes.vue` and notice the "cape message" is empty. We are going to change that to display a different message based on the value of the `capeCounter` data model.

#### Step 2

Add a `watch` section in the component.

#### Step 3

Create a watcher property that watches the `hero.capeCounter` in the `watch` section of the component. Make the watcher call the `handleTheCapes()` method, passing the `newValue` to it every time the `hero.CapeCounter` changes.


```javascript
  @Watch('hero.capeCounter')
  handler(newValue: string, oldValue: string) {
    this.handleTheCapes(newValue);
  }
```

#### Step 4

Stop the server by pressing `ctrl+c`. This lab is complete.