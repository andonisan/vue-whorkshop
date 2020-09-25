<template>
  <div class="form">
    <h1>This is an example form</h1>
    <form
      id="form"
      class="form"
      ref="form"
      @submit.prevent="handleSubmit"
      @keypress.enter.prevent
      @change="handleChange($event)"
      @invalid.capture.prevent="handleInvalid($event)"
    >
      <div>
        <label>
          Requerido:
           <i-input
            id="req"
            type="text"
            name="req"
            autocomplete="off"
            label="Requerido"
            v-model="formData.req"
            :required="true"
            :errorMessage="validationErrors.req"
            @input="change('req')"
            @blur="blur('req')"
          ></i-input>
        </label>
      </div>
      <div>
        <label>
          Patrón 3 letras mayúsculas:
          <!-- <input
            type="text"
            id="letters"
            name="letters"
            pattern="[A-Z]{3}"
            title="3 letras mayúsculas"
            required
            @input="change('letters')"
            @blur="blur('letters')"
          /> -->
        </label>
      </div>
           <div>
        <input type="submit" value="Cancel" @click="cancel" />
        <input type="submit" value="Submit" @click="submit" :disabled="!canSubmit" />
      </div>
    </form>
  </div>
</template>
<script lang="ts">
type RegisterFormFields = "req" | "letters";

export interface FormData {
  req: string;
  letters: string;
}

import { Component, Vue } from 'vue-property-decorator';
import IInput from "@/components/Input.vue";

@Component({
  components: {
    IInput
  }
})
export default class Form extends Vue {
  private formChanged = false;

  public formData: FormData = {
    req: "",
    letters: ""
  };

  private requiredFields: RegisterFormFields[] = ["req", "letters"];
  public validationErrors = {
    req: "",
    letters: "",
  };

  public errors: { [field: string]: string } = {};

  public get canSubmit(): boolean {
    debugger;

    if (!this.formChanged) {
      return false;
    }

    const errors = Object.values(this.validationErrors);
    const thereAreErrors = errors.some(e => e !== "");
    if (thereAreErrors) {
      return false;
    }

    return true;
  }

  private validate(field: RegisterFormFields) {
    debugger;
    if (this.requiredFields.indexOf(field) >= 0) {
      this.validationErrors[field] = this.formData[field] ? "" : "required";
      return;
    }
  }

  public change(field: RegisterFormFields) {
    this.formChanged = true;
    this.validate(field);
  }

  public blur(field: RegisterFormFields) {
    this.validate(field);
  }

  public handleSubmit(): void {
    const form: HTMLFormElement = this.$refs.form as HTMLFormElement;
    if (form.checkValidity()) {
      //this.$emit("save");
      console.log("save");
    } else {
      form.reportValidity();
    }
    console.log("errors", this.errors);
    // this.$emit("errors", this.errors);
  }

  public handleChange(event: Event): void {
    const element: HTMLFormElement = event.target as HTMLFormElement;
    this.errors = {
      ...this.errors,
      [element.name]: ""
    };

    element.checkValidity();

    //this.$emit("errors", this.errors);
    console.log("errors", this.errors);
  }

  public handleInvalid(event: Event): void {
    const element: HTMLFormElement = event.target as HTMLFormElement;

    element.setCustomValidity("");
    const errorMessage = element.getAttribute("data-error-message");
    const isInvalid = element.validationMessage !== "";

    if (isInvalid && element.value === "") {
      element.setCustomValidity("common.required");
    } else if (isInvalid && errorMessage && errorMessage !== "") {
      element.setCustomValidity(errorMessage);
    }

    this.errors = {
      ...this.errors,
      [element.name]: element.validationMessage
    };
    console.log("errors", this.errors);
    //this.$emit("errors", this.errors);
  }
}
</script>
