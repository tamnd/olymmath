---
tag: 3KJ2Z6WTSN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86098
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=79
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/2012
    source: hf-mathnet
    label: Spain Spanija 2012
---
Let $a, b$ and $c$ be the lengths of the sides of a triangle $ABC$. If

$$
b(a+b)(b+c)=a^{3}+b\left(a^{2}+c^{2}\right)+c^{3}
$$

prove that the measures of the angles $\widehat{A}, \widehat{B}, \widehat{C}$ satisfy the relation

$$
\frac{1}{\sqrt{A}+\sqrt{B}}+\frac{1}{\sqrt{B}+\sqrt{C}}=\frac{2}{\sqrt{C}+\sqrt{A}}
$$
