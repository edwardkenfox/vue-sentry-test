<template>
  <div class="image-loader">
    <input type="file" id="file" accept="image/*">
  </div>
</template>

<script>
export default {
  methods: {
    fileInput: function() {
      return document.getElementById("file");
    },
    loadImage: function(event) {
      const image = document.createElement("img");

      image.height = "128";
      image.width = "128";
      image.alt = "image blocked!";
      image.src = window.URL.createObjectURL(event.target.files[0]);

      document.body.appendChild(image);
    },
  },

  mounted: function() {
    window.onload = () => {
      this.fileInput().onchange = this.loadImage;
    }
  }
}
</script>
