// package DS;

/**
 * Stack using Array
 */

class ArrayStack<T> {
    T stack[];
    int size;
    int top;

    @SuppressWarnings("unchecked")
    public ArrayStack(int size) {
        this.size = size;
        this.stack = (T[]) new Object[this.size];
        this.top = -1;
    }

    public void push(T data) {
        if (top < size - 1) {
            stack[++top] = data;
        } else {
            System.out.println("Stack is full.");
        }
    }

    public T pop() {
        if (top >= 0)
            return stack[top--];
        else {
            throw new Error("Stack is empty.");
        }
    }

    public boolean isEmpty() {
        if (top == -1)
            return true;
        return false;
    }

    public T peek() {
        if (top >= 0)
            return stack[top];
        throw new Error("Stack is empty.");

    }

}

/*
 * Stack using linked list
 */
class LinkedListStack<T> {
    private Node head;

    protected class Node {
        T data;
        Node next;

        Node(T data) {
            this.data = data;
            this.next = null;
        }
    }

    LinkedListStack() {
        head = null;
    }

    void push(T data) {
        if (head == null) {
            head = new Node(data);
        } else {
            Node newNode = new Node(data);
            newNode.next = head;
            head = newNode;
        }
    }

    T pop() {
        if (head == null)
            throw new Error("Stack is empty.");
        T data = head.data;
        head = head.next;
        return data;
    }

    boolean isEmpty() {
        return head == null;
    }

    T peek() {
        if (head != null)
            return head.data;
        throw new Error("Stack is empty.");
    }

}

/*
 * Double Stack using array
 */
class ArrayDoubleStack<T> {
    T stack[];
    int size;
    int top1, top2;

    @SuppressWarnings("unchecked")
    ArrayDoubleStack(int size) {
        this.size = size;
        stack = (T[]) new Object[this.size];
        this.top1 = -1;
        this.top2 = this.size;
    }

    void push1(T data) {
        if (((this.top1 + 1) + (this.size - this.top2)) < this.size) {
            stack[++this.top1] = data;
        } else {
            throw new Error("Stack 1 overflow");
        }
    }

    void push2(T data) {
        if (((this.top1 + 1) + (this.size - this.top2)) < this.size) {
            stack[--this.top2] = data;
        } else {
            throw new Error("Stack 2 overflow");
        }
    }

    T pop1() {
        if (this.top2 <= -1) {
            throw new Error("Stack 2 is Empty.");
        }

        return stack[this.top1--];
    }

    T pop2() {
        if (this.top2 >= this.size) {
            throw new Error("Stack 2 is Empty.");
        }

        return stack[this.top2++];
    }

    boolean isEmpty1() {
        return this.top1 == -1;
    }

    boolean isEmpty2() {
        return this.top2 == this.size;
    }

    T peek1() {
        if (this.top2 <= -1)
            throw new Error("Stack 1 is Empty.");
        return stack[this.top1];
    }

    T peek2() {
        if (this.top2 >= this.size)
            throw new Error("Stack 2 is Empty.");
        return stack[this.top2];
    }

}

public class Stack {

    public static void main(String[] args) {
        try {
            // ArrayStack<Integer> s = new ArrayStack<Integer>(2);
            // s.push(2);
            // s.push(3);
            // s.pop();
            // System.out.println(s.peek());
            // System.out.println(s.isEmpty());

            // LinkedListStack<Integer> stackL = new LinkedListStack<Integer>();
            // stackL.push(2);
            // stackL.push(3);
            // stackL.push(4);
            // System.out.println(stackL.peek());

            // ArrayDoubleStack<Integer> stack = new ArrayDoubleStack<>(5);
            // stack.push1(1);
            // stack.push2(5);
            // stack.push2(4);
            // stack.push2(3);
            // stack.push1(2);
            // stack.pop1();
            // stack.pop2();
            // System.out.println(stack.peek1());
            // System.out.println(stack.peek2());

            // stack.push1(2);
            // stack.push1(3);
        } catch (Error e) {
            System.out.println(e);
        }
    }
}