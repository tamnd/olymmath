---
tag: G34CDE5R1W
kind: problem
type: answer
answer: p^{2}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84912
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a fixed prime number. We consider four integers $a, b, c, d \in \mathbb{Z}$ and a sequence $\left(x_{n}\right)$ such that:

$$
\left\{\begin{array}{l}
x_{0}=c \\
x_{1}=d \\
x_{n+2}=a x_{n+1}+b x_{n} n \geq 0
\end{array}\right.
$$

Let $t_{p}$ be the smallest integer such that $x_{n+t_{p}} \equiv x_{n}(\bmod p)$ for all $n \geq p^{2}$ (we set $t_{p}=+\infty$ if such an integer does not exist). What is the largest possible value of $t_{p}$?
