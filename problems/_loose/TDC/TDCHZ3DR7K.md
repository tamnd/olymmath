---
tag: TDCHZ3DR7K
kind: problem
type: answer
answer: (kx,ky,kz),k\in\mathbb{N}^{*},x,y,z
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triplets of integers $(x, y, z)$ satisfying the following property:

$$
\operatorname{gcd}(x, y, z) < \operatorname{gcd}(x+y, y+z, z+x)
$$
