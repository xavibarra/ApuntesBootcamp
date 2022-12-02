<template>
<section>
    <hr>
    <h1>FORMULARIO</h1>
    <div>
        <form @submit.prevent="submitForm">
            <div id="user-input-formName-data">
                <label for="name">Enter Name</label>
                <input
                    type="text"
                    autocomplete="off"
                    id="name"
                    v-model="formValues.formName"
                />
            </div>
            <div id="user-input-formEmail-data">
                <label for="email">Enter email</label>
                <input
                    type="email"
                    autocomplete="off"
                    id="email"
                    v-model="formValues.formEmail"
                />
            </div>
            <div id="user-input-artist-data">
                <label for="artist">Favourite artist</label>
                <select name="artist" id="artist" v-model="formValues.artist">
                    <option>Select your favourite artist:</option>
                    <option value="Dua Lipa">Dua Lipa</option>
                    <option value="Gorillaz">Gorillaz</option>
                    <option value="Interpol">Interpol</option>
                    <option value="Lorde">Lorde</option>
                    <option value="the Strokes">The Strokes</option>
                </select>
            </div>
            <div id="consume">
                <label for="consume">Do you consume alcohol or drugs?</label>
                <input
                    type="checkbox"
                    id="consume"
                    v-model="formValues.consume"
                />
            </div>
            <div id="black">
                <label for="black">Are you going to come dressed in black?</label>
                <input
                    type="checkbox"
                    id="black"
                    v-model="formValues.black"
                />
            </div>
            <div id="age">
                <label for="age">Are you over 21 years old?</label>
                <input
                    type="checkbox"
                    id="age"
                    v-model="formValues.age"
                />
            </div>
            <div id="group">
                <label for="group">Are you coming with a group of more than 2 people?</label>
                <input
                    type="checkbox"
                    id="group"
                    v-model="formValues.group"
                />
            </div>
            <input type="submit" value="Submit Form" />
        </form>

    </div>
</section>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
 /* Montamos un formulario para ir al primavera sound. Vamos a incluirle un input type text para vuestro nombre y un input type email para el email. Vamos incorporar un select que nos permita escoger entre cinco artistas para ver en el festival. Después hacemos inputs separados que reciban propiedades booleanicas y que respondan a estas preguntas:
    nombre   
    email
    select entre 5 artistas
    Consumes alcohol o drogas? (si/no)
    Vas a venir vestid@ de negro? (si/no)
    Tienes más de 21 años? (si/no)
    Vienes con un grupo de más de 2 personas? (si/no)
    Por ultimo hacemos input textarea para sugerencias de mejora del festival.
Cuando se envíe el formulario imprimiremos la info que se ha mandado con una alerta en el browser. */
const formValues = reactive({
    formName: "",
    formEmail: "",
    artist: "",
    consume: false,
    black: false,
    age: false,
    group: false
});
const submitForm = () => {
    //   console.log("Form Values", formValues);
    alert(`
        !!SUCCESS!!
        We succesfully received your job application form. We will get in contact with you in up to 7 days. Thanks for applying to...
        Name: ${formValues.formName}
        Email: ${formValues.formEmail}
        Artist: ${formValues.artist}
        consume: ${formValues.consume}
        black: ${formValues.black}
        age: ${formValues.age}
        group: ${formValues.group}
        `);
};
</script>

<style>


</style>