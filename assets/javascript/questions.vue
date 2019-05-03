<template>
  <div id="body-content">
    <div class="row">
      <div class="col-12">
        <h3 style="width: 95%; margin: 60px auto; text-align: center;">{{ current_question.text }}</h3>
      <div>
    </div>
    <div class="row justify-content-around">
      <div class="col-3">
        <h5 style="text-align: right;">{{ current_question.answers[0] }}</h5>
      </div>
      <div class="col-3">
        <img src="assets/new_images/arrow_top.png" style="width: 110px; height: 110px; margin: 0 auto 0 auto;"></img>
      </div>
      <div class="col-3">
        <h5 style="text-align: left;">{{ current_question.answers[1] }}</h5>
      </div>
      <div class="col-3">
        <img src="assets/new_images/progress_arrow_0.png" style="width: 300px; height: 300px;"></img>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>