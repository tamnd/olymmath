---
tag: NXZQ7F1FCW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251023
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=243
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Let $a_1, a_2, a_3, a_4, a_5$ be nonzero real numbers. Prove that the polynomial $$P(x)= \prod_{k=0}^{4} a_{k+1}x^4 + a_{k+2}x^3 + a_{k+3}x^2 + a_{k+4}x + a_{k+5}$$, where $a_{5+i} = a_i$ for $i = 1,2, 3,4$, has a root with negative real part.
