<template>
	<div>
		<template v-for="item in routes">
			<template v-if="!item.hidden && item.children">
				<router-link
					v-if="
						hasOneShowingChildren(item.children) &&
						!item.children[0].children &&
						!item.alwaysShow &&
						!isSubMenu
					"
					:to="item.path + '/' + item.children[0].path"
					:key="item.children[0].name"
				>
					<el-menu-item
						:index="item.path + '/' + item.children[0].path"
						:class="{ 'submenu-title-noDropdown': !isNest }"
					>
						<!-- <svg-icon
							v-if="item.children[0].meta && item.children[0].meta.icon"
							:icon-class="item.children[0].meta.icon"
						></svg-icon> -->
						<span v-if="item.children[0].meta && item.children[0].meta.title">{{
							generateTitle(item.children[0].meta.title)
						}}</span>
					</el-menu-item>
				</router-link>

				<!-- 多级菜单 -->
				<el-sub-menu v-else :index="item.name || item.path" :key="item.name">
					<template v-slot:title>
						<!-- <svg-icon
						v-if="item.meta && item.meta.icon"
						:icon-class="item.meta.icon"
					></svg-icon> -->
						<span v-if="item && item.meta && item.meta.title">
							{{ item.meta.title || generateTitle(item.meta.title) }}
						</span>

						<!-- <span v-if="item.meta && item.meta.title" slot="title">{{
						generateTitle(item.meta.title)
					}}</span> -->
					</template>

					<template v-for="child in item.children">
						<template v-if="!child.hidden">
							<sidebar-item
								:is-nest="true"
								class="nest-menu"
								v-if="child.children && child.children.length > 0"
								:routes="[child]"
								:key="child.path"
								:isSubMenu="true"
							></sidebar-item>

							<router-link
								v-else
								:to="item.path + '/' + child.path"
								:key="child.name"
							>
								<el-menu-item :index="item.path + '/' + child.path">
									<!-- <svg-icon
								v-if="child.meta && child.meta.icon"
								:icon-class="child.meta.icon"
							></svg-icon> -->
									<template v-slot:title>
										<span v-if="child && child.meta && child.meta.title">
											{{ generateTitle(child.meta.title) }}
										</span>
									</template>
								</el-menu-item>
							</router-link>
						</template>
					</template>
				</el-sub-menu>
			</template>
		</template>
	</div>
</template>

<script>
import { generateTitle } from '@/utils/i18n';
export default {
	name: 'SidebarItem',
	props: {
		routes: {
			type: Array,
		},
		isNest: {
			type: Boolean,
			default: false,
		},
		// 非一级菜单
		isSubMenu: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		generateTitle,
		hasOneShowingChildren(children) {
			const showingChildren = children.filter(item => {
				return !item.hidden;
			});
			if (showingChildren.length === 1) {
				return true;
			}
			return false;
		},
	},
	created() {
		for (const o in this.routes) {
			const obj = this.routes[o];
			if (obj.path.indexOf('myiframe') >= 0) {
				obj.children[0].path = 'urlPath?src=https://www.baidu.com';
			}
		}
	},
};
</script>
