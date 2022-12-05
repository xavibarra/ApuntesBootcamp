<template>
<section>
    <hr>
    <h1 class="titulo">FORMULARIO</h1>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div id="user-input-formName-data" class="formQuestion">
                <label for="name" class="formLabel">Enter name</label>
                <input
                    type="text"
                    autocomplete="off"
                    id="name"
                    v-model="formValues.formName"
                />
            </div>
            <div id="user-input-formEmail-data" class="formQuestion">
                <label for="email" class="formLabel">Enter email</label>
                <input
                    type="email"
                    autocomplete="off"
                    id="email"
                    v-model="formValues.formEmail"
                />
            </div>
            <div id="user-input-artist-data" class="formQuestion">
                <label for="artist" class="formLabel">Favourite artist</label>
                <select name="artist" id="artist" v-model="formValues.artist">
                    <option>Select your favourite artist:</option>
                    <option value="Dua Lipa">Dua Lipa</option>
                    <option value="Gorillaz">Gorillaz</option>
                    <option value="Interpol">Interpol</option>
                    <option value="Lorde">Lorde</option>
                    <option value="the Strokes">The Strokes</option>
                </select>
            </div>
            <div id="consume" class="formQuestion">
                <label for="consume" class="formLabel">Do you consume alcohol or drugs?</label>
                <input
                    type="checkbox"
                    id="consume"
                    v-model="formValues.consume"
                />
            </div>
            <div id="black" class="formQuestion">
                <label for="black" class="formLabel">Are you going to come dressed in black?</label>
                <input
                    type="checkbox"
                    id="black"
                    v-model="formValues.black"
                />
            </div>
            <div id="age" class="formQuestion">
                <label for="age" class="formLabel">Are you over 21 years old?</label>
                <input
                    type="checkbox"
                    id="age"
                    v-model="formValues.age"
                />
            </div>
            <div id="group" class="formQuestion">
                <label for="group" class="formLabel">Are you coming with a group of more than 2 people?</label>
                <input
                    type="checkbox"
                    id="group"
                    v-model="formValues.group"
                />
            </div>
            <input type="submit" value="Submit Form" class="submitButton"/>
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
        We succesfully received your job application form. 
        We will get in contact with you in up to 7 days. 
        Thanks for applying to...
        Name: ${formValues.formName}
        Email: ${formValues.formEmail}
        Favourite Artist: ${formValues.artist}
        Do you consume alcohol or drugs?: ${formValues.consume ? "Yes":"No"}
        Are you going to come dressed in black?: ${formValues.black ? "Yes":"No"}
        Are you over 21 years old?: ${formValues.age ? "Yes":"No"}
        Are you coming with a group of more than 2 people?: ${formValues.group ? "Yes":"No"}
        `);
};
</script>

<style scoped>
.titulo{
    text-align: center;
    background: wheat;
}
.container{
    text-align: center;
}

.formQuestion{
    margin: 10px;
   
}
.formLabel{
    margin-right: 5px;
}
.submitButton{
    width: 150px;
    color: white;
    background: black;
    border-radius: 10px;
}
.submitButton:hover{
    color: black;
    background: white;
}
form{
    background: whitesmoke;
    padding: 20px;
}


</style>