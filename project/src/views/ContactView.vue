<template>
  <div>
    <div class="title">{{ translate("contactTitle") }}</div>
    <div class="container__map">
      <div id="map"></div>
      <ul class="right__part">
        <li
          v-for="item in addresses"
          :key="item.id"
          class="right__part__item"
          @click="showAddressOnMap(item.id)"
        >
          {{ translate(item.address) }}<br />
          {{ translate(item.worksTime) }}<br />
          {{ item.phone }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import translateMixin from "@/mixins/translateMixin";

export default {
  data() {
    return {
      apiKey: process.env.VUE_APP_API_KEY,
      addresses: [
        {
          id: 1,
          address: "address1",
          worksTime: "worksTime1",
          phone: "8(812)123-45-56",
        },
        {
          id: 2,
          address: "address2",
          worksTime: "worksTime2",
          phone: "8(812)789-45-56",
        },
      ],
      map: null,
      markers: [],
      infowindow: null,
      contentString: "",
    };
  },

  name: "DiplomContactView",

  created() {
    this.initMap();
  },

  mixins: [translateMixin],

  methods: {
    async initMap() {
      try {
        if (!this.apiKey) {
          console.error("API ключ не найден!");
          return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places,geometry&callback=initMap`;
        script.async = true;
        document.head.appendChild(script);

        window.initMap = async () => {
          const { Map } = await google.maps.importLibrary("maps");
          const centerMap = new google.maps.LatLng(59.919, 30.339);

          this.map = new Map(document.getElementById("map"), {
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
              position = { lat: 59.92, lng: 30.352 };
            }
            if (address.id === 2) {
              position = { lat: 59.91627, lng: 30.32677 };
            }

            const marker = new google.maps.Marker({
              map: this.map,
              position: position,
              title: "Стоматология",
            });

            this.markers.push({
              marker: marker,
              addressId: address.id,
            });

            marker.addListener("click", () => {
              const translatedAddress = this.translate(address.address);
              const translatedWorksTime = this.translate(address.worksTime);
              const content = `<p>${translatedAddress}</p><p>${translatedWorksTime}</p><p>${address.phone}</p>`;
              this.infowindow.setContent(content);
              this.infowindow.open({
                anchor: marker,
                map: this.map,
              });
            });
          });
        };
      } catch (error) {
        console.error("Ошибка инициализации карты:", error.message);
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
            map: this.map,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/_vars.scss";
</style>
