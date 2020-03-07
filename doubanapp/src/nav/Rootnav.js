import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HotShowMovieScreen from "../view/HotShowMovie.js";
import SearchMovieScreen from "../view/SearchMovie.js";
import HomepageScreen from "../view/Homepage.js";
import { setSpText, scaleSize } from '../utlis/scale.js'

//引入底部导航兰
import Tabnav from "./Tabnav.js";
//所有的路由配置都写在一个createStackNavigator的第一个参数里面{},第二个参数也是对象，设置默认值和通用样式
const AppNavigator = createStackNavigator({

    Tabnav: {
        screen: Tabnav
    },
    //完整版写方法（热映列表）
    HotShowMovie: {
        screen: HotShowMovieScreen
    },


    //间写的方法（搜索）
    SearchMovie: SearchMovieScreen,
    //首页
    // Homepage: HomepageScreen,

},
    {
        //设置头部  
        defaultNavigationOptions: {
            title: '首页',
            //设置头部样式
            headerStyle: {
                backgroundColor: '#41bd55',
                //设置阴影取消
                elevation: null,


                // 去掉导航栏底部边框阴影
                // borderBottomWidth: 0,
                // elevation: 0,
                height: scaleSize(100)
            },
            //设置头部字体颜色（包括自带的箭头颜色）
            headerTintColor: '#fff',
            //设置头部字体的样式
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: setSpText(38),
                // flex: 1,
                // textAlign: 'center',
                // alignItems: 'center',
            },
        },
        // //设置默认路径
        // initialRouteName: 'Homepage'
    }
)



// 解决底部导航栏和顶部导航栏 title 冲突的问题
Tabnav.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    let headerTitle = "";
    if (routeName === 'Homepage') {
        headerTitle = "首页"
    } else if (routeName === 'detailsMovie') {
        headerTitle = "榜单"
    } else if (routeName === 'Mine') {
        headerTitle = "我的"
    }
    return { headerTitle }
}
export default createAppContainer(AppNavigator)