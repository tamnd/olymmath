---
tag: MGE6NC2W9W
kind: problem
type: answer
answer: n(2n+1)\cdot2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106036
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\{1,2, \cdots, 2 n\}$, for each $A \subseteq S$ define a number.
$$
\beta_{A}=\left\{\begin{array}{ll}
\sum_{\alpha \in A}(-1)^{a} \cdot a^{2}, & A \neq \varnothing ; \\
0, & A=\varnothing .
\end{array}\right.
$$

Prove: $I=\sum_{A \subseteq S} \beta_{A}$.
