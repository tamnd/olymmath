---
tag: N7WXM5SFTK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal F$ be the set of all continuous functions $f:[0,1]\to\mathbb R$ with the property
$$\left|\int^x_0\frac{f(t)}{\sqrt{x-t}}\text dt\right|\le1\enspace\text{for all }x\in(0,1].$$Compute $\sup_{f\in\mathcal F}\left|\int^1_0f(x)\text dx\right|$.
