
## Lists and Conditionals

This lab will walk you through adding a list of heroes and showing/hiding content as appropriate.



### Exercise 1: List of Heroes

This exercise will walk you through displaying a list of heroes.



#### Step 1

Download the Vue Workshop code (download the .zip or do a git clone) from the following URL if you haven't already:

[https://github.com/andonisan/vue-workshop](https://github.com/andonisan/vue-workshop)


```command line
git clone git@github.com:andonisan/vue-workshop.git
```

#### Step 2

Open to the `workshop` folder and run `npm install`

#### Step 3

Run the app using the command `npm run serve`. Then browse to [http://localhost:8080](http://localhost:8080)

#### Step 4

Open the _Heroes_ view in `src/components/heroes.vue`

#### Step 5

Create an array of heroes in the component with at least three heroes. Each hero should have an id and a name property.


```javascript
  private heroes: Hero[];
  constructor() {
    super();
    this.heroes = [
      { id: 10, name: 'Batman', description: '' },
      { id: 20, name: 'Superman', description: '' },
      { id: 30, name: 'Ironman', description: '' },
    ];
  }
```

#### Step 6

Add a `<ul>` with an `<li>` in the template directly below the `<h2>`. Add a `v-for` directive to repeat over every item in the `heroes` model you just created.

#### Step 7

Display each hero's name in the list item `<li>`.

#### Step 8

Set the key to be the id property of each hero. Your code should now look like the following in your template.


```html
<ul>
  <li v-for="hero in heroes" :key="hero.id">{{ hero.name }}</li>
</ul>
```

#### Step 9

Run the sample with `npm run serve` and open it in your browser. You should see your list of heroes!


### Exercise 2: Selecting a Hero

In this exercise you will allow the user to select a hero from the list and highlight it in yellow.



<course-item
  type="Hint"
  title="">


</course-item>


#### Step 1

Open the _Heroes_ view in `src/components/heroes.vue`

#### Step 2

Create a `selectedHero`in your component's code. This will store the hero that the user selects. Set it to `undefined` by default.


```javascript
  public selectedHero: Hero = {} as Hero;
```

#### Step 3

When the user clicks on a hero item in the template, call a new function named `selectHero`. Add the `selectHero` function to your component code in the `methods` section. Pass the hero to the new function and set the `selectedHero` model to the hero that the user selected. Your method should look like the following code


```javascript
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
```

#### Step 4

Create a style in the component named `.highlight` that changes the background color to yellow.

#### Step 5

Add a binding to the `class` of the list item in your template such that the `highlight` class is set when the user selects the hero.

#### Step 6

Verify that your template for the list looks like the following:


```html
<ul>
  <li
    v-for="hero in heroes"
    :key="hero.id"
    @click="selectHero(hero)"
    :class="{highlight: selectedHero===hero}"
  >{{ hero.name }}</li>
</ul>
```


### Exercise 3: Displaying the Selected Hero

In this exercise you will display the selected hero. it should only be displayed when a selected has been made.



#### Step 1

Open the _Heroes_ view in `src/components/heroes.vue`

#### Step 2

Add a `<div>` below the `<ul>` and display a message saying that you have selected a hero.

#### Step 3

Display the name of the selected hero in the div you just created, using the model for the `selectedHero`.

#### Step 4

If you run the app right now, you may get an error in the developer tools. Why? This is because the `selectedHero` is not yet defined until the user selects a hero. We will fix this next

#### Step 5

Only display the div you just created if a hero has been selected. Use the `v-if` directive.

#### Step 6

Run the example with `npm run serve` and open it in your browser. You should see no message until you select a hero. Then you should see your message and the hero's name.

Your template should now contain a div that looks like this:


```html
<div v-if="selectedHero">You selected {{ selectedHero.name }}</div>
```
