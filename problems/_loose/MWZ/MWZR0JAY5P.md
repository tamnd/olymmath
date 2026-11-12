---
tag: MWZR0JAY5P
kind: problem
type: answer
answer: \frac{1}{2}(n-1)p
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two progressions:

$$
\begin{gathered}
a, a+b, a+2 b, \ldots, a+(n-1) b \\
a, a+c, a+2 c, \ldots, a+(n-1) c
\end{gathered}
$$

such that the $p$-th term of the first is equal to the $p^2$-th term of the second. Prove that the difference between the sums of $n$ terms of these progressions is equal to $\frac{1}{2} n p(n-1) c$.
