---
tag: 8KBVT5AXHY
kind: problem
type: answer
answer: 1011^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)$ be a sequence of real numbers. Suppose that $a_0 = 1$ and for all $n \geqslant 1, a_n$ is the smallest strictly positive solution of

$$
\left(a_n - a_{n-1}\right)\left(a_n + a_{n-1} - 2 \sqrt{n}\right) = 2
$$

Find the smallest integer $n$ such that $a_n \geqslant 2022$.
