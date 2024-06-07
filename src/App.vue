<template>
    <div>
        <button @click="openPopup">Open</button>
        <PopUp :isVisible="isPopupVisible" @update:isVisible="handleUpdate">
        </PopUp>
    </div>
</template>

<script setup>
import IDVC from '@idscan/idvc2'
import {getDefaultWebLibConfiguration} from "./Lib.ts";
import {ref} from "vue";
import PopUp from "./components/PopUp.vue";

const isPopupVisible = ref(false);

function openPopup() {
    isPopupVisible.value = true;
    setTimeout(() => {
        const config = getDefaultWebLibConfiguration();
        const widget = new IDVC(config);
        window.IDVC = widget;

        console.log("IDVC initialized");
    }, 0);
}

function handleUpdate(value) {
    isPopupVisible.value = value;
}
</script>

<style scoped>

</style>
