<template>
    <div class="container">
      <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class= "alert alert-info">
            Click on quote to delete it
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';
  import Header from './components/Header.vue';
    export default {
        data: function(){
          return{
            maxQuotes: 10,
            quotes: ['Quote']
          }
        },
        methods:{
          newQuote(quote){
            if(this.quotes.length>=this.maxQuotes){
              return alert('Please delete quotes first')
            }
            this.quotes.push(quote);
          },
          deleteQuote(index){
            this.quotes.splice(index,1);
          }
        },
        components: {
          appQuoteGrid: QuoteGrid,
          appNewQuote: NewQuote,
          appHeader: Header
        }
    }
</script>

<style>
</style>