---
tag: HDTP3FJ6G4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define mapping $F : \mathbb{R}^4\rightarrow \mathbb{R}^4$ as $F(x,\ y,\ z,\ w)=(xy,\ y,\ z,\ w)$ and let mapping $f : S^3\rightarrow \mathbb{R}^4$ be restriction of $F$ to 3 dimensional ball $S^3=\{(x,\ y,\ z,\ w)\in{\mathbb{R}^4} | x^2+y^2+z^2+w^2=1\}$.
Find the rank of $df_p$, or the differentiation of $f$ at every point $p$ in $S^3$.
