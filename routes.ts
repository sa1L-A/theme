import type { ComponentInternalInstance } from 'vue'

import Home from './pages/Home.vue'
import PaperContent from './pages/PaperContent.vue'

/**
 *
 */
const PAPER_LAYOUT = 'paper'

/**
 * 当前主题的路由和页面组件映射
 */
const THEME_ROUTES = {
  home: Home,
  [PAPER_LAYOUT]: PaperContent,
}

/**
 * loadPage 方法用于加载页面
 * @param  layout - 页面布局名称
 * @returns {Component} 返回对应布局的路由对象
 *
 * 方法通过传入的布局名称，从 THEME_ROUTES 中获取对应的路由对象。
 * 如果没有传入布局名称，则默认使用 PAPER_LAYOUT 的路由对象。
 */
export function loadPage(layout: string): ComponentInternalInstance {
  return THEME_ROUTES[layout || PAPER_LAYOUT]
}
