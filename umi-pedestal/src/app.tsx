import type { BasicLayoutProps } from '@ant-design/pro-layout'
import { Avatar } from 'antd'

export const layout = (): BasicLayoutProps => {
	return {
		rightContentRender: () => (
			<>
				<Avatar
					size={24}
					style={{ marginRight: '16px' }}
					src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
					alt='avatar'
				/>
			</>
		),
	}
}
