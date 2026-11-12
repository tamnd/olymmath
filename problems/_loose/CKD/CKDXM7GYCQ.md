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
