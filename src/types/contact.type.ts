export interface Contact {
  email: string
  phonenumber: string
  message: string
  title: string
  status: 'pending' | 'done'
  _id: string
  createDate: string
}
