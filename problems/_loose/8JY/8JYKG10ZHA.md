---
tag: 8JYKG10ZHA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170764
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{0}, a_{1}, \ldots$ be a sequence of non-negative numbers such that for any $k, m \geq 0$,

$$
a_{k+m} \leq a_{k+m+1} + a_{k} a_{m}
$$

Suppose that for sufficiently large $n$, $n a_{n} < 0.2499$. Prove that there exists a number $0 < q < 1$ such that for sufficiently large $n$,

$$
a_{n} < q^{n}
$$
