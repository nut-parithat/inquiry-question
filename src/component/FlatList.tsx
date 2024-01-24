import React from 'react'

interface Props<TItem> {
  data: TItem[]
  renderItem: (item: TItem, index: number) => React.ReactNode
}

function FlatList<TItem>(props: Props<TItem>) {
  return props?.data?.map((item, index) => props?.renderItem(item, index + 1))
}

export default FlatList