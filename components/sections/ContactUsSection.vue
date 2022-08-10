<template>
  <div id="contact-us-section" class="section">
    <div class="container">
      <div class="title-container pr-4">
        <h5 class="text-yellow section-title mb-0 mt-0">OUR PRODUCTS</h5>
        <h2 class="section-header mt-2 mb-5">We are always up for a chat!</h2>
      </div>

      <div class="contact-us-details-container">
        <div class="contact-us-card">
          <div class="contact-us-card-left-container">
            <h4>6206 5588</h4>
            <p>Mon to Fri (excluding PH) 0830hrs - 1800hrs</p>
          </div>
          <div class="white-button-outline">
            <h5>Contact Us</h5>
          </div>
        </div>

        <div class="contact-us-card">
          <div class="contact-us-card-left-container">
            <h4>claims@ecics.com.sg</h4>
            <p>replies typically take 2 - 5 business days</p>
          </div>
          <div class="white-button-outline">
            <h5>Email Us</h5>
          </div>
        </div>

        <div class="contact-us-card">
          <div class="contact-us-card-left-container">
            <h4>10 Eunos Road 8</h4>
            <p>#09-04A Singapore Post Centre Singapore 408600</p>
          </div>
          <div class="white-button-outline">
            <h5>Directions</h5>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUsSection'
}
</script>

<style lang="sass">
@import '../../assets/styles/global.sass'

#contact-us-section
  .container
    display: flex
    .title-container
      flex: 1
    .contact-us-details-container
      flex: 3
      .contact-us-card
        display: flex
        border-radius: 8px
        align-items: center
        margin-bottom: 30px
        padding: 20px 30px
        box-shadow: 0px 1px 10px 1px rgb(46 61 73 / 20%) !important
        .contact-us-card-left-container
          display: flex
          align-items: center
          flex: 1
          h4
            font-family: $font-family-header
            margin-bottom: 0
            margin-top: 0
            font-weight: 900
            font-size: 24px
            padding-right: 20px
          p
            font-family: $font-family-default
            margin-bottom: 0
            margin-top: 0
            color: #3E3E3E
            font-size: 18px
            padding-right: 20px
        .white-button-outline
          width: 160px
          h5
            font-family: $font-family-default
            margin-bottom: 0
            margin-top: 0
            font-weight: 900
            font-size: 20px
            text-align: center
</style>