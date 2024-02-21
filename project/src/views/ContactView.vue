<template>
  <div>
    <!-- <NavComp /> -->
    <div class="title">Наши контакты</div>
    <div class="container">

      <div id="map"></div>
      <ul class="right__part">
        <li v-for="item in addresses" :key="item.id" 
        class="right__part__item"
        @click="showAddressOnMap(item.id)"
        >
          {{ item.address }}<br>
          {{ item.worksTime }}<br>
          {{  item.phone }}
        </li>
      </ul>

    </div>

  </div>
</template>

<script>

(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
  ({ key: "AIzaSyASbYCiiPkqs20wQVXgCYqZB8v9KlIO8R4", v: "beta" });

// import NavComp from '@/components/NavComp.vue';


export default {
  data() {
    return {
      addresses: [
        {
          id: 1,
          address: 'ул. Константина Заслонова, 2',
          worksTime: 'пн-пт: 9:00 - 20:00, сб-вс: по записи',
          phone: '8(812)123-45-56',
        },
        {
          id: 2,
          address: 'Клинский проспект, 5/17',
          worksTime: 'пн-пт: 9:00 - 20:00, \n сб-вс: по записи',
          phone: '8(812)789-45-56',
        }
      ],
      map: null,
      markers: [],
      infowindow: null,
      contentString: '',
    };
  },
  name: 'DiplomContactView',
  
  // components: { NavComp },
  created() {
    this.initMap();
  },
  methods: {
    async initMap() {
      try {
        let map;
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
        let centerMap = new google.maps.LatLng(59.919, 30.339);

        map = new Map(document.getElementById("map"), {
          zoom: 13,
          center: centerMap,
          mapId: "DEMO_MAP_ID",
        });

        this.infowindow = new google.maps.InfoWindow({
          ariaLabel: "Address Info",
        });

        this.addresses.forEach((address) => {
          let position;
          if (address.id === 1) {
            position = { lat: 59.920, lng: 30.352 };
          } if (address.id === 2) {
            position = { lat: 59.91627, lng: 30.32677 };
          }

          const marker = new AdvancedMarkerView({
            map: map,
            position: position,
            title: 'Стоматология',
          });

          this.markers.push({
            marker: marker,
            addressId: address.id,
          });

          marker.addListener("click", () => {           
            this.infowindow.setContent(`<p>${address.address}</p><p>${address.worksTime}</p><p>${address.phone}</p>`);
            this.infowindow.open({
              anchor: marker,
              map,
            
        });

          });
        });
      } catch (error) {
        console.error('Ошибка инициализации карты:', error.message);
      }
    },
    showAddressOnMap(addressId) {
      const marker = this.markers.find((m) => m.addressId === addressId);
      if (marker) {
        const address = this.addresses.find((a) => a.id === addressId);
        if (address) {
          this.contentString = `<p>${address.address}</p><p>${address.worksTime}</p><p>${address.phone}</p>`;
          this.infowindow.setContent(this.contentString);
          this.infowindow.open({
            anchor: marker.marker,
            map,
          });
        }
      }
    }
  }  
};


</script>

<style lang="scss" scoped>
@import '../assets/style/_vars.scss';

.container {
  display: flex;
  justify-content: space-around;

}

.right__part {
  width: 30%;
  padding-top: 30px;
  gap: 25px;
  color: $colorText;
  font-size: 20px;

  &__item {
    margin-bottom: 20px;
  }
}

#map {
  width: 60%;
  height: 400px;
  border-radius: 20px;
  border: 1px solid #141618;
}
.right__part__item:hover {
    color: 	#FFC840;
    cursor: pointer;   
  
}
</style>