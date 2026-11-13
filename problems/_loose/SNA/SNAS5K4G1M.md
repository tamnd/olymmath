---
tag: SNAS5K4G1M
kind: problem
type: answer
answer: "1004"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237619
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ \theta_1, \theta_2,\ldots , \theta_{2008}$ be real numbers. Find the maximum value of

$ \sin\theta_1\cos\theta_2 + \sin\theta_2\cos\theta_3 + \ldots + \sin\theta_{2007}\cos\theta_{2008} + \sin\theta_{2008}\cos\theta_1$
