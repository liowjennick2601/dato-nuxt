<template>
  <div id="navbar" class="container">
    <div class="navbar-content">
      <div class="logo-container">
        <img class="logo" src="../../assets/images/logo/ecics-logo.png" />
      </div>

      <div class="nav-items-container">
        <div class="nav-item">
          <NuxtLink to="/products">Products</NuxtLink>
        </div>
        <div class="nav-item">
          <NuxtLink to="/products">About Us</NuxtLink>
        </div>
        <div class="nav-item">
          <NuxtLink to="/claims">Claims</NuxtLink>
        </div>
        <div class="nav-item">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
        <div class="nav-item button">
          <NuxtLink to="/contact" class="button">My Account</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="sass">
@import '../../assets/styles/global.sass'

#navbar
  font-family: 'Open Sans'
  font-size: 20px
  font-weight: 600
  .navbar-content
    display: flex
    align-items: center
    .logo-container
      flex: 1
      .logo
    .nav-items-container
      display: flex
      align-items: center
      .nav-item
        padding: 0 30px
        &.button
          color: $primary-blue
          border: 2px solid $primary-blue
          padding: 10px 20px
          border-radius: 40px
          &:hover
            background-color: $primary-blue
            color: white
</style>