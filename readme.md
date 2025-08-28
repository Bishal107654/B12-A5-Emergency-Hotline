Question Answer

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById → একটা element খুঁজে আনে ID দিয়ে। সবসময় একটাই element ফেরত দেয়।

getElementsByClassName → এক class-এর সব element খুঁজে আনে। অনেক element ফিরতে পারে।

querySelector → CSS selector দিয়ে প্রথম match হওয়া element দেয়।

querySelectorAll → CSS selector দিয়ে সব match হওয়া element দেয়।





2.How do you create and insert a new element into the DOM?

Answer:
প্রথমে নতুন tag তৈরি করা হয়।

এরপর তার ভিতরে লেখা বা content দেওয়া হয়।

পরে parent element-এ নতুন element বসানো হয়।





3.What is Event Bubbling and how does it work?

Answer:
কোনো element-এ event (যেমন click) ঘটে, তারপর সেটা ধাপে ধাপে parent element-এ উঠে যায়।





4.What is Event Delegation in JavaScript? Why is it useful?

Answer:
অনেক element-এ একই ধরনের event লাগানোর জন্য সব child-এ আলাদা listener না দিয়ে parent element-এ একবারে listener বসানো।

যখন কোন child event করে, parent listener সেটা ধরে।





5.What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() → কোনো element-এ default কাজ বন্ধ করে। যেমন link click করলে page না যাওয়া।

stopPropagation() → event bubbling বন্ধ করে, parent element পর্যন্ত যায় না।