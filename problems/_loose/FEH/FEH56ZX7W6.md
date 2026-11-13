---
tag: FEH56ZX7W6
kind: problem
type: answer
answer: 'Greatest sum: 101 + 2*(6^101 - 1)/5. Least sum: 2^102 - 3*2^51 + 2*3^50 + 3^101.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Kati writes the numbers
$$
2^0, 2^1, 2^2, \dots, 2^{100}, 3^0, 3^1, 3^2, \dots, 3^{100}, 6^0, 6^1, 6^2, \dots, 6^{100}
$$
on the board. In each step, she performs one of the following operations:
(1) She can pick two numbers and replace them with their greatest common divisor and least common multiple; or
(2) She can pick two numbers, one of which is divisible by the other, and replace them with some two numbers whose greatest common divisor and least common multiple would be the two picked numbers.
Find the least and the greatest sum of all numbers on the board that can be achieved via finitely many steps.
