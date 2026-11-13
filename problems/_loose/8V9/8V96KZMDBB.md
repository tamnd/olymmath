---
tag: 8V96KZMDBB
kind: problem
type: answer
answer: "2003"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $p$ is a prime number, $n$ is a positive integer, and non-negative integers $a_{0}, a_{1}, \cdots, a_{n}$ are all less than $p$, and satisfy
$$
\left\{\begin{array}{l}
a_{1}+a_{2}+\cdots+a_{n}=13, \\
a_{0}+a_{1} p+\cdots+a_{n} p^{n}=2015 .
\end{array}\right.
$$

Find the prime number $p$.
