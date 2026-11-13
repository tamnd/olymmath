---
tag: TXCNZVJYTF
kind: problem
type: answer
answer: \frac{O_{n}}{E_{n}}=\frac{2^{n}-1}{2^{n}+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer and $\left(x_{1}, x_{2}, \ldots, x_{2 n}\right), x_{i}=0$ or $1, i=1,2, \ldots, 2 n$ be a sequence of $2 n$ integers. Let $S_{n}$ be the sum
$$
S_{n}=x_{1} x_{2}+x_{3} x_{4}+\cdots+x_{2 n-1} x_{2 n} .
$$

If $O_{n}$ is the number of sequences such that $S_{n}$ is odd and $E_{n}$ is the number of sequences such that $S_{n}$ is even, prove that
$$
\frac{O_{n}}{E_{n}}=\frac{2^{n}-1}{2^{n}+1} .
$$
