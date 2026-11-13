---
tag: NPKH628CMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
37-3 (F16, Romania) Let $S=\{0,1,2,3, \cdots\}$ be the set of all non-negative integers. Find all functions $f$ defined on $S$ and taking values in $S$ that satisfy the following condition:
$$
f(m+f(n))=f(f(m))+f(n)
$$
for all $m, n \in S$.
