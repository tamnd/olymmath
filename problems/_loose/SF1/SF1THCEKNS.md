---
tag: SF1THCEKNS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $f: \mathbf{N} \rightarrow \mathbf{N}$ such that
$$
f(m+f(n))=f(f(m))+f(n)
$$

for all $m, n \in \mathbf{N}$. Prove: The range of $f$ is the set of all fixed points of $f$.
(Adapted from the 37th IMO problem)
