---
tag: TYXZX5G6H9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75047
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=27
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 62nd Czech and Slovak Mathematical Olympiad
---
Two circles $k_{1}\left(S_{1}, r_{1}\right)$ and $k_{2}\left(S_{2}, r_{2}\right)$ touch each other externally and lie in a square $A B C D$ with side $a$ such that $k_{1}$ touches sides $A D$ and $C D$ and $k_{2}$ touches sides $B C$ and $C D$. Prove that at least one of the triangles $A S_{1} S_{2}, B S_{1} S_{2}$ has an area of at most $\frac{3}{16} a^{2}$.
