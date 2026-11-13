---
tag: CHMWJN4P2P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $k \geq 1$, we define $a_{k}$ as the integer that in base ten is written

$$
\begin{gathered}
\square k^{k} \\
a_{k}=11 \ldots 1
\end{gathered}
$$

(that is, a 1 repeated $k$ times). Prove that $a_{k}$ divides $a_{l}$ if and only if $k$ divides $l$.
