
import React from 'react'
import s from "./Categories.module.scss"
import { fetchApi } from "../../../services/api"
import useSWRImmutable from "swr/immutable"

interface Props {
  categoryId: string
}

const {getCategories} = fetchApi()
const Categories = ({categoryId}: Props) => {
  const { data, isLoading } = useSWRImmutable(categoryId, getCategories)

  if(isLoading) return 'Loading...'

  return (
    <p className={s.categories}>{data?.nested_categories.join(' > ')}</p>
  )
}

export default Categories