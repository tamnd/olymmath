---
tag: FE81ZA8QWT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89818
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatian Mathematical Olympiad
---
Let $a, b$, and $c$ be positive real numbers. Prove that

$$
\frac{\sqrt{a+b+c}+\sqrt{a}}{b+c}+\frac{\sqrt{a+b+c}+\sqrt{b}}{c+a}+\frac{\sqrt{a+b+c}+\sqrt{c}}{a+b} \geqslant \frac{9+3 \sqrt{3}}{2 \sqrt{a+b+c}}
$$
