---
tag: B24KKWY6XC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85414
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{R} \rightarrow \mathbb{R}$ that satisfy

$$
f(x) f(y)=f(x+y)+x y
$$

for all $x, y \in \mathbb{R}$.
