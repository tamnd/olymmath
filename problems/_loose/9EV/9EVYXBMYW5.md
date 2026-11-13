---
tag: 9EVYXBMYW5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206976
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Let $ G$ be a group such that if $ a,b\in \mathbb{G}$ and $ a^2b=ba^2$, then $ ab=ba$.

i)If $ G$ has $ 2^n$ elements, prove that $ G$ is abelian.

ii) Give an example of a non-abelian group with $ G$'s property from the enounce.
