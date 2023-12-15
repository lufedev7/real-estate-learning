'use client'
import {
  type ReactNode,
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
  useState,
  useMemo,
} from 'react'
interface GlobalContextProviderProps {
  children: ReactNode
}
interface ContextProps {
  openMenuMobile: boolean
  setOpenMenuMobile: Dispatch<SetStateAction<boolean>>
}
const GlobalContext = createContext<ContextProps>({
  openMenuMobile: false,
  setOpenMenuMobile: () => {},
})

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const contextValue = useMemo(
    () => ({
      openMenuMobile,
      setOpenMenuMobile,
    }),
    [openMenuMobile],
  )
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext = () => useContext(GlobalContext)
