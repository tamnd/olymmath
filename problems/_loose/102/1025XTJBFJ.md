---
tag: 1025XTJBFJ
kind: problem
type: answer
answer: "989"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127924
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A list of numbers is created using the following rules:
- The first number is 3 and the second number is 4 .
- Each number after the second is the result of adding 1 to the previous number and then dividing by the number before that. In other words, for any three consecutive numbers in the list, $a, b, c$, we have $c=\frac{b+1}{a}$.
The rules tell us that the third number in the list is $\frac{4+1}{3}$ which equals $\frac{5}{3}$.
What is the smallest positive integer $N$ for which the sum of the first $N$ numbers in the list is equal to an odd integer that is greater than $2021 ?$
