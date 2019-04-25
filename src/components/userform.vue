<template>
  <div>
    <b-form>
      <b-alert show variant="danger">
        <b-card title="Design Drink">
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-input id="input-1" class="mr-sm-2"  v-model="form.drinkName"  required
                  placeholder="Drink Name">
                </b-form-input>
              <b-form-group id="input-group-3" label="Choose your dairy" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.food"
                  :options="foods"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-3" label="Decide Flavors" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.flavors"
                  :options="flavors"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group label="Which category will this drink come under?">
                <b-form-radio v-model="form.drinkType" value="COFFEE">Coffee</b-form-radio>
                <b-form-radio v-model="form.drinkType" value="TEA">Tea</b-form-radio>
              </b-form-group>
              <div class="mt-3">You chose: <strong>{{ form.drinkType }}</strong></div>

              <router-link type="submit" variant="primary" to="/brew">Submit</router-link>

            </b-form>
          </div>
        </b-card>
      </b-alert>
    </b-form>
  </div>
</template>

<script>

    export default {
      data() {
        return {
          form: {
            drinkName: '',
            food: null,
            flavors: null,
            drinkType: ''
          },
          foods: [{ text: 'Select One', value: null }, 'Whole', '2%', 'Almond', 'Coconut'],
          flavors: [{ text: 'Select One', value: null }, 'Vanilla', 'Strawberry', 'Cinnamon', 'Mint'],
          show: true
        }
      },
      methods: {
        onSubmit(evt) {
          evt.preventDefault();
          alert(JSON.stringify(this.form))
        },
        onReset(evt) {
          evt.preventDefault();
          // Reset our form values
          this.form.email = '';
          this.form.name = '';
          this.form.food = null;
          this.form.flavors = null;
        }
      }
    }
</script>

<style scoped>

</style>
