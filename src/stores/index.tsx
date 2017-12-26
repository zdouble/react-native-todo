import { observable, action, computed, autorun } from 'mobx'
import * as store from 'react-native-simple-store'
import ToDoType from '../types/todo-type'


class ToDo {

    @observable listRegistry = observable.map()

    @computed get list(): any {
        return this.listRegistry.values()
    }

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
        store.save('todoList',this.list)
    }

    @action deleteToDo(id: string) {
        this.listRegistry.delete(id)
        store.save('todoList', this.list)
    }

    @action clearToDo() {
        this.listRegistry.clear()
        store.save('todoList', this.list)
    }

    @action updateToDo(data: ToDoType) {
        this.listRegistry.set(data.id, data)
        store.save('todoList', this.list)
    }

    @action getToDo(id: string): ToDoType | undefined {
        return this.listRegistry.get(id) as ToDoType | undefined
    }

    @action setCompleted(id: string, completed: boolean) {
        this.listRegistry.set(id, { ...this.listRegistry.get(id), completed })
        store.save('todoList', this.list)
    }
}

export default { ToDo: new ToDo() }
