type TaskProps = {
  description: string
}

export class Task {
  private _id?: string;
  private _description?: string;
  private _isCompleted = false;

  constructor (props: TaskProps) {
    this._description = props.description;
  }

  public get description () {
    return this._description;
  }

  public get isCompleted () {
    return this._isCompleted;
  }
}
