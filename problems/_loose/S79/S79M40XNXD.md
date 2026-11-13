---
tag: S79M40XNXD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230534
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=11
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of polynomials $p(x),q(x)\in R[x]$ satisfying the equality $p(x^2)=p(x)q(1-x)+p(1-x)q(x)$ for all real $x$.

I.Voronovich
