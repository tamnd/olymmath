---
tag: D780X2MGZT
kind: problem
type: answer
answer: f_{\text{min}} = 2 - \sqrt{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=\int_x^{x+\frac{\pi}{3}} |\sin \theta|\ d\theta$.

(1) Find $f'(x)$.

(2) Find the maximum and minimum value of $f(x)$ on $0\leq x\leq \pi.$
