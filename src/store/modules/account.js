import {api} from "../../fetch"
import router from '../../router'
import { Message } from 'element-ui';
import { rnd, updateById1, getIndexById, removeById, append, cp, add2, has, fill, fill1, uniq, pipe, map, int_fomator1, } from "../../fp"

const getters={ };
const state={ };
const actions={
    async login(context,payload){
        let {ok,data}=await api.login(payload);
        if (true || ok){
            context.commit("save_token",data.token,{ root: true })
            router.push("/admin")
        }
    },
    relogin(context,payload){
        context.commit("save_token")
        router.push("/login")
    },
    async logout(context,payload){ },
};
const mutations={ };
const m={
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
//    plugins:[],
}

export default m
