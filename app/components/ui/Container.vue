<template>
    <div :class="cn('max-w-7xl mxauto px5 sm-px10 lg-px5', props.class ??'')">
        <slot/>
    </div>
</template>
<script lang="ts" setup>
import { cn } from '~/lib/utils';
const props = defineProps<{ class?:string }>()
</script>