<template>
  <nav class="wrapper navbar navbar-expand navbar-dark bg-dark w-100">
    <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'contactbook' }" class="nav-link">
          Danh bạ
          <i class="fas fa-address-book"></i>
        </router-link>
      </li>
    </div>
  </nav>
</template>

<style scoped>
.wrapper {
  margin-top: -2rem;
}
</style>