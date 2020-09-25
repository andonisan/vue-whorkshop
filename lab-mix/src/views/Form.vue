<template>
  <div class="container">
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
          />-->
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

import { Component, Vue } from "vue-property-decorator";
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
    letters: ""
  };

  public errors: { [field: string]: string } = {};

  public get canSubmit(): boolean {
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
    console.log("validate");
    if (this.requiredFields.indexOf(field) >= 0) {
      this.validationErrors[field] = this.formData[field]
        ? ""
        : this.$tc("common.required");
      return;
    }
  }

  public change(field: RegisterFormFields) {
    console.log("change");
    this.formChanged = true;
    this.validate(field);
  }

  public blur(field: RegisterFormFields) {
    console.log("blur");
    this.validate(field);
  }

  public handleSubmit(): void {
    console.log("handleSubmit");

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
    console.log("handleChange");
    const element: HTMLFormElement = event.target as HTMLFormElement;
    this.errors = {
      ...this.errors,
      [element.name]: ""
    };

    element.checkValidity();

    //this.$emit("errors", this.errors);
    //console.log("errors", this.errors);
  }

  public handleInvalid(event: Event): void {
    const element: HTMLFormElement = event.target as HTMLFormElement;

    element.setCustomValidity("");
    const errorMessage = element.getAttribute("data-error-message");
    const isInvalid = element.validationMessage !== "";

    if (isInvalid && element.value === "") {
      element.setCustomValidity(this.$tc("common.required"));
    } else if (isInvalid && errorMessage && errorMessage !== "") {
      element.setCustomValidity(this.$tc(errorMessage));
    }

    this.errors = {
      ...this.errors,
      [element.name]: element.validationMessage
    };
    console.log("errors", this.errors);
    //this.$emit("errors", this.errors);
  }

  public submit() {
    console.log("submit");
  }

  public cancel() {
    console.log("cancel");
  }
}
</script>
<style lang="scss" scoped>
.form {
  flex-grow: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}
</style>