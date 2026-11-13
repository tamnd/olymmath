---
tag: 4P6EBWAQFD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=37
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Let $\alpha$ be a real number and $a_1, a_2, a_3, \dots$ a strictly increasing sequence of positive integers such that for every $n \in \mathbb{N}$, $a_n \le n^\alpha$. A prime number $q$ is called *golden* if there is a positive integer $m$ such that $q \mid a_m$. Suppose that $q_1 < q_2 < q_3 < \dots$ are all *golden* prime numbers.
a) Prove that if $\alpha = 1.5$, then $q_n \le 1390^n$.

b) Prove that if $\alpha = 2.4$, then $q_n \le 1390^{2n}$.
