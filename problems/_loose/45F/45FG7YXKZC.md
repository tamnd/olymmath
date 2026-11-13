---
tag: 45FG7YXKZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77438
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that, for all real numbers $a, b, c > 0$ and any real number $t \geqslant 0$, we have

$$
\frac{a}{b+t c}+\frac{b}{c+t a}+\frac{c}{a+t b} \geqslant \frac{3}{1+t}
$$
