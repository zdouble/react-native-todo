import { observable, action, computed } from 'mobx'
import ToDoType from '../types/todo-type'


class ToDo {
    @observable listRegistry = observable.map()

    @computed get list(): {}[] {
        return this.listRegistry.values()
    }

    @computed get completedCount(): number {
        return this.listRegistry.size
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
