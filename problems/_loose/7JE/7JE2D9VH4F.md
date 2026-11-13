---
tag: 7JE2D9VH4F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h226819
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24968
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225655
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1989
    source: hf-ai-mo-aops
    label: 1989 IMO Longlists
---
Let $ n > 1$ be a fixed integer. Define functions $ f_0(x) = 0,$ $ f_1(x) = 1 - \cos(x),$ and for $ k > 0,$ $$ f_{k+1}(x) = f_k(x) \cdot \cos(x) - f_{k-1}(x).$$ If $ F(x) = \sum^n_{r=1} f_r(x),$ prove that

**(a)** $ 0 < F(x) < 1$ for $ 0 < x < \frac{\pi}{n+1},$ and
**(b)** $ F(x) > 1$ for $ \frac{\pi}{n+1} < x < \frac{\pi}{n}.$
