import Cookies from 'js-cookie'

const app = {
  state: {
  	tableDatas:[{  		    		  
        		'date':"2002-1-2",
       		   'type':"微信",
        		'describe':"水果",
        		'income':"20",
        		'expend':"50",
        		'cash':"30",
        		"id":1,
        		'remark':"钱不够花",       		
        	},
        	{  		    		  
        		'date':"2002-1-2",
        		'type':"支付宝",
        		"id":2,
        		'describe':"香烟",
        		'income':"40",
        		'expend':"50",
        		'cash':"30",
        		'remark':"钱不够花",       		
        	},
        	{  		    		  
        		'date':"2002-1-2",
        		'type':"支付宝",
        		"id":2,
        		'describe':"香烟",
        		'income':"120",
        		'expend':"50",
        		'cash':"30",
        		'remark':"钱不够花",       		
        	},
        	{  		    		  
        		'date':"2002-1-2",
        		'type':"支付宝",
        		"id":2,
        		'describe':"香烟",
        		'income':"110",
        		'expend':"50",
        		'cash':"30",
        		'remark':"钱不够花",       		
        	}
  	],
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
      withoutAnimation: false
    },
    
  },
  mutations: {
  	ADD_DATA_TABLE:(state, dataTable) => {
  		state.tableDatas=dataTable
  	},
  	ADD_LIST_ITEM:(state, listItem) => {
  		state.tableDatas.unshift(listItem)
  	},
  	DELET_LIST_ITEM:(state, form) => {
  		state.tableDatas.splice(form.id,1,form)
  	},
  	
    TOGGLE_SIDEBAR: state => {    	
      state.sidebar.opened = !state.sidebar.opened
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 0)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
  },
  actions: {
  	
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    }, 
    addDataTable({ commit },  dataTable ) {
      commit('ADD_DATA_TABLE', dataTable)
    },
    addListItem({ commit },  listItem ){
    	console.log(listItem)
  		commit('ADD_LIST_ITEM', listItem)
  	},
  	deletListItem({ commit },  form ){    	
  		commit('DELET_LIST_ITEM', form)
  	},
  	
  }
}

export default app
