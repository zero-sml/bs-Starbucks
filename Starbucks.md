  布局：屏幕为lg时，左边占4列：使用固定定位，使用导航栏；登录使用flex布局使他们垂直居中；隐藏菜单
       右边占8列：使用轮播图，卡片
左侧：
  导航栏：
      屏幕<992px时，左侧脱离文档流，固定定位失效，登录的内容往上走
      屏幕<576px时，导航栏消失
      当header设置position-fixed后，脱离文档流，右侧的内容会过来
  登录：
     左侧垂直居中的那块内容，当屏幕小于小屏时，应该不垂直居中，而是往上走

  隐藏菜单：
     用flex-column使子元素垂直排列，但是主轴是旋转90deg,所以排列方式是使用justify-content-between使他们顶天顶地对齐
     层级问题：显示菜单的时候，层级是最高的，遮盖全部内容；但是一开始处于隐藏状态，如果层级太高会点击不了，所以一开始的层级是最低的
           

右侧：
  屏幕<768px时，卡片内容由一行占4列，变成一行占6列
  屏幕<576px时，轮播图下面的变成一列显示，底部出现固定定位的导航栏


