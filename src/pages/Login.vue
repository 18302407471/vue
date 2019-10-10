<template>
  <el-container class="login-container" >
    <el-header></el-header>
    <el-main class="login-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input ref="name" v-model="form.name" name="Name"/>
        </el-form-item>
        <el-form-item label="密码" >
          <el-input ref="password" name="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <a href="">忘记密码</a>
          <el-button :loading="loading" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>
      <p><span>主办单位：生态环境部机动车排污监控中心</span></p>
      <p><span>技术支持单位：北京理工新源信息科技有限公司</span></p>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password: ''
        },
        loading: false,
        // note: {
        //   backgroundImage: "url(" + require("../assets/images/register-bg.png") + ")"
        // },
        redirect: undefined,
        otherQuery: {}
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          const query = route.query
          if (query) {
            this.redirect = query.redirect
            this.otherQuery = this.getOtherQuery(query)
          }
        },
        immediate: true
      }
    },
    created() {
      // window.addEventListener('storage', this.afterQRScan)
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate(valid => {
          console.log(valid);
          if (valid) {
            this.loading = true;
            this.$store.dispatch('commitName', this.form.name)
              .then(() => {
                this.$router.push({ path: '/welcome', query: this.otherQuery })
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      getOtherQuery(query) {
        return Object.keys(query).reduce((acc, cur) => {
          if (cur !== 'redirect') {
            acc[cur] = query[cur]
          }
          return acc
        }, {})
      }
    }
  }
</script>

<style>
  .login-container {
    background-image: url(../assets/images/register-bg.png);
    background-size: cover;
  }
  .login-main {
    padding: 10% 35% 10% 35%;
  }
</style>