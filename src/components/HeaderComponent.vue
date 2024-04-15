<template>
    <header>
        <div class="d-flex align-items-center">
            <div class="logo">
                <img src="https://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es"
                    alt="">
            </div>
            <div>
                <h1>Yu-Gi-Oh API</h1>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
header {
    background-color: white;
}

.logo img {
    max-width: 200px;
    padding: 10px;
}
</style>