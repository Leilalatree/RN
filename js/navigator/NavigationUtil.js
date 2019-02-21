export default class NavigationUtil{
   /*
   * 返回上一页
   * */
    // static resetToHomePage(navigation){
    //     navigation.goBack();
    // }
    /*
  * 重置到首页
  * */
    static resetToHomePage(params){
        const {navigation} = params;
        navigation.navigate("Main")
    }
}