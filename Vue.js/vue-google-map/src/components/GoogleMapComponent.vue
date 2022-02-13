<template>
  <div>
    <h1>Google Map</h1>
    <div ref="map" style="height: 500px; width: 800px; margin: 0 auto"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: 0,
      longtitude: 0,
      jplatlng: { lat: 35.6825, lng: 139.7528 },
    };
  },
  methods: {
    getLocation: async function () {
      if (navigator.geolocation) {
        const options = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(
          this.success,
          this.error,
          options
        );
      }
    },
    success(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);
      console.log("成功");
    },
    error(error) {
      switch (error) {
        case 1:
          alert("位置情報の利用が許可されていません");
          break;
        case 2:
          alert("現在位置が取得できませんでした");
          break;
        case 3:
          alert("タイムアウトになりました");
          break;
        default:
          alert("現在位置が取得できませんでした");
          break;
      }
    },
  },
  async created() {
    await this.getLocation();
  },
  mounted() {
    let timer = setInterval(() => {
      if (window.google) {
        clearInterval(timer);
        const map = new window.google.maps.Map(this.$refs.map, {
          center: { lat: Number(this.latitude), lng: Number(this.longitude) },
          zoom: 14,
        });
        new window.google.maps.Marker({
          position: { lat: this.latitude, lng: this.longitude },
          map,
        });
      }
    }, 3000);
  },
};
</script>
