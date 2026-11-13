---
tag: EDSCRBJ4XR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any positive integer $n$, we have

$$
\prod_{k=1}^{n} \operatorname{lcm}\left(1,2, \ldots,\left\lfloor\frac{n}{k}\right\rfloor\right)=n !
$$
