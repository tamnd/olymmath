---
tag: ZAA8AERZ09
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83303
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all continuous functions $f: \mathbb{R}_{+}^{*} \rightarrow\left[1,+\infty\left[\right.\right.$ such that $\forall(n, x) \in \mathbb{N} \times \mathbb{R}_{+}^{*}$,

$$
\prod_{k=1}^{n} f(k x)<2010 n^{2010}
$$
