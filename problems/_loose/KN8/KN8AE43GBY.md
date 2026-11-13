---
tag: KN8AE43GBY
kind: problem
type: answer
answer: k \leq \frac{1}{3\sqrt{3} \ln 3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207970
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the range of $ k$ for which the following inequality holds for $ 0\leq x\leq 1$.
$$ \int_0^x \frac {dt}{\sqrt {(3 + t^2)^3}}\geq k\int _0^x \frac {dt}{\sqrt {3 + t^2}}$$
If necessary, you may use $ \ln 3 = 1.10$.
