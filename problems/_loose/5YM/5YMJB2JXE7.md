---
tag: 5YMJB2JXE7
kind: problem
type: answer
answer: \frac{3+\sqrt{3}}{9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126239
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=12
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Let $x, y, z$ be positive real numbers, prove that:
$$
\frac{x y z\left(x+y+z+\sqrt{x^{2}+y^{2}+z^{2}}\right)}{\left(x^{2}+y^{2}+z^{2}\right)(y z+z x+x y)} \leqslant \frac{3+\sqrt{3}}{9} \text {. }
$$
