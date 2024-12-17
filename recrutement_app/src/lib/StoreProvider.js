'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './store'
 //creation du provider de redux pour l'ajouter dans le layout et avoir access au store dans tout le projet
export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
