# TypeScript-এ Interface এবং Type-এর পার্থক্য:

আমরা এখন জানব TypeScript এ Interface এবং Type কেন ব্যবহার করা হয়। দুইটাই ডেটার
টাইপ ডিফাইন করতে ব্যবহার করা হয়, তবে এদের মধ্যে কিছু পার্থক্য রয়েছে।

Interface মূলত ব্যবহার করা হয় অবজেক্ট কাঠামো নির্ধারণের জন্য এবং Type ব্যবহার
করা হয় সব ধরনের টাইপ ব্যবহারের জন্য। Interface একাধিকবার একই নাম ব্যবহার করলে
TypeScript তাদের মার্জ করে দেয়, কিন্তু Type-এর ক্ষেত্রে এক নাম দুই বার ব্যবহার
করা যায় না। Interface অন্য ক্লাস বা Interface থেকে এক্সটেন্ড করতে পারে, কিন্তু
Type এক্সটেন্ড করতে হলে Intersection ব্যবহার করতে হয়। যদি আমাদের অবজেক্ট টাইপ
প্রয়োজন হয়, তাহলে আমরা Interface ব্যবহার করব, আর না হলে TypeScript-এ Type
ব্যবহার করব।

# TypeScript-এ Union এবং Intersection Type

TypeScript এ টাইপ সিস্টেম আরও শক্তিশালী করতে আমাদের Union এবং Intersection টাইপ
ব্যবহার করতে হয়।

## Union Type

`type StringOrNumber = string | number;`

Union টাইপ দিয়ে একটি ভেরিয়েবল একাধিক টাইপের মান নিতে পারে। অর্থাৎ, এটি যেকোনো
এক ধরনের টাইপ গ্রহণ করতে পারে।

## Intersection Type

Intersection টাইপ দিয়ে একাধিক টাইপকে মিলিয়ে একটি টাইপ তৈরি করা যায়। অর্থাৎ,
মানটি সব ধরনের টাইপের শর্ত পূরণ করতে হবে।

```type Person = { name: string; age: number; };

type Employee = { employeeId: number; department: string; };

type EmployeeDetails = Person & Employee;

const emp: EmployeeDetails = { name: "Alice", age: 25, employeeId: 101,
department: "IT" };
```
