import { observable, action, computed, autorun } from 'mobx'
import * as store from 'react-native-simple-store'
import ToDoType from '../types/todo-type'


class ToDo {

    @observable filterType = 'all'

    @action changeFilterType(type: 'all' | 'active' | 'completed') {
        this.filterType = type
    }

    @observable listRegistry = observable.map()

    @computed get list(): any {
        return this.listRegistry.values()
    }
    // autorun(()=>{

    // })
    // set list(value) {
    //     console.log(value)
    //     store.save('todoList', value)
    // }

    @computed get completedCount(): number {
        return this.list.filter((item: ToDoType) => item.completed === true).length
    }

    @computed get activeCount(): number {
        return this.listRegistry.size - this.completedCount
    }

    @action initList(data: ToDoType[]) {
        data.forEach(item => this.listRegistry.set(item.id, item))
    }

    @action addToDo(data: ToDoType) {
        this.listRegistry.set(data.id, data)
    }

    @action deleteToDo(id: string) {
        this.listRegistry.delete(id)
    }

    @action clearToDo() {
        this.listRegistry.clear()
    }

    @action updateToDo(data: ToDoType) {
        this.listRegistry.set(data.id, data)
    }

    @action getToDo(id: string): ToDoType | undefined {
        return this.listRegistry.get(id) as ToDoType | undefined
    }

    @action setCompleted(id: string, completed: boolean) {
        this.listRegistry.set(id, { ...this.listRegistry.get(id), completed })
    }
}

export default { ToDo: new ToDo() }
