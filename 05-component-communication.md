This lab will walk you through how to communicate between a parent (Heroes) and child (HeroDetail) component. You will learn to use props to pass values from parent to child. You will learn how to create custom events from the child that notify the parent component when something has occurred.



### Exercise 1: Passing a selected item to a child component

In this exercise you will learn how to pass a value in data model in a parent component to a child component.



#### Step 1

Open the `workshop` folder in your editor and run `npm install`

#### Step 2

Run the app using the command `npm run serve`. Then browse to [http://localhost:8080](http://localhost:8080). Notice a list of heroes are displayed but nothing visibly happens when you selected a hero.

#### Step 3

The `HeroDetail` component displays a hero's details in a form and should allow edits.

Open the `HeroDetail` component in `src/components/HeroDetail.vue` and go to the script code section.

#### Step 4

We want the `HeroDetail` component to accept a hero as input from a parent component. Add the `Prop` section to this component and define a prop named `hero`, that is of type `Hero`, and defaults to a function that returns an empty object.




```javascript
 @Prop({ required: false, default: false })
  hero!: Hero;
```

#### Step 5

The `HeroDetail` component's template binds to the hero using the data model named `clonedHero`. Notice the `clonedHero` is set to an empty object currently. We could bind directly to the prop `hero`, however it is not recommended to modify the prop in a child component as data should not flow from child to parent. Thus, this component binds to the `clonedHero` data model.

Now clone the `hero` prop into the `clonedHero` model.


<course-item
  type="Hint"
  title="Need Help?">
  You can use the spread operator to extract the `hero` prop's properties out, and then add them back to the `clonedHero`. See the following code to see what your `clonedHero` might look like.


```javascript
  private message = '';

  get clonedHero(): Hero {
    return this.hero;
  }
```

</course-item>

#### Step 6

Open the _Heroes_ view in `src/components/heroes.vue` and go to the script code section. Make the `HeroDetail` component a dependency of the `Heroes` component.

You'll need to import the `HeroDetail` component from the `@/components/HeroDetail` and add the `HeroDetail` to the `Heroes` component's `components` section.



```javascript
import { Component, Vue } from 'vue-property-decorator';
import { Hero } from '@/models/hero';
import HeroDetail from '@/components/HeroDetail.vue';

@Component({
  components: { HeroDetail },
})

export default class Heroes extends Vue {
  public heroes: Hero[] = [];
  public selectedHero: Hero = {} as Hero;
  private message = '';

  get isHeroSelected(): boolean {
    return !!this.selectedHero.id;
  }
```


#### Step 7

Now place the `HeroDetail` component in the template, just below the closing `</ul>` tag showing the heroes list. Pass the `isHeroSelected` model into the `HeroDetail` component's `hero` prop, and only add this component to the DOM if a hero has actually been selected.


<course-item
  type="Hint"
  title="Need Help?">
  See the following code to see what your template might look like.


```html
<HeroDetail :hero="selectedHero" v-if="isHeroSelected"/>
```

</course-item>

#### Step 8

You just added a `v-if` to only show the `HeroDetail` component if a hero has been selected. Now add a similar `v-if` binding to the `<ul>` that lists the heroes, and only show the list if a hero has _not_ been selected.


<course-item
  type="Hint"
  title="Need Help?">
  See the following code to see what your template might look like.


```html
<ul v-if="!isHeroSelected">
```

</course-item>

#### Step 9

Now when you use the running app and select a hero, the list should disappear and the selected hero's details should be visible.


### Exercise 2: Creating custom events

In this exercise you will create custom events that let the `HeroDetail` component notify its parent `Heroes` component when a user presses the cancel or save buttons.



#### Step 1

Open the `HeroDetail` view in `src/components/HeroDetail.vue` and notice the methods `cancelHero` and `saveHero` have no code in them. We're going to add code that fires when the user presses the cancel and save buttons next.

#### Step 2

When the user presses the cancel button, fire a custom event named `cancel` from the `cancelHero` method.


<course-item
  type="Hint"
  title="Need Help?">
  Use the `this.$emit()` function.

</course-item>

#### Step 3

When the user presses the save button, fire a custom event named `save` from the `saveHero` method. Pass the `clonedHero` as the with the event.


<course-item
  type="Hint"
  title="Need Help?">
  Use the `this.$emit()` function and pass the `clonedHero` as the second argument. Your code may look like the following.


```javascript
  cancelHero() {
    this.$emit('cancel');
  }
  saveHero() {
    this.$emit('save', this.clonedHero);
  }
```

</course-item>

#### Step 4

Open the `Heroes` view in `src/components/heroes.vue`. Next we're going to listen for those custom events we just created.

#### Step 5

When the user presses the cancel button in the `HeroDetail` component, we want to set the `Heroes` component's selected hero to `undefined` (de-selecting it).

Create a method in the `Heroes` component named `unselectHero` and have it unselected the selected hero.

#### Step 6

In the template of your `Heroes` component, bind the `HeroDetail`'s `cancel` event to fire the method you just created in the previous step to unselect the hero.


<course-item
  type="Hint"
  title="Need Help?">
  Your code may look like the following.


```html
<HeroDetail :hero="selectedHero" @cancel="unselectHero" v-if="isHeroSelected"/>
```

</course-item>

#### Step 7

When the user presses the save button in the `HeroDetail` component, we want to set the `Heroes` component's selected hero to `undefined` (de-selecting it) and replace the hero with the updated values.

Paste the following code that creates a method in the `Heroes` component named `saveHero`. Notice it unselects the `selectedHero`, first. Then it finds the hero that was just modified, replaces it in the array of heroes with the updated hero, and then clones the array to create a fresh list of heroes.


```javascript
  saveHero(hero: Hero) {
    this.selectedHero = {} as Hero;
    const index = this.heroes.findIndex((h) => h.id === hero.id);
    this.heroes.splice(index, 1, hero);
    this.heroes = [...this.heroes];
  }
```

#### Step 8

In the template of your `Heroes` component, bind the `HeroDetail`'s `save` event to fire the method you just created in the previous step.


<course-item
  type="Hint"
  title="Need Help?">
  Your code may look like the following.


```html
<HeroDetail
  :hero="selectedHero"
  @save="saveHero"
  @cancel="unselectHero"
  v-if="isHeroSelected"
/>
```

</course-item>

#### Step 9

Now use the running app and select a hero and edit that hero's values. Then press save. You should see the updated values appear in your hero list.

When you select a hero and edit their values, then press cancel, the changes you made are ignored.

#### Step 10

Stop the server by pressing `ctrl+c`. This lab is complete.