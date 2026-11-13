---
tag: HQEMAXZPGF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190286
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=29
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Macedonian Mathematical Competitions
---
Prove that in any triangle $ABC$ the following equality holds:

$$
\frac{\operatorname{tg} \alpha}{\operatorname{tg} \beta}=\frac{a^{2}+c^{2}-b^{2}}{b^{2}+c^{2}-a^{2}}
$$

( $a, b, c$ and $\alpha, \beta$ are the standard notations for the lengths of the sides and the measures of the angles of the triangle).
