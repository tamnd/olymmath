---
tag: CKDXM7GYCQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2345
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77659
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Trouver tous les triplets de réels positifs ou nuls ( $\mathrm{a}, \mathrm{b}, \mathrm{c})$ tels que

$$
\left\{\begin{array}{l}
a^{2}+a b=c \\
b^{2}+b c=a \\
c^{2}+c a=b
\end{array}\right.
$$
