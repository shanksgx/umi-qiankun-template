import type { BasicLayoutProps } from '@ant-design/pro-layout'
import { Avatar } from 'antd'

export const layout = (): BasicLayoutProps => {
	//@ts-ignore
	if (window?.__POWERED_BY_QIANKUN__) {
		return {
			layout: 'side',
			headerRender: false,
			rightContentRender: () => (
				<>
					<Avatar
						// size='small'
						style={{ marginRight: '16px' }}
						size={24}
						src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
						alt='avatar'
					/>
				</>
			),
		}
	} else {
		return {
			layout: 'mix',
			rightContentRender: () => (
				<>
					<Avatar
						// size='small'
						style={{ marginRight: '16px' }}
						size={24}
						src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
						alt='avatar'
					/>
				</>
			),
		}
	}
}

export const qiankun = {
	// 应用加载之前
	async bootstrap(props: any) {
		console.log('app1 bootstrap', props)
		return props
	},
	// 应用 render 之前触发
	async mount(props: any) {
		console.log('app1 mount', props)
	},
	// 应用卸载之后触发
	async unmount(props: any) {
		console.log('app1 unmount', props)
	},
}
