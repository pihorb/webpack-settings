import * as $ from 'jquery'

function createAnalytics(): object {
  let counter = 0 
  let destroyed: boolean = false
  const listtener = () => counter++
  $(document).on('click', listtener)

  return {
    destroy() {
      $(document).off('click', listtener)
      destroyed = true
    },

    getCounter() {
      if(destroyed) return `Analytics is destroyed . Total clicks = ${counter}`
      return counter
    }
  }
}

window['analytics'] = createAnalytics()