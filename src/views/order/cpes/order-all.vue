<template>
    <div class="order-all">
        <order-item :orderList="orderStore.orderAllDate" />
    </div>
</template>

<script setup>
import useOrderStore from "@/stores/modules/order"
import OrderItem from "@/components/order-iitem/order-item.vue";
const orderStore = useOrderStore()
orderStore.getOrderAllAction()


</script>

<style lang="less" scoped>

</style>