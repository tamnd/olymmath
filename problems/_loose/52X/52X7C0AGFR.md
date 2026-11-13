---
tag: 52X7C0AGFR
kind: problem
type: answer
answer: n-\frac{n-1}{1+\frac{1}{2}+\cdots+\frac{1}{n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 2$, for an $n$-tuple of ordered real numbers
$$
\begin{array}{c}
A=\left(a_{1}, a_{2}, \cdots, a_{n}\right) \\
b_{k}=\max _{1 \leqslant i \leqslant k} a_{i}, k=1,2, \cdots, n
\end{array}
$$

the array $B=\left(b_{1}, b_{2}, \cdots, b_{n}\right)$ is called the "innovation array" of $A$, and the number of distinct elements in $B$ is called the "innovation order" of $A$.

Consider all permutations of $1,2, \cdots, n$ (each permutation is regarded as an ordered array). For all permutations with an innovation order of 2, find the arithmetic mean of each term.
