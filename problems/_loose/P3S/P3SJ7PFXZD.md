---
tag: P3SJ7PFXZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250695
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=275
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
Let $a_1 \ge a_2 \ge ... \ge a_n > 0$ be real numbers. Prove that
$$a_1a_2(a_1 - a_2) + a_2a_3(a_2 - a_3) +...+ a_{n-1}a_n(a_{n-1} - a_n) \ge a_1a_n(a_1 - a_n)$$
