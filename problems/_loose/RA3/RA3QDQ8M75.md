---
tag: RA3QDQ8M75
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
f_{1}=f_{2}=1, f_{n}=f_{n-1}+f_{n-2}, n>2 .
$$

Prove: There exist integers $a, b, m$ satisfying $0<a<m, 0<b<m$ such that $m \mid f_{n}-a n b^{n}$ for all positive integers $n$, and such a triplet is unique.
