---
tag: XSH7CNT22T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90530
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=411
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that, for positive integers $n$ and $m$,

$$
\operatorname{gcd}\left(2^{m}-1,2^{n}-1\right)=2^{\operatorname{gcd}(m, n)}-1
$$
