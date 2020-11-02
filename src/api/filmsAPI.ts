import API from '@/api'
import {Film, FilmTemp} from '@/store/ducks/films/types'

export type MessageResponse = {
  message: string
}

export const getFilmsAPI = (): Promise<Film[]> => API.get<Film[]>('/films').then(resp => resp.data)

export const addFilmAPI = (film: FilmTemp): Promise<Film> => API.post<Film>('/films', film).then(resp => resp.data)

export const removeFilmAPI = (id: string): Promise<void> => API.delete(`/films/${id}`).then(resp => resp.data)

export const importFilmsAPI = (formData: FormData): Promise<MessageResponse> => API.post<MessageResponse>('/upload', formData, {
  headers: {'Content-Type': 'multipart/form-data'}
}).then(resp => resp.data)