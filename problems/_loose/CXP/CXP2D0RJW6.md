---
tag: CXP2D0RJW6
kind: problem
type: answer
answer: Exactly the number one and all powers of primes, listed in ascending order.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=30
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $\langle a_n \rangle$ of positive integers is given, such that $a_1 = 1$ and $a_{n+1}$ is the smallest positive integer such that
$$lcm(a_1, a_2, \dots, a_n, a_{n+1}) > lcm(a_1, a_2, \dots, a_n).$$
Which numbers are contained in the sequence?
