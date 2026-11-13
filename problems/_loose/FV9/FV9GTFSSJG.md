---
tag: FV9GTFSSJG
kind: problem
type: answer
answer: n\in{1,2,3,4,5,6,7}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88570
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all natural numbers $n$ for which

$$
\frac{(9!n!)^{2}-(8!(n+1)!)^{2}}{(9!n!)^{2}-18 \cdot(8!)^{2} n!(n+1)!+(8!(n+1)!)^{2}}>0
$$
