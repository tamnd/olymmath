---
tag: VXETDN53KK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90943
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=94
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c, d, e, f$ be positive integers, each at least 2 , whose sum is $S$. Prove that

$$
a(a-1)+b(b-1)+c(c-1)+d(d-1)+e(e-1)+f(f-1) \leq(S-10)(S-11)+10 .
$$

When is equality achieved?
