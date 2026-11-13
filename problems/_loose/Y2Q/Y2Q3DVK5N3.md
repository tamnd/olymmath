---
tag: Y2Q3DVK5N3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177744
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0000.parquet#row=245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $a, b, c>0$, then

$$
\frac{a b}{3 a+4 b+5 c}+\frac{b c}{3 b+4 c+5 a}+\frac{c a}{3 c+4 a+5 b} \leq \frac{a+b+c}{12}
$$

Nikolai Nikolov
