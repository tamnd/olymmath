---
tag: CKV2MYX0QB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89650
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatian Mathematical Olympiad
---
Prove that there do not exist natural numbers $m$ and $n$ such that

$$
5 m^{3}=27 n^{4}-2 n^{2}+n
$$
