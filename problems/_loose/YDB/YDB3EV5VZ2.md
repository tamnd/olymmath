---
tag: YDB3EV5VZ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179516
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=398
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
Consider triangle $ABC$, with $m(\widehat{A})>60^{\circ}$ and $m(\widehat{C})>30^{\circ}$. In the half-plane determined by line $BC$ that does not contain point $A$, points $D$ and $E$ are considered such that $m(\widehat{A B E})=m(\widehat{C B D})=90^{\circ}$ and $m(\widehat{B A E})=m(\widehat{B C D})=60^{\circ}$. Points $F$ and $H$ are the midpoints of segments $[A E]$ and $[C D]$, respectively, and $G$ is the intersection of lines $A C$ and $D E$. Show that:
a) $\triangle E B D \sim \triangle A B C$
b) $\triangle F G H \equiv \triangle A B C$
