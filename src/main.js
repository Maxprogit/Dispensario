import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import "primeflex/primeflex.css";
import Button from 'primevue/button';

// Quasar
import { Quasar } from 'quasar'; 
import "quasar/dist/quasar.css";
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// Tailwind (solo utilidades, sin preflight — ver comentario en el archivo)
import './assets/tailwind-utilities.css';

// Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// FontAwesome
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faTwitter, faPinterest, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faHandPointRight, faStore, faBagShopping, faLock, faLeaf, faJoint, faVial, faCookieBite, faCircleInfo, faJar, faCrown } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebook, faInstagram, faTwitter, faPinterest, faWhatsapp, faHouse, faHandPointRight, faStore, faBagShopping, faLock, faLeaf, faJoint, faVial, faCookieBite, faCircleInfo, faJar, faCrown);

// Antes no había tema configurado: Vuetify caía en su tema claro por
// defecto, por eso los campos del formulario (labels, bordes) se veían
// oscuros/casi ilegibles sobre el fondo oscuro del sitio. Este tema
// reutiliza exactamente los mismos colores que ya existían en el CSS
// del proyecto (#111111, #1a1a1a, #4caf50) — no se introduce ningún
// color nuevo, solo se le informa a Vuetify cuáles ya se estaban usando.
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi },
    },
    theme: {
        defaultTheme: 'dispensarioDark',
        themes: {
            dispensarioDark: {
                dark: true,
                colors: {
                    background: '#111111',
                    surface: '#1a1a1a',
                    primary: '#4caf50',
                    secondary: '#2e7d32',
                },
            },
        },
    },
});

const app = createApp(App);

// Use PrimeVue
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

// Use Vuetify
app.use(vuetify);

// Use Quasar
app.use(Quasar, {
    plugins: {},
})

// Use ElementPlus
app.use(ElementPlus);

// Use FontAwesome
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
