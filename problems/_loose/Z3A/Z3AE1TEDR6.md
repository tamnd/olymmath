---
tag: Z3AE1TEDR6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144436
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An $n$-tuple $\left(a_{1}, a_{2}, \cdots, a_{n}\right)$ is called "intermittently periodic" if there exist non-negative integers $i$ and positive integers $p$, such that $i+2 p \leqslant n$, and for all $j=1,2, \cdots, p$,
$$
a_{i+j}=a_{i+p+j}.
$$

Let $k$ be a given positive integer. Find the smallest positive integer $n$, such that the $n$-tuple $\left(a_{1}, a_{2}, \cdots, a_{n}\right)\left(a_{i} \in\{1,2, \cdots, k\}\right)$ is not intermittently periodic, but its extension $\left(a_{1}, a_{2}, \cdots, a_{n+1}\right)$ is intermittently periodic for any $a_{n+1} \in\{1,2, \cdots, k\}$.
(2015, Estonian National Team Selection Exam)
