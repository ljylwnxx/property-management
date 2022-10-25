import link from "../../api/Link.js"
import apiUrl from "../../api/url.js"



let HomeModule:Object={
    state:{
      navBool:true,
      dialogFormVisible:false,
      uplistData: {},
      listdata:[]
    },
    mutations:{
        SET_NAV_BOOL(state: any){
         state.navBool = !state.navBool
        },
        SET_DIALOG(state: any,paylog: any){
          state.dialogFormVisible = !state.dialogFormVisible
          state.uplistData = paylog
        },
        DIALOG(state: any,paylog: any){
          state.uplistData = paylog
          window.location.reload()
        },
        LISTDATA(state: any,paylog: any){
          state.listdata = paylog
        }
    },
    actions:{
      USERUPDATE_LIST(context: any){
        link("/getUserList?apipost_id=2689ba").then((ok: any)=>{
          context.commit("LISTDATA",ok.data.userlist)
         })
      },
      DEL_DATA(context: any, payload: any){
        link("/getUserList?apipost_id=2689ba"+"/"+payload.id,"delete").then((ok: any)=>{
          window.location.reload()
         }) 
      }
    },
    getters:{

    }
}
export default HomeModule