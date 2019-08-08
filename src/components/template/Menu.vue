<template>
    <nav class="header container-fluid">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-6">
                <div class="row d-flex justify-content-center align-items-center">
                    <router-link to="/" class="logo col">Logo</router-link>
                    <router-link to="/" class="item-menu col">Populares</router-link>
                    <router-link to="/BemAvaliados" class="item-menu col">Mais bem avaliados</router-link>
                    <router-link to="/ProximasEstreias" class="item-menu col">Próximas estreias</router-link>
                    <router-link to="/EmCartaz" class="item-menu col">Em cartaz</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>
