---
tag: BA4FSADP3P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188490
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Macedonian Junior Mathematical Olympiad
---
Prove that for positive real numbers $a, b, c$ the inequality

$$
\left(16 a^{2}+8 b+17\right)\left(16 b^{2}+8 c+17\right)\left(16 c^{2}+8 a+17\right) \geq 2^{12}(a+1)(b+1)(c+1)
$$

holds. When does equality hold?
