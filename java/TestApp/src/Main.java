import java.util.ArrayList;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
       /*
       ArrayList list = new ArrayList();
        list.add(new Product());
        list.add(new Employee());
        list.add(100);
        list.add("This is a string");
        System.out.println(list.size());
        */

        MyCollection<Employee> list = new MyCollection<Employee>();
        list.add(new Employee(100));
        list.add(new Employee(200));

        System.out.println(list.size());
    }
}