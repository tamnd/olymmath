---
tag: P9WSV8QKXW
kind: problem
type: answer
answer: (m, n) = (0, 1) \quad \text{and} \quad (-6, 7)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231771
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let

$$A=\left( \begin{array}{cc}

4 & -\sqrt{5} \\
2\sqrt{5} & -3

\end{array} \right) $$

Find all pairs of integers $m,n$ with $n \geq 1$ and $|m| \leq n$ such as all entries of $A^n-(m+n^2)A$ are integer.
