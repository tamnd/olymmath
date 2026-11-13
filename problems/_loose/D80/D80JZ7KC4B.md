---
tag: D80JZ7KC4B
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The fifth question: If an infinite sequence of positive real numbers $\left\{x_{n}\right\}$ satisfies: $x_{0}=1, x_{i} \geq x_{i+1}(i \in N)$, then the sequence is called a "good sequence". Find the smallest constant $c$ such that there exists a "good sequence" $\left\{x_{n}\right\}$ satisfying: $\sum_{i=0}^{n} \frac{x_{i}^{2}}{x_{i+1}} \leq c$ for any positive integer $n$.
