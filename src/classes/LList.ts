import { INodeList, Fn } from "../interfaces/basicInterfaces";
import { Node } from "../LLNode";

//индексаторы, методы для добавления и удаления, итератор, через встроенные циклы

export class LinkedList implements INodeList {
  public head: Node | null = null;
  public tail: Node | null = null;

  public prepend(value: number | string | {}): LinkedList {
  
    const newNode = new Node(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    // Возвращаем весь список.
    return this;
  }

  public append(value: number | string | {}): LinkedList {
    // Создаём новый узел.
    const newNode = new Node(value);

    // Если нет head или tail, делаем новым узлом head и tail.
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Присоединяем новый узел к концу связного списка.
    // Берём последний узел и указываем, что его next будет новым узлом.

    this.tail.next = newNode;

    // Переназначаем tail на новый узел.
    this.tail = newNode;

    return this;
  }

  public delete(value: number | string | {}): Node | null {
    // Если нет head значит список пуст.
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // Если head должен быть удален, то делаем следующий узел новым head.
    while (this.head && this.head.value === value) {
      deletedNode = this.head;

      // Переназначаем следующий за head узел на новый head.
      this.head = this.head.next;
    }

    let currentNode = this.head;

    // Если следующий узел должен быть удален,
    // делаем узел через один, следующим для проверки.
    // Перебираем все узлы и удаляем их, если их значение равно указанному.

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          // Перезаписываем, чтобы узел через один стал следующим узлом.
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Проверяем, должен ли tail быть удален.
    // Так как, если в цикле мы удаляем последний узел,
    // то с предпоследнего узла убираем только ссылку на него.
    // Поэтому делаем проверку на его удаление с "tail".

    if (this.tail && this.tail.value === value) {
      // В данном случае currentNode это или предпоследний узел или head.
      this.tail = currentNode;
    }

    return deletedNode;
  }

  public find(value?: number | string | {} | undefined): Node | null {
    if (!this.head) {
        console.log('List does not exist');
        return null;
    } else if(value !== undefined) {
        console.log('Cant search by undefined value');
        return null;
    }

    let currentNode: Node | null = this.head; //начинаем с головы

    // Перебираем все узлы в поиске значения.
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      // Перематываем на один узел вперед.
      currentNode = currentNode.next; //на последнем он станет нулл
    }

    return null;
  }

  public deleteLast(): Node | null {
    if (!this.tail) {
        console.log('List is empty');
        
        return null;
    }

    // Сохраняем значение последнего узла.
    const deletedTail = this.tail;

    // Если head и tail равны, значит в списке только один узел.
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // Если в связном списке много узлов.
    // Перебираем все узлы и находим предпоследний узел,
    // убираем ссылку «next» на последний узел.

    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      //
      // Если у следующего узла нет следующего узла,
      // значит текущий узел предпоследний.

      if (!currentNode.next.next) {
        // Убираем ссылку «next» на последний узел.
        currentNode.next = null;
      } else {
        // Перематываем на один узел вперед.
        currentNode = currentNode.next;
      }
    }

    // В данном случае currentNode - это предпоследний узел или head,
    // который становится последним узлом.

    this.tail = currentNode;

    return deletedTail;
  }

  public deleteFirst(): Node | null {
    // Если нет head значит список пуст.
    if (!this.head) {
      return null;
    }

    const deletedFirst = this.head;//присваиваем  удаляемому ссылку на голову

    //
    // Если у head есть ссылка на следующий "next" узел
    // то делаем его новым head.

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      //
      // Если у head нет ссылки на следующий "next" узел
      // то мы удаляем последний узел.

      this.head = null;
      this.tail = null;
    }

    return deletedFirst;
  }
}