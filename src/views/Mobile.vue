<template>
  <div id="mobile">
    <div class="row">
      <h3>모바일 퍼블리싱 페이지입니다</h3>
      <ul class="box-wrap">
        <li v-for="(item, index) in 4" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#mobile {
  width: 1200px;
  margin: 0 auto;
  > .row {
    padding: 0 20px;
    > h3 {
      font-size: 20px;
    }
    > .box-wrap {
      width: 100%;
      > li {
        float: left;
        padding-right: 20px;
        width: 25%;
        box-sizing: border-box;
        > a {
          display: block;
          height: 800px;
          background: rgba(0, 0, 0, 0.2);
        }
      }
      > li:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
