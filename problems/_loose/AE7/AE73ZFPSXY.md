---
tag: AE73ZFPSXY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252985
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive reals $x,y,z$ satisfying $x+y+z=3$, prove that $$\sum_{cyc}\left( x^2+y^2+x^2y^2+\frac{y^2}{x^2}\right)\geq 4\sum_{cyc}\frac{y}{x}.$$

*Proposed by chengbilly.*
