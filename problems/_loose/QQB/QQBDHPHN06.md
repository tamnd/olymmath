---
tag: QQBDHPHN06
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=94
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer larger than $1$. There are $n$ students sitting at a round table, each is given a number of candies (some students may receive no candies) and the sum of the candies of all students is a multiple of $n$. The students transfer the candies to each other in the following way:

With the candies given at the beginning, if there is at least one student having more candies than the one sitting on his right, then an (arbitrary) student among such students transfers one candy to the student sitting on his right. With the candies that each student are having now, if there is at least one student having more candies than the one sitting on his right, then an (arbitrary) student among such students transfers one candy to the student sitting on his right. The process of candy transferring goes on this way.

Show that after a finite number of candy transfers, the students have the same number of candies.
