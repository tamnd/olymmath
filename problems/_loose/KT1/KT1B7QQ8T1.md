---
tag: KT1B7QQ8T1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179936
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 67th Romanian Mathematical Olympiad
---
Let $A, B, C, D \in \mathcal{M}_{n}(\mathbb{C}), n \geq 2$ and $k \in \mathbb{R}$ such that $A C+k B D=I_{n}$ and $A D=B C$. Prove that $C A+k D B=I_{n}$ and $D A=C B$.
