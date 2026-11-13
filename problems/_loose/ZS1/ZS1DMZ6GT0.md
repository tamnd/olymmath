---
tag: ZS1DMZ6GT0
kind: problem
type: answer
answer: (sqrt(6), sqrt(6), sqrt(6))
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(x, y, z)$ of positive real numbers $x$, $y$, $z$ for which the triples
$$
(23x + 24y + 25z, 23y + 24z + 25x, 23z + 24x + 25y)
$$
and
$$
(x^5 + y^5, y^5 + z^5, z^5 + x^5)
$$
are permutations of each other.
