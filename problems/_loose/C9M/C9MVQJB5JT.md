---
tag: C9MVQJB5JT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220318
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every integer $n$ not equal to $1$ or $-1$, define $S(n)$ as the smallest integer greater than $1$ that divides $n$. In particular, $S(0)=2$. We also define $S(1) = S(-1) = 1$.

Let $f$ be a non-constant polynomial with integer coefficients such that $S(f(n)) \leq S(n)$ for every positive integer $n$. Prove that $f(0)=0$.

**Note:** A non-constant polynomial with integer coefficients is a function of the form $f(x) = a_0 + a_1 x + a_2 x^2 + \ldots + a_k x^k$, where $k$ is a positive integer and $a_0,a_1,\ldots,a_k$ are integers such that $a_k \neq 0$.

*Pitchayut Saengrungkongka, Thailand*
