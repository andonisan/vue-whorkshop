<template>
  <div class="form-control">
    <div class="input-wrapper">
      <input
        :type="visibility"
        :id="id"
        :class="{ 'input': true, 'input--error': error, 'input--with-icon': icon, 'input--password': isPassword }"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        :required="required"
        :maxlength="maxlength"
        :minlength="minlength"
        :pattern="pattern"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :data-error-message="errorMessage"
        @input="update($event)"
      />
      <span v-if="isPassword" @click="tooglePassword()">
        <i-icon :name="passwordIcon" class="append-icon pointer"></i-icon>
      </span>
    </div>
    <p v-if="error" class="error">
      <i class="uil uil-info-circle" />
      {{ error }}
    </p>

    <p v-if="warning" class="warning">
      <i class="uil uil-exclamation-triangle"></i>
      {{ warning }}
    </p>
  </div>
</template>

<script lang="ts">
import {  Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class Input extends Vue {
  get visibility(): string {
    if (this.isPassword) {
      return this.hidePassword ? 'password' : 'text';
    }
    return this.type;
  }

  get passwordIcon(): string {
    return this.visibility === 'password' ? 'eye-closed' : 'eye-opened';
  }

  @Prop({ required: true })
  public id!: string;

  @Prop({ required: false, default: '' })
  public name!: string;

  @Prop({ required: false, default: '' })
  public value!: string;

  @Prop({ required: false })
  public error!: string;

  @Prop({ required: false })
  public warning!: string;

  @Prop({ required: false, default: false })
  public required!: boolean;

  @Prop({ required: false, default: 'off' })
  public autocomplete!: string;

  @Prop({ required: false, default: 250 })
  public maxlength!: number;

  @Prop({ required: false, default: 0 })
  public minlength!: number;

  @Prop({ required: false, default: false })
  public disabled!: boolean;

  @Prop({ required: false, default: '' })
  public placeholder!: string;

  @Prop({ required: false, default: '' })
  public pattern: string = '';

  @Prop({ required: false, default: '' })
  public errorMessage!: string;

  @Prop({ required: false, default: '' })
  public icon!: string;
  private isPassword: boolean = false;

  @Prop({ required: false, default: 'text' })
  private type!: string;

  private hidePassword = true;

  public update(event: Event): void {
    const element: HTMLFormElement = event.target as HTMLFormElement;
    this.$emit('input', element.value.trim());
  }

  public mounted() {
    this.isPassword = this.type === 'password';
  }

  public tooglePassword(): void {
    this.hidePassword = !this.hidePassword;
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper,
.form-control {
  width: 100%;
  position: relative;
}
.input-wrapper {
  color: var(--color-input-icon);

  &:focus,
  &:hover,
  &:active {
    color: var(--color-input-icon-hover);
  }
}
.form-control {
  margin-bottom: var(--space-xs);
}

.input {
  height: var(--size-l);
  width: 100%;
  border-radius: 28px;
  border: 1px solid transparent;
  padding: 1rem;
  font-size: 19px;
  color: var(--color-input);
  box-sizing: border-box;

  ::-webkit-input-placeholder {
    color: var(--color-input-icon) !important;
  }

  ::-moz-placeholder {
    color: var(--color-input-icon) !important;
  }

  :-ms-input-placeholder {
    color: var(--color-input-icon) !important;
  }

  :-moz-placeholder {
    color: var(--color-input-icon) !important;
  }

  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.03);
  background-color: var(--color-white);

  &:focus,
  &:hover {
    border: 1px solid var(--color-border-button);
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: var(--color-disabled);
  }

  &--with-icon {
    padding-left: 60px;
  }

  &--password {
    padding-right: 60px;
  }
}

.prepend-icon {
  position: absolute;
  left: 28px;
  top: 15px;
}

.append-icon {
  position: absolute;
  right: 28px;
  top: 15px;
}
</style>
