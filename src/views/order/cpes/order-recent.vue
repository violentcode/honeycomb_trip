<template>
    <div class="order-recent">
        <order-item :orderList="orderStore.orderRecentDate" />
    </div>
</template>

<script setup>
import useOrderStore from "@/stores/modules/order"
import OrderItem from "@/components/order-iitem/order-item.vue";
const orderStore = useOrderStore()
orderStore.getOrderRecentAction()


</script>

<style lang="less" scoped>

</style>