import en from '@/translatorService/en.js';
import ru from '@/translatorService/ru.js';


export default {
    data() {
      return {
       
      };
    },
    mixins: [en, ru],
    methods: {
        translate(key) {            
            return this[this.$store.getters.location][key]
        }
    }
  };
  
  // return this[this.$store.state.location][key]