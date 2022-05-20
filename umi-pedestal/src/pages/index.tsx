import { PageContainer } from '@ant-design/pro-layout'
import styles from './index.less'

export default function IndexPage() {
	return (
		<PageContainer>
			<h1 className={styles.title}>Page index</h1>
			<div className={styles.box}></div>
		</PageContainer>
	)
}
