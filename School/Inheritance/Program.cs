using System;
class Class1
{
    public Class1()
    {
        Console.WriteLine("Class1 Constructor Called");
    }
    public void Test1()
    {
        Console.WriteLine("First Method");
    }
    public void Test2()
    {
        Console.WriteLine("Second Method");
    }
}
class Class2 : Class1
{
    public void Test3()
    {
        Console.WriteLine("Thirst Method");
    }
    public Class2()
    {
        Console.WriteLine("Class2 Constructor called");
    }
    static void Main()
    {
        Class2 c = new Class2();
        c.Test1();
        c.Test2();
        c.Test3();
        Console.ReadLine();
    }
}