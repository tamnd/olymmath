---
tag: RKXB06CC8W
kind: problem
type: answer
answer: 2^{n-1}+\frac{1}{2}\cdot(2^{n_{1}}-2)\cdot(2^{n_{2}}-2)\cdot\ldots\cdot(2^{n_{10}}-2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's fix 10 natural numbers $n_{1}, n_{2}, \ldots, n_{10}$ and denote their sum by $n=n_{1}+\cdots+n_{10}$. Suppose now that on a board, $n$ numbers $a_{1}, \ldots, a_{n}$ are written in a row, each of which is either 0 or 1. These numbers (in the order they are written) are divided into 10 groups:

$$
\underbrace{a_{1}, \ldots, a_{n_{1}}}_{n_{1}}, \underbrace{a_{n_{1}+1}, \ldots, a_{n_{1}+n_{2}}}_{n_{2}}, \ldots, \underbrace{a_{n_{1}+\cdots n_{9}+1}, \ldots, a_{n}}_{n_{10}} .
$$

A group is called non-zero if it contains at least one 1. As a result of the partition, depending on the numbers $a_{1}, \ldots, a_{n}$ initially taken, one can obtain a certain number of non-zero groups. We are interested in such sets $a_{1}, \ldots, a_{n}$ that, when partitioned as indicated, give an even number of non-zero groups. Prove that the number of such sets $a_{1}, \ldots, a_{n}$ (where the number of non-zero groups is even) is given by the formula

$$
2^{n-1}+\frac{1}{2} \cdot\left(2^{n_{1}}-2\right) \cdot\left(2^{n_{2}}-2\right) \cdot \ldots \cdot\left(2^{n_{10}}-2\right)
$$
