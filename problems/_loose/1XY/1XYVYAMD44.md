---
tag: 1XYVYAMD44
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_1A_2A_3A_4A_5$ be a convex pentagon. Suppose rays
$A_2A_3$ and $A_5A_4$ meet at the point $X_1$. Define $X_2$, $X_3$, $X_4$, $X_5$ similarly. Prove that
$$ \prod_{i=1}^{5} X_iA_{i+2} = \prod_{i=1}^{5} X_iA_{i+3}$$
where the indices are taken modulo 5.
