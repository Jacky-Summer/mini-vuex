let Vue = null

class Store {
  constructor(options) {
    // vuex 的核心就是借用了vue的实例，因为vue的实例数据变化，会刷新视图
    let vm = new Vue({
      data: {
        state: options.state,
      },
    })
    // state
    this.state = vm.state

    // mutations
    this.mutations = {} // 存储传进来的mutations
    let mutations = options.mutations || {}
    Object.keys(mutations).forEach(key => {
      this.mutations[key] = params => {
        mutations[key].call(this, this.state, params)
      }
    })

    // actions
    this.actions = {}
    let actions = options.actions || {}
    Object.keys(actions).forEach(key => {
      this.actions[key] = params => {
        actions[key].call(this, this, params)
      }
    })

    // getters
    this.getters = {}
    let getters = options.getters || {}
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key].call(this, this.state)
        },
      })
    })
  }

  commit = (key, params) => {
    this.mutations[key](params)
  }

  dispatch = (type, payload) => {
    this.actions[type](payload)
  }
}

export const mapState = args => {
  let obj = {}
  args.forEach(item => {
    obj[item] = function() {
      return this.$store.state[item]
    }
  })
  return obj
}

export const mapGetters = args => {
  let obj = {}
  args.forEach(item => {
    obj[item] = function() {
      return this.$store.getters[item]
    }
  })
  return obj
}

export const mapMutations = args => {
  let obj = {}
  args.forEach(item => {
    obj[item] = function(params) {
      return this.$store.commit(item, params)
    }
  })
  return obj
}

export const mapActions = args => {
  let obj = {}
  args.forEach(item => {
    obj[item] = function(payload) {
      return this.$store.dispatch(item, payload)
    }
  })
  return obj
}

function install(_Vue) {
  Vue = _Vue // install方法调用时，会将Vue作为参数传入（上面Store类需要用到Vue）
  // 实现每一个组件，都能通过this调用$store
  Vue.mixin({
    beforeCreate() {
      // 通过this.$options可以获取new Vue({参数}) 传递的参数
      if (this.$options && this.$options.store) {
        // 证明这个this是根实例，也就是new Vue产生的那个实例
        this.$store = this.$options.store
      } else if (this.$parent && this.$parent.$store) {
        // 子组件获取父组件的$store属性
        this.$store = this.$parent.$store
      }
    },
  })
}

export default {
  Store,
  install,
}
