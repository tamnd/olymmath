---
tag: G8CHS2YJ9R
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $s_{1}=2^{2010}$. For $n>2$, define
$$
s_{n+1}=\left\{\begin{array}{ll}
\log _{\sqrt{2}} s_{n}, & s_{n}>0 \\
0, & s_{n} \leq 0
\end{array}\right.
$$

Find the smallest $n$ such that $s_{n} \in[4,6]$.
