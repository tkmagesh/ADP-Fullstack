import java.util.ArrayList;



public class MyCollection<T extends Model> {
    private ArrayList list = new ArrayList();

    public void add(T o){
        this.list.add(o);
    }

    public int size(){
        return this.list.size();
    }

    public void getById(int id){
        System.out.println(list.get(0).Id);
    }
}
