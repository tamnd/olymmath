---
tag: E29GVVJQEP
kind: problem
type: answer
answer: P(x)=x+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90715
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a polynomial $P(x)$ with integer coefficients, assume that for every positive integer $n$ we have $P(n)>n$. Consider the sequence

$$
x_{1}=1, x_{2}=P\left(x_{1}\right), \ldots, x_{n}=P\left(x_{n-1}\right), \ldots
$$

If for every positive integer $N$ there exists a member of the sequence divisible by $N$, prove that $P(x)=x+1$.
