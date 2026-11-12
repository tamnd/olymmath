---
tag: 1DNCDBMQKE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each real number $x$ is associated with a real number $A(x)$. It is known that for any $x$ and $y$:
a)

$$
\begin{aligned}
A(x+y) & =A(x)+A(y) \\
A(x y) & =A(x) \cdot A(y) .
\end{aligned}
$$

Prove that either $A(x)=x$, or $A(x)=0$.
