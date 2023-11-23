<template>
    <div>
        <NavComp/>
        <h3>Наши контакты</h3>
       <div id="map"></div>
    </div>
</template>

<script>
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
      ({key: "AIzaSyASbYCiiPkqs20wQVXgCYqZB8v9KlIO8R4", v: "beta"});
import NavComp from '@/components/NavComp.vue';

export default {
    name: 'DiplomContactView',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { NavComp }
};
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 59.916, lng: 30.326 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
    
  });  
  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
</script>

<style lang="scss" scoped>
#map{
    width: 100%;
    height: 400px;
    border-radius: 20px;
    border: 1px solid #141618;
    box-shadow: 0px 10px 20px 2px #4f4f54;
}
</style>