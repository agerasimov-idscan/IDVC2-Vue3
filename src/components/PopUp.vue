<template>
    <transition name="fade">
        <div v-if="isVisible" class="popup-overlay">
            <div class="popup-content">
                <button class="close-button" @click="close">Close</button>
                <slot></slot>
                <div id="videoCapturingEl"></div>
            </div>
        </div>
    </transition>
</template>

<script setup>
defineProps(['isVisible']);
const emit = defineEmits(['update:isVisible']);

function close() {
    emit('update:isVisible', false);
}
</script>

<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 50vw;
}

.close-button {
    align-self: end;
}

</style>
