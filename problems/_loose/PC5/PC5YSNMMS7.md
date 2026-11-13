---
tag: PC5YSNMMS7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242874
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $n$, for which we can find a prime number less than $\sqrt{n}$ that is not a divisor of $n$. The sequence $a_1, a_2,... ,a_n$ is the numbers $1, 2,... ,n$ arranged in some order. For this sequence, we will find the longest ascending subsequense $a_{i_1} < a_{i_2} < ... < a_{i_k}$, ($i_1 <...< i_k$) and the longest decreasing substring $a_{j_1} > ... > a_{j_l}$, ($j_1 < ... < j_l$) . Prove that at least one of these two subsequnsces $a_{i_1} , . . . , a_{i_k}$ and $a_{j_1} > ... > a_{j_l}$ contains a number that is not a divisor of $n$.
