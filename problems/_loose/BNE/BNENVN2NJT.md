---
tag: BNENVN2NJT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85334
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0000.parquet#row=224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive number $n$, we write $d(n)$ for the number of positive divisors of $n$. Determine all positive integers $k$ for which there exist positive integers $a$ and $b$ with the property

$$
k=d(a)=d(b)=d(2 a+3 b)
$$
