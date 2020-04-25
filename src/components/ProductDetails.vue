<template>
  <div>
      <div class="main-container">

            <div class="container">
                <div class="img-container">
                    <img class="main-img" :src="product.imageLink" alt="main image">
                    <div class="sub-img">
                        <img :src="product.imageLink" alt="different image view">
                        <img :src="product.imageLink" alt="different image view">
                        <img :src="product.imageLink" alt="different image view">
                    </div>
                </div>

                <div class="product-infomation">
                    <b-card bg-variant="dark" text-variant="white" title="Product Information">
                        <b-card-text class="title-text">
                            {{ product.name }}
                        </b-card-text>
                        <b-card-text>&#8358;{{ product.price }}</b-card-text>
                        <b-button href="#" variant="primary">Add to Cart</b-button>
                    </b-card>

                </div>
            </div>
            <div class="product-infomation">
                <h3>Product Detail</h3>
                <p>{{ product.productDetail }}</p>
            </div>
      </div>

  </div>
</template>

<script>
export default {
    name: 'ProductDetail',
    props: ['product']
}
</script>

<style>

.title-text{
    color: rgb(96, 96, 228);
}

h3{
    color: rgb(80, 80, 170);
    font-weight: 800;
    text-transform: capitalize;
}
p{
    font-size: 22px;
}

.container{
    width: 100%;
    display: flex;
    padding: 4px;
    margin: 5px;
}

.img-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 4px;
}

.product-infomation{
    width: 100%;
    margin: 4px;;
}

.img-container{
    width: 5%;
}

.main-img{
    display: block;
    width: 100%;
    height: 300px;
}

.sub-img{
    width: 100%;
    display: block;
}
.sub-img img{
    height: 70px;;
    width: 70px;
    padding: 4px;
    margin: 4px;
}

</style>