interface ITodo {
  id: string;
  title: string;
  completed: boolean
}

interface ITodoItemProps {
  key: string;
  todo: ITodo;
  editing?: boolean;
  onSave: (val: any) => void;
  onDestory: () => void;
  onEdit: () => void;
  onCancel: (event: any) => void;
  onToggle: () => void
}

interface ITodoItemState {
  editText: string
}

interface ITodoFooterProps {
  completedCount: number;
  onClearCompleted: any;
  nowShoing: string;
  count: number
}

interface ITodoModel {
  key: any;
  todos: Array<ITodo>;
  onChanges: Array<any>;
  subscribe(onChange);
  inform();
  addTodo(title: string);
  toggleAll(checked);
  toggle(todoToToggle);
  destory(todo);
  save(todoToSave, text);
  clearCompleted();
}

interface IAppProps {
  model: ITodoModel;
}

interface IAppState {
  editing?: string;
  nowShowing?: string
}