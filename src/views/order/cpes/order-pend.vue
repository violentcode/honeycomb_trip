<template>
    <div class="order-pend">
        <order-item :orderList="orderStore.orderPendDate" />
    </div>
</template>

<script setup>
import useOrderStore from "@/stores/modules/order"
import OrderItem from "@/components/order-iitem/order-item.vue";
const orderStore = useOrderStore()
orderStore.getOrderPendAction()

</script>

<style lang="less" scoped>

</style>