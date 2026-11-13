---
tag: AAYSJP6EA3
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193976
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence $a_{1}, a_{2}, a_{3}, \ldots$ of positive integers, we define a new sequence $b_{1}, b_{2}, b_{3}, \ldots$ by $b_{1}=a_{1}$ and, for every positive integer $n \geq 1$,

$$
b_{n+1}= \begin{cases}b_{n}+a_{n+1} & \text { if } b_{n} \leq a_{n+1} \\ b_{n}-a_{n+1} & \text { if } b_{n}>a_{n+1}\end{cases}
$$

For example, when $a_{1}, a_{2}, a_{3}, \cdots$ is the sequence $1,2,1,2,1,2, \ldots$ we have

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | $\cdots$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $a_{n}$ | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | $\cdots$ |
| $b_{n}$ | 1 | 3 | 2 | 4 | 3 | 1 | 2 | 4 | 3 | 1 | $\cdots$ |

(a) Suppose that $a_{n}=n^{2}$ for all $n \geq 1$. Determine the value of $b_{10}$.

(b) Suppose that $a_{n}=n$ for all $n \geq 1$. Determine all positive integers $n$ with $n<2015$ for which $b_{n}=1$.

(c) A sequence $x_{1}, x_{2}, x_{3}, \ldots$ is called eventually periodic if there exist positive integers $r$ and $p$ for which $x_{n+p}=x_{n}$ for all $n \geq r$.

Suppose that $a_{1}, a_{2}, a_{3}, \ldots$ is eventually periodic. Prove that $b_{1}, b_{2}, b_{3}, \ldots$ is eventually periodic.
