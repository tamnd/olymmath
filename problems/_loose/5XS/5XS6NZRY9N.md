---
tag: 5XS6NZRY9N
kind: problem
type: answer
answer: \frac{2^n + 1}{2^n - 1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Let $G (n)$ be the number of $x_1,..., x_n, y_1,...,y_n \in \{0,1\}$, for which the number $x_1y_1 + x_2y_2 +...+ x_ny_n$ is even, and similarly let $U (n)$ be the number for which this sum is odd. Prove that $$\frac{G(n)}{U(n)}= \frac{2^n + 1}{2^n - 1}.$$
