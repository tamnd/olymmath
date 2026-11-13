---
tag: 5PP04G5FJX
kind: problem
type: answer
answer: c = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $c \ge 2$ be a fixed integer. Let $a_1 = c$ and for all $n \ge 2$ let $a_n = c \cdot \phi (a_{n-1})$. What are the numbers $c$ for which sequence $(a_n)$ will be bounded?

$\phi$ denotes Euler's Phi Function, meaning that $\phi (n)$ gives the number of integers within the set $\{1, 2, . . . , n\}$ that are relative primes to $n$. We call a sequence $(x_n)$ bounded if there exist a constant $D$ such that $|x_n| < D$ for all positive integers $n$.
