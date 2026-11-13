---
tag: YPKH0BCDNT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88604
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2011
    source: hf-mathnet
    label: Croatia Hrvatska 2011
---
Let $P_{1}, P_{2}, \ldots, P_{2 n}$ be a permutation of the vertices of a regular $2 n$-gon.

Prove that the closed polygonal line consisting of the segments

$$
\overline{P_{1} P_{2}}, \overline{P_{2} P_{3}}, \ldots, \overline{P_{2 n-1} P_{2 n}}, \overline{P_{2 n} P_{1}}
$$

contains at least one pair of parallel segments.
