import React, { useState } from 'react'
import { Table } from 'antd'
import type { TableProps } from 'antd/es/table'
import { BASE_URL, Colors } from '@/constants'
import { TableListProps } from '@/utils/types/componentType'
import { useRouter } from 'next/router'

const TableList = function <T extends object>(props: TableListProps<T>) {
  const router = useRouter()

  const tableProps: TableProps<T> = {
    bordered: false,
    loading: false,
    size: 'small',
    expandable: undefined,
    title: () => (
      <h1>
        <b>{props.title}</b>
      </h1>
    ),
    footer: undefined,
    showHeader: true,
    scroll: { x: '60vw', y: '50vh' },
    tableLayout: 'auto',
    pagination: { position: ['bottomRight'], pageSize: 25 },
  }

  return (
    <div
      style={{
        marginTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: Colors.white,
        borderRadius: 12,
      }}
    >
      <Table
        {...tableProps}
        columns={props.columns}
        dataSource={props.data ?? []}
        onRow={(record, index) => {
          return {
            onClick: (event) => {
              router.push(props.selectUrl ?? BASE_URL)
            },
          }
        }}
      />
    </div>
  )
}

export default TableList