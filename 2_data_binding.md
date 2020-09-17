

### Exercise 1: Display and change model values in a component

In this exercise you'll display and change model values in the component.



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

Create a hero.ts model in the `model folder`. Give the hero properties with values for id, name and description.


```typescript
export interface Hero {
    id: number,
    name: string,
    description: string
}
```

#### Step 5

create the _Heroes_ view in `src/components/heroes.vue`


```html
<template>
  <div>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class  extends Vue {
    
  }
</script>

<style scoped>

</style>
```

#### Step 6

Create a `<p>` tag below the `<h2>`, and say hello to your hero. Then display the id and description of the hero as shown below.


```html
<p>Hello {{ hero.name }}.</p>
<p>Your id is {{ hero.id }} and your description is "{{ hero.description }}"</p>
```

#### Step 7

Create an `<input>` element of type "text" above the `<p>` tags you just created. Bind your hero's name to the input element using 2-way data-binding.


```html
<input v-model="hero.name" type="text">
```

#### Step 8

In the browser, enter a different name in the input element. Notice that when you type, the name of your hero changes in all places it is data-bound.


### Exercise 2: Handle events

In this exercise you'll handle events from user input



#### Step 1

Run the app using the command `npm run serve`. Then browse to [http://localhost:8080](http://localhost:8080)

#### Step 2

Open the _Heroes_ view in `src/components/heroes.vue`

#### Step 3

Create a method in the component's code named `reverseName()`. Make the code reverse your hero's name.


```typescript

  public reverseName(): void {
    this.hero.name = [...this.hero.name].reverse().join("");
  }

```

#### Step 4

Create a button inside your template. When you click the button make it call the function you just created. This should reverse the name of your hero.


```html
<button @click="reverseName">Reverse</button>
```


### Exercise 3: Key Modifiers

In this exercise you'll handle events from user input with key modifiers



#### Step 1

Run the app using the command `npm run serve`. Then browse to [http://localhost:8080](http://localhost:8080)

#### Step 2

Open the _Heroes_ view in `src/components/heroes.vue`

#### Step 3

Create a method in the component's code named `upperCaseTheName()`. Make the code change your hero's name to all uppercase letters.


```typescript
   public reverseName(): void {
    this.hero.name = [...this.hero.name].reverse().join('');
  }

  public upperCaseTheName(): void  {
    this.hero.name = this.hero.name.toUpperCase();
  }
}
```

#### Step 4

When the user presses the ENTER key inside of your input element, your hero's name should become all uppercase. Add the modifier to your input element and have it call your new function.


```html
<input v-model="hero.name" type="text" @keyup.enter="upperCaseTheName">
```
