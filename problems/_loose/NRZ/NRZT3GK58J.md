---
tag: NRZT3GK58J
kind: problem
type: answer
answer: p-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a prime $p>3 . a_{1}, a_{2}, \cdots$, $a_{p-1}$ is a permutation of $1,2, \cdots, p-1$, and satisfies
$$
p \mid\left(a_{1} a_{2}+a_{2} a_{3}+\cdots+a_{p-2} a_{p-1}\right) .
$$

Let the number of such permutations be $K$. Find the remainder of $K$ modulo $p(p-1)$.
