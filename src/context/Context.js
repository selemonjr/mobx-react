import React from 'react'
import {createNotesStore} from "../store/store";
import { useLocalObservable } from 'mobx-react'

const NotesContext = React.createContext(null)

export const NotesProvider = ({children}) => {
  const notesStore = useLocalObservable(createNotesStore)

  return <NotesContext.Provider value={notesStore}>
    {children}
  </NotesContext.Provider>
}

export const useNotesStore = () => React.useContext(NotesContext)