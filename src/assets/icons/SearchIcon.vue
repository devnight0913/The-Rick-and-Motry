<script setup>
const props = defineProps({
  width: Number,
  height: Number,
  fillColor: String,
})
const width = window.screen.width < 2700 ? props.width : props.width*2;
const height = window.screen.width < 2700 ? props.height : props.height*2;
</script>
<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_0_51)">
      <path
        d="M33.5602 23.4035L29.8616 19.6461C30.587 18.4754 31.008 17.0916 31.008 15.6066C31.008 11.4054 27.6482 8 23.5039 8C19.3595 8 16 11.4054 16 15.6066C16 19.8081 19.3594 23.2131 23.5039 23.2131C25.0981 23.2131 26.5748 22.7079 27.7899 21.8494L31.4377 25.5553C31.7308 25.8521 32.1151 26 32.499 26C32.8833 26 33.2671 25.8521 33.5607 25.5553C34.1465 24.9608 34.1465 23.9979 33.5602 23.4035ZM23.5039 20.7487C20.7027 20.7487 18.4316 18.4467 18.4316 15.607C18.4316 12.7672 20.7027 10.4651 23.5039 10.4651C26.3052 10.4651 28.5761 12.7672 28.5761 15.607C28.5761 18.4467 26.3052 20.7487 23.5039 20.7487Z"
        :fill="props.fillColor"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_0_51"
        x="0"
        y="0"
        width="50"
        height="50"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="8" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0747521 0 0 0 0 0.0717708 0 0 0 0 0.220833 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_0_51"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_0_51"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>
