---
tag: Q583QYVHQN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217042
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=306
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest possible value of the nonnegative number $\lambda$ such that the inequality $$\frac{a+b}{2}\geq\lambda \sqrt{ab}+(1-\lambda )\sqrt{\frac{a^2+b^2}{2}}$$ holds for all positive real numbers $a, b$.
