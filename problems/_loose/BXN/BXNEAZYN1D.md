---
tag: BXNEAZYN1D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90316
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0006.parquet#row=457
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Give an example of a strictly increasing function $f: \mathbb{R} \rightarrow[0,1]$ with the property that

$$
f(x+y) \leq f(x)+f(y)
$$

for any real numbers $x$ and $y$.
