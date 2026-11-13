---
tag: JQEN646PSE
kind: problem
type: answer
answer: 4+2i,9+3i
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is the complex number $w=-3-i$. Determine all complex numbers of the form $z=n^{2}+n i$, where $n \in \mathbb{Z}$ and the following conditions are satisfied:

$$
\operatorname{Re}\left(\frac{z}{w}\right)<-0.4, \operatorname{Im}(z \cdot \bar{w})<4
$$
