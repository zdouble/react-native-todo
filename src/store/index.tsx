import { observable, action, computed } from 'mobx'

interface ToDoType {
    id: string
    title: string
    content: string
    completed: boolean
}

class ToDo {
    @observable list: ToDoType[] = []

    @computed get completedCount(): number {
        return this.list.length
    }

    @action initList(data: ToDoType[]) {
        this.list = data
    }

    @action addToDo(data: ToDoType){
        this.list.push(data)
    }

    @action deleteToDo(id: string) {
        this.list = this.list.filter(item => item.id !== id)
    }

    @action modifyToDo(data: ToDoType) {
        this.list = this.list.map(item => {
            if(item.id === data.id){
                return data
            }
            return item
        })
    }
}

export default { ToDo: new ToDo() }