<template>
  <div class="itemUpcomingClassesProfile">
    <div class="itemUpcomingClassesProfile__user">
      <div class="row itemUpcomingClassesProfile__user__time">
        <div class="itemUpcomingClassesProfile__user__time--calendar">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" />
        </div>
        <div class="itemUpcomingClassesProfile__user__time--datetime">
          <p class="date">Tue, May 12,2021</p>
          <p class="time">9:00am - 10:00am</p>
        </div>
      </div>
      <div class="row itemUpcomingClassesProfile__user__information">
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
      <div class="flex">
        <p class="row teacherName">w/ Mark Connor</p>
        <el-button type="primary" class="btnCancel">Cancel</el-button>
      </div>
      <!-- <el-button type="primary" class="row btnCancel">Cancel</el-button> -->
      <!-- <div class="itemUpcomingClassesProfile__eventPreviousClasses">
        <el-button type="primary" v-if="true">Book again</el-button>
        <el-button type="primary" v-if="true">Review</el-button>
      </div> -->
    </div>
    <!-- <div class="itemUpcomingClassesProfile__eventUpcomingClasses">
    </div> -->
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../assets/scss/main";
.itemUpcomingClassesProfile {
  @include sizeForm(100%, 100%);
  @include backgroudItem();
  h4,
  p {
    margin: 0;
  }
  &__user {
    display: flex;
    flex-direction: column;
    padding: 16px;
    justify-content: space-between;
    width: 100%;
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .el-button {
        // width: 10px;
        @include button();
        width: 35%;
        // background-color: ;
      }
    }
    .row {
      margin: 4px 0px;
    }
    &__time {
      display: flex;
      align-items: center;
      &--calendar {
        display: flex;
        @include sizeForm(48px, 48px);
        background-color: white;
        justify-content: center;
        align-items: center;
      }
      &--datetime {
        margin-left: 5px;
        p {
          padding: 2px;
        }
      }
    }
    &__information {
      display: flex;
      align-items: center;
      h4 {
        padding: 0px 10px;
      }
      .name {
        border-right: 2px solid black;
      }
      .object {
        color: $orangeColor;
      }
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