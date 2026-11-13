---
tag: KCJ1GR7PZB
kind: problem
type: answer
answer: a = b = c = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=88
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
Let $n$ be a fixed positive integer. Find all triples $(a, b, c)$ of integers satisfying the following system of equations:
$$
\begin{cases}
a^{n+3} + b^{n+2}c + c^{n+1}a^2 + a^n b^3 = 0 \\
b^{n+3} + c^{n+2}a + a^{n+1}b^2 + b^n c^3 = 0 \\
c^{n+3} + a^{n+2}b + b^{n+1}c^2 + c^n a^3 = 0
\end{cases}
$$
