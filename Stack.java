/**
 * Stack
 */
public class Stack {
    int stack[];
    int size;
    int top;

    public Stack(int size) {
        this.size = size;
        this.stack = new int[this.size];
        this.top = -1;
    }

    public void push(int data) {
        if (top < size - 1) {
            stack[++top] = data;
        } else {
            System.out.println("Stack is full.");
        }
    }

    public int pop() {
        if (top >= 0)
            return stack[top--];
        else {
            System.out.println("Stack is empty.");
            return -1;
        }
    }

    public boolean isEmpty() {
        if (top == -1)
            return true;
        return false;
    }

    public int peek() {
        if (top >= 0)
            return stack[top];
        return -1;
    }

    public static void main(String[] args) {
        Stack s = new Stack(2);
        s.push(2);
        s.pop();
        s.pop();
        System.out.println(s.peek());
        System.out.println(s.isEmpty());
    }
}