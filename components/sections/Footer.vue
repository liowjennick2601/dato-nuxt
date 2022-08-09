<template>
  <div id="footer" class="section">
    <div class="container">
      <div class="column">
        <img class="logo" src="../../assets/images/logo/ecics-logo.png" />
        <div class="address-container">
          <p>10 Eunos Road 8</p>
          <p>#09-04A Singapore Post Centre</p>
          <p>Singapore 408600</p>
        </div>
      </div>

      <div class="column">
        <h5>Company</h5>
        <NuxtLink to="/">About us</NuxtLink>
        <NuxtLink to="/">Blog</NuxtLink>
        <NuxtLink to="/">Contact</NuxtLink>
        <NuxtLink to="/">FAQ</NuxtLink>
      </div>

      <div class="column">
        <h5>Products</h5>
        <NuxtLink to="/">Maid</NuxtLink>
        <NuxtLink to="/">Medical</NuxtLink>
        <NuxtLink to="/">Motor</NuxtLink>
        <NuxtLink to="/">Travel</NuxtLink>
        <NuxtLink to="/">Home &amp; Fire</NuxtLink>
      </div>

      <div class="column">
        <h5>Legal</h5>
        <NuxtLink to="/">Privacy Policy</NuxtLink>
        <NuxtLink to="/">Terms &amp; Conditions</NuxtLink>
      </div>

      <div class="column">
        <h4>Join our newsletter!</h4>
        <div class="newsletter-form-container">
          <input type="text" />
          <div class="subscribe-button">Subscribe</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="sass">
@import '../../assets/styles/global.sass'

#footer
  background-color: #212121
  color: #FFFFFF
  .container
    display: flex
    .column
      &:nth-child(1)
        flex: 3
        padding-right: 40px
      &:nth-child(2)
        flex: 1
        padding: 0 40px
      &:nth-child(3)
        flex: 1
        padding: 0 40px
      &:nth-child(4)
        flex: 3
      .logo
        margin-bottom: 30px
      .address-container
        p
          margin-bottom: 10px
          margin-top: 0
      h5
        font-family: $font-family-default
        font-weight: 900
        font-size: 16px
        margin-bottom: 20px
        margin-top: 0
      h4
        font-family: $font-family-default
        font-weight: 900
        font-size: 28px
        margin-bottom: 20px
        margin-top: 0
      a
        font-family: $font-family-default
        display: block
        color: #FFFFFF
        margin-bottom: 18px
        margin-top: 0
        font-weight: 100
        &:hover
          font-weight: 900
      .newsletter-form-container
        display: flex
        align-items: center
        background-color: white
        border-radius: 30px
        input
          font-size: 16px
          font-family: $font-family-default
          padding: 10px 20px
          outline: none
          border: none
          border-radius: 30px
        .subscribe-button
          background-color: $primary-blue
          color: white
          text-align: center
          padding: 10px 20px
          font-size: 16px
          font-family: $font-family-default
          cursor: pointer
          border-radius: 30px
          &:hover
            font-weight: 900
</style>