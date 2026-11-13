---
tag: VX8C7SZT1E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77427
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=21
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France PRÉPARATION OLYMPIQUE FRANÇAISE DE MATHÉMATIQUES
---
Let $A B C$ be an acute triangle, and let $P$ be a point located inside the triangle $A B C$. Let $D$ be the midpoint of the segment $[P C]$, $E$ the intersection point of the lines $(A P)$ and $(B C)$, and $Q$ the intersection point of the lines $(B P)$ and $(D E)$. Show that, if the angles $\widehat{P A C}$ and $\widehat{P C B}$ are equal, then $\sin (\widehat{B C Q})=\sin (\widehat{B A P})$.
