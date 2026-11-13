---
tag: WSTWQS5NGN
kind: problem
type: answer
answer: \frac{4}{35}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The alternating sum of the digits of 63195 is $6-3+1-9+5=0$. In general, the alternating sum of the digits of a positive integer is found by taking its leftmost digit, subtracting the next digit to the right, adding the next digit to the right, then subtracting, and so on. A positive integer is divisible by 11 exactly when the alternating sum of its digits is divisible by 11. For example, 63195 is divisible by 11 since the alternating sum of its digits is equal to 0 , and 0 is divisible by 11. Similarly, 92807 is divisible by 11 since the alternating sum of its digits is 22 , but 60432 is not divisible by 11 since the alternating sum of its digits is 9 .

Lynne forms a 7-digit integer by arranging the digits 1, 2, 3, 4, 5, 6, 7 in random order. What is the probability that the integer is divisible by 11 ?
(A) $\frac{1}{35}$
(B) $\frac{5}{42}$
(C) $\frac{3}{35}$
(D) $\frac{1}{42}$
(E) $\frac{4}{35}$
