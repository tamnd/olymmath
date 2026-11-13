---
tag: VGTAY4ECWR
kind: problem
type: answer
answer: (56,59),(57,58),(58,57),(59,56),(60,64),(61,63),(62,62),(63,61),(64,60)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs $(m, n)$ of natural numbers for which

$$
m+s(n)=n+s(m)=70
$$

where $s(a)$ denotes the sum of the digits of the natural number $a$.

(Jaroslav Švrček)
