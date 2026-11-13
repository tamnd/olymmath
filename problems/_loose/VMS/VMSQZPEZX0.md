---
tag: VMSQZPEZX0
kind: problem
type: answer
answer: F(n)=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91848
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
4.23 $f(n)$ is a function defined for all positive integers $n$, and
$$
f(1)=1 \text {, }
$$
$f(n)=(-1)^{k} (n>1, k$ is the number of prime divisors of $n)$.
For example, $f(9)=(-1)^{2}, f(20)=(-1)^{3}$.
Let $ F(n)=\sum_{d \mid n} f(d)$.
$d \mid n$ means $d$ is a divisor of $n$, the above formula represents the sum of the function $f(d)$ for all divisors $d$ of $n$. Prove that $F(n)=0$ or 1. For which $n, F(n)=1$?
(22nd Putnam Mathematical Competition, 1961)
