---
tag: H7AF5E1A8Z
kind: problem
type: answer
answer: 9a_{n}a_{n+1}+1=(a_{n}+a_{n+1})^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a sequence of real numbers $a_{1}, a_{2}, a_{3}, \ldots$ such that $a_{1}=1, a_{2}=7$ and

$$
a_{n+2}=\frac{a_{n+1}^{2}-1}{a_{n}} \text { for all } n \geq 1
$$

For example, $a_{3}=\frac{7^{2}-1}{1}=48$. Show that $9 a_{n} a_{n+1}+1$ is the square of an integer for all integers $n \geq 1$.
