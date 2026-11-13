---
tag: R2XKNP9RKD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91213
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2019
    source: hf-mathnet
    label: Switzerland SMO 2019
---
Show that no function $f: \mathbb{Z} \rightarrow \mathbb{Z}$ exists such that it holds for all integers $m, n$:

$$
f(m+f(n))=f(m)-n
$$
