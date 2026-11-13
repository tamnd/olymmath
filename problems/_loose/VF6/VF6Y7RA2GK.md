---
tag: VF6Y7RA2GK
kind: problem
type: answer
answer: f(n)=n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $f: \mathbb{N}^{*} \longrightarrow \mathbb{N}^{*}$ such that $\forall m, n$ :

$$
f\left(f(m)^{2}+2 f(n)^{2}\right)=m^{2}+2 n^{2}
$$
