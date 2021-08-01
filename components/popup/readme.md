页面popup组件

1. 使用
    ```html
      <hi-popup
        title="{{popup.title}}"
        footerText="{{popup.footerText}}"
        show="{{popup.show}}"
        bind:close="onClosePop"
      >
        <view class="popup-content-demo">
          popup
        </view>
      </hi-popup>
    ```
    ```javascript
      page({
        data: {
          popup: {
            show: false,
            title: '',
            footerText: ''
          }
        },
        methods: {
          onClosePop() {
            this.setData({ 'popup.show': false })
          }
        }
      })
    ```
2. 参数说明
    |参数|默认值|说明|
    |---|---|---|
    |zIndex|详见源码|z-index值|
    |show|详见源码|是否显示|
    |title|详见源码|title文本|
    |isShowTitle|详见源码|是否显示title|
    |titleStyle|详见源码|title的样式|
    |isShowFooter|详见源码|是否显示底部|
    |footerText|详见源码|底部文本|
    |footerStyle|详见源码|底部样式|
    |isShowCloseIcon|详见源码|是否显示关闭按钮，未实现|
    |isClickMaskClose|详见源码|是否点击遮幕关闭|
    |position|详见源码|弹窗位置，暂时只支持bottom，即从底部唤出|
    |isRound|详见源码|是否展示圆角|



