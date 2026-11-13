---
tag: TYZ05QJ0MZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188011
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: mk
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Републички натпревар по математика за средно образование
---
Prove that for any positive real numbers $a, b, c$ the inequality holds

$$
\frac{9 b+4 c}{11 a^{2}}+\frac{9 c+4 a}{11 b^{2}}+\frac{9 a+4 b}{11 c^{2}} \geq \frac{1}{a}+\frac{1}{b}+\frac{1}{c}
$$
