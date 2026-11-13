---
tag: JM0JX3XR9J
kind: problem
type: answer
answer: \frac{162}{91}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218411
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A *smooth number* is a positive integer of the form $2^m 3^n$, where $m$ and $n$ are nonnegative integers. Let $S$ be the set of all triples $(a, b, c)$ where $a$, $b$, and $c$ are smooth numbers such that $\gcd(a, b)$, $\gcd(b, c)$, and $\gcd(c, a)$ are all distinct. Evaluate the infinite sum $\sum_{(a,b,c) \in S} \frac{1}{abc}$. Recall that $\gcd(x, y)$ is the greatest common divisor of $x$ and $y$.
