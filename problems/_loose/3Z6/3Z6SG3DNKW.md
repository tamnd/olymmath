---
tag: 3Z6SG3DNKW
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate, with proof, the last digit of

$$
3^{3^{3^{3^{3}}}}
$$

Remark. Note that this means $3^{\wedge}\left(3^{\wedge}\left(3^{\wedge}\left(3^{\wedge} 3\right)\right)\right)$, not $\left(\left(\left(3^{\wedge} 3\right)^{\wedge} 3\right)^{\wedge} 3\right)^{\wedge} 3$.
