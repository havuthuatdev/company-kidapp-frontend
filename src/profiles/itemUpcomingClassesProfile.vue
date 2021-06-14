<template>
  <div class="itemUpcomingClassesProfile">
    <div class="itemUpcomingClassesProfile__user">
      <div class="row itemUpcomingClassesProfile__time">
        <div class="itemUpcomingClassesProfile__time--calendar">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" />
        </div>
        <div class="itemUpcomingClassesProfile__time--datetime">
          <p class="date">Tue, May 12,2021</p>
          <p class="time">9:00am - 10:00am</p>
        </div>
      </div>
      <div class="row itemUpcomingClassesProfile__information">
        <el-avatar :size="36">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
        <div class="name">
          <h4>Hugooo</h4>
        </div>
        <div class="object">
          <h4>Tennis</h4>
        </div>
      </div>
      <p class="row schoolName">Vida Tennis school</p>
      <p class="row teacherName">w/ Mark Connor</p>
      <el-button type="primary" class="row btnCancel">Cancel</el-button>
      <!-- <div class="itemUpcomingClassesProfile__eventPreviousClasses">
        <el-button type="primary" v-if="true">Book again</el-button>
        <el-button type="primary" v-if="true">Review</el-button>
      </div> -->
    </div>
    <!-- <div class="itemUpcomingClassesProfile__eventUpcomingClasses">
      <el-button type="primary" class="btnCancel">Cancel</el-button>
    </div> -->
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.itemUpcomingClassesProfile {
  @include sizeForm(100%, 100%);
  background-color: $inputColor;
  border: 1px solid $inputColor;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  h4,
  p {
    margin: 0;
  }
  .itemUpcomingClassesProfile__user {
    display: flex;
    flex-direction: column;
    padding: 16px;
    justify-content: space-between;
    width: 100%;
    .row{
      margin: 4px 0px;
    }
    .itemUpcomingClassesProfile__time {
      display: flex;
      .itemUpcomingClassesProfile__time--calendar {
        display: flex;
        @include sizeForm(48px, 48px);
        background-color: white;
        justify-content: center;
        align-items: center;
      }
      .itemUpcomingClassesProfile__time--datetime {
        margin-left: 5px;
        p {
          padding: 3px;
        }
      }
    }
    .itemUpcomingClassesProfile__information {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      h4 {
        padding: 0px 10px;
      }
      .name {
        border-right: 2px solid black;
      }
      .object {
        color: $btnColor;
      }
      .el-avatar {
        width: 100px;
      }
    }
    .btnCancel{
      width: 84px;
      height: 40px;
      display: flex;
      // align-items : flex-end;
      align-self: flex-end;
    }
  }
  // .itemUpcomingClassesProfile__eventUpcomingClasses {
  //   display: flex;
  //   flex-direction: column-reverse;
  //   justify-content: flex-start;
  //   padding: 0px 16px 16px 0px;
  //   height: 200px;
  // }
}
</style>