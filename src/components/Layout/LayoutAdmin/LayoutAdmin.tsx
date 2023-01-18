import { Layout, Menu, Image, Button, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { HomeOutlined, LogoutOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Admin.module.css'

const { Header, Sider, Content } = Layout

const LayoutAdmin = ({
  content,
  selected,
}: {
  content: React.ReactNode
  selected: number
}) => {
  const [title, setTitle] = useState('')

  const menuItem = [
    { label: 'Chi nhánh', icon: HomeOutlined },
    { label: 'Kinh doanh', icon: HomeOutlined },
    {
      label: 'Nhân viên',
      icon: HomeOutlined,
      children: ['Nhân viên', 'Yêu cầu'],
    },
    { label: 'Tài khoản', icon: HomeOutlined },
    { label: 'Sự kiện', icon: HomeOutlined },
    { label: 'Hàng hóa', icon: HomeOutlined },
    { label: 'Kho', icon: HomeOutlined },
    {
      label: 'Đơn hàng',
      icon: HomeOutlined,
      children: ['Cửa hàng', 'Trực tuyến'],
    },
  ]

  const siderItems: MenuProps['items'] = menuItem.map((item, index) => {
    return {
      key: index,
      icon: React.createElement(item.icon),
      label: item.label,
      onClick: () => {
        console.log(index)
      },

      children: item.children?.map((child, childIndex) => {
        return {
          key: index + '' + childIndex,
          label: child,
          onClick: () => {
            console.log(index + '' + childIndex)
          },
        }
      }),
    }
  })

  const avatarItems: MenuProps['items'] = [
    {
      label: (
        <a
          onClick={(e) => {
            e.preventDefault()
            console.log('Đổi mật khẩu')
          }}
        >
          <Button
            className='border-0'
            size={'small'}
            onClick={() => {
              console.log('DMK')
            }}
          >
            Đổi mật khẩu
          </Button>
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a
          href='#'
          onClick={(e) => {
            e.preventDefault()
            console.log('Đăng xuất')
          }}
        >
          <Button
            className='border-0 flex items-center	'
            style={{ color: '#14794f' }}
            icon={<LogoutOutlined />}
            size={'small'}
          >
            Đăng xuất
          </Button>
        </a>
      ),
      key: '1',
    },
  ]
  useEffect(() => {
    switch (selected) {
      case 0:
        setTitle('Quản lý chi nhánh')
        break
      case 1:
        setTitle('Quản lý hoạt động kinh doanh')
        break
      case 20:
      case 21:
        setTitle('Quản lý nhân viên')
        break
      case 3:
        setTitle('Quản lý tài khoản')
        break
      case 4:
        setTitle('Quản lý sự kiện')
        break
      case 5:
        setTitle('Quản lý hàng hóa')
        break
      case 6:
        setTitle('Quản lý kho')
        break
      case 70:
      case 71:
        setTitle('Quản lý đơn hàng')
        break
    }
  }, [selected])

  return (
    <Layout>
      <Sider className={styles.adminSider}>
        <div className='my-8 flex-1 justify-end'>
          <h1 className='text-center text-white font-bold	text-3xl italic font-sans'>
            PTH Fashion
          </h1>
        </div>
        <Menu
          className={styles.adminMenu}
          mode='inline'
          defaultSelectedKeys={[selected.toString()]}
          items={siderItems}
        />
      </Sider>
      <Layout>
        <Header className='!bg-white drop-shadow flex justify-between items-center	!h-12'>
          <span className='text-black font-bold	text-xl leading-none	'>
            {title}
          </span>
          <Dropdown menu={{ items: avatarItems }} trigger={['click']}>
            <Button
              className='bg-emerald-50 border-0'
              icon={<Image width='30px' src='/Avatar.png' preview={false} />}
              size={'large'}
            />
          </Dropdown>
        </Header>
        <Content className='bg-emerald-50	'>{content}</Content>
      </Layout>
    </Layout>
  )
}

LayoutAdmin.displayName = 'Layout Admin'

export default LayoutAdmin
