package DS;

class Node {
    Node prev;
    int data;
    Node next;

    Node(int data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

/*
 * Circular Linkedlist
 */

public class LinkedList {

    private Node head;

    LinkedList(int data) {
        this.head = new Node(data);
        this.head.next = this.head;
    }

    void insertAtHead(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;

        // Making circular
        Node tempNode = this.head;
        while (tempNode.next != this.head) {
            tempNode = tempNode.next;
        }

        tempNode.next = newNode;
        this.head = newNode;
    }

    void insertAtEnd(int data) {
        Node newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        Node tempNode = this.head;
        while (tempNode.next != this.head) {
            tempNode = tempNode.next;
        }
        tempNode.next = newNode;
        // New node
        newNode.prev = tempNode;
        newNode.next = this.head;
    }

    void insertAtMiddle(int data, int pos) {
        if (pos == 1) {
            insertAtHead(data);
            return;
        }

        Node temNode = this.head;
        while (pos > 2 && temNode.next != this.head) {
            temNode = temNode.next;
            pos--;
        }

        if (temNode.next == this.head) {
            insertAtEnd(data);
            return;
        }
        Node newNode = new Node(data);
        temNode.next.prev = newNode;
        newNode.next = temNode.next;
        newNode.prev = temNode;
        temNode.next = newNode;
    }

    void printList() {
        Node tempNode = this.head;
        do {
            System.out.print(tempNode.data + " ");
            tempNode = tempNode.next;
        } while (tempNode != this.head);
        System.out.println();
    }

    void reverseList() {
        Node temp = null;
        Node curr = this.head;
        Node prev = null;
        do {
            temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        } while (curr != this.head);
        this.head.next = prev;
        this.head = prev;
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList(1);
        list.insertAtHead(2);
        list.insertAtHead(3);
        list.insertAtEnd(4);
        list.insertAtEnd(5);
        list.insertAtHead(6);
        list.printList();
        list.reverseList();
        list.printList();
    }
}