<template>
  <div class="form-input">
    <label class="form-input__label" :for="name">{{ label }}</label>
    <textarea
      v-if="!loading && type === 'textarea'"
      :id="id"
      :class="{ 'form-input__input': true, 'form-input__input--textarea': true, 'form-input__input--error': !!errorMessage }"
      :name="name"
      :value="value"
      :required="required"
      :maxlength="maxlength"
      :minlength="minlength"
      :disabled="disabled"
      @input="update($event)"
      @blur="blur($event)"
      @change="change($event)">
    </textarea>
    <input
      v-if="!loading && type !== 'textarea' && type !== 'date'"
      :type="type"
      :id="id"
      :class="{ 'form-input__input': true, 'form-input__input--error': !!errorMessage }"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      :required="required"
      :maxlength="maxlength"
      :minlength="minlength"
      :pattern="pattern"
      :disabled="disabled"
      :autocomplete="autocomplete"
      @input="update($event)"
      @blur="blur($event)"
      @change="change($event)"
    />
    <p class="form-input__error">
      <span v-if="errorMessage">{{ errorMessage }}</span>
    </p>
    <i-icon v-if="errorMessage" name="warning" class="form-input__warning" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
})
export default class FormInput extends Vue {
  @Prop({ required: false, default: 'text' })
  public type!: string;

  @Prop({ required: true })
  public id!: string;

  @Prop({ required: true })
  public label!: string;

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

  @Prop({ required: false, default: false })
  public loading!: boolean;

  @Prop({ required: false, default: null })
  public minDate!: Date | null;

  @Prop({ required: false, default: null })
  public maxDate!: Date | null;

  public inputProps: any = {};
  public inputEvents: any = {};

  public update(event: Event): void {
    const element: HTMLFormElement = event.target as HTMLFormElement;
    this.$emit('input', element.value.trim());
  }

  public updateDate(date: Date): void {
    this.$emit('input', date);
  }

  public blur(event: Event): void {
    this.$emit('blur', event);
  }

  public change(event: Event): void {
    this.$emit('change', event);
  }
}
</script>

<style lang="scss" scoped>
.form-input {
  width: 100%;
  position: relative;

  &__label {
    color: #A2A2A5;
    font-family: Manrope;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 20px;
    margin-bottom: 5px;
    width: 100%;
    display: block;
  }

  &__input {
    height: var(--size-l);
    width: 100%;
    border-radius: 28px;
    padding: 1rem;
    font-size: 19px;
    color: var(--color-input);
    border: 1px solid transparent;
    background-color: var(--color-white);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.03);
    outline: none;

    &:active,
    &:focus {
      border: 1px solid var(--color-border-button);
    }

    &:disabled {
      background-color: #E4E4E0;
      border: 1px solid #E4E4E0;
      color: rgba(43,44,47,0.5);
    }

    &--textarea {
      min-height: 150px;
    }

    &--error {
      border-color: var(--color-error-border);
      padding-right: 30px;

      &:active,
      &:focus {
        border-color: var(--color-error-border);
      }
    }
  }

  &__error {
    color: var(--color-error);
    height: 20px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 20px;
    margin: 0 0 5px;
  }

  &__warning {
    position: absolute;
    top: 45px;
    right: 16px;
  }
}
</style>
