export interface menuModel {
  menuid:string,
  menuname:string,
  menurouter: string,
  children?:menuModel[]
}

export interface elMenuModel {
  key: string,
  keyPath: string[]
}