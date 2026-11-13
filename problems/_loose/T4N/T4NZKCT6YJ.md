---
tag: T4NZKCT6YJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178262
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Olimpiada Naţională de Matematică
---
Let $f: \mathbb{R} \rightarrow(0, \infty)$ be a continuous and periodic function. If 2 is a period of $f$, show that:

(a) $\int_{0}^{2} \frac{f(x+1)}{f(x)} \mathrm{d} x \geq 2$.

(b) $\int_{0}^{2} \frac{f(x+1)}{f(x)} \mathrm{d} x=2$ if and only if 1 is a period of $f$.
