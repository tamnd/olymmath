---
tag: 932BJG1PAV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the *square decomposition* of a number be defined as the sequence of numbers given by the following algorithm. Given a positive integer $n$, add the largest possible perfect square that is less than or equal to $n$ to a sequence, and then subtract that number from $n$. Repeat as many times as necessary until your current $n$ is $0$. So for example, the square decomposition of $60$ would be $49, 9, 1, 1$. Define the size of a square decomposition to be the number of numbers in the sequence. Say that the maximal size of a square decomposition of a number in the range $[1, 2020]$ is $m$. Find the largest number in the range $[1, 2020]$ that has a square decomposition of size $m$.

*Proposed by Timothy Qian*
