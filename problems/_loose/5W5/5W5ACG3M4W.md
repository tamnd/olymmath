---
tag: 5W5ACG3M4W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider five positive real numbers ordered by $0<a \leq b \leq c \leq d \leq e$. It is known that whenever we remove one of these numbers, we can separate the remaining four into two groups such that the sum of the numbers in one group is equal to the sum of the numbers in the other group. If a sequence $(a, b, c, d, e)$ satisfies this condition, we say that it is almost-balanced. There are sequences that meet a more restrictive condition: if we remove one number, we can separate the remaining four numbers into two groups with the same number of numbers such that the sum of the numbers in one group is equal to the sum of the numbers in the other group. If a sequence of positive real numbers $(a, b, c, d, e)$ satisfies this more restrictive condition, we say that this sequence is balanced.

(a) Show an example of five positive real numbers ordered by $0<a \leq b \leq c \leq d \leq e$, with $a<e$, that form an almost-balanced sequence. Note that we can make some of them equal if this is convenient.

(b) If a balanced sequence has three equal terms, show that the five numbers are necessarily equal.

(c) Consider a balanced sequence $(a, b, c, d, e)$ with $0<a \leq b \leq c \leq d \leq e$. It is also known that $(e+c)=(b+d)$ and that $(e+a)=(c+d)$. Prove that the five numbers are equal.
