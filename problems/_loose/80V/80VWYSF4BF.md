---
tag: 80VWYSF4BF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244614
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=58
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo
    source: hf-mathnet
    label: South Africa South-Afrika 2011-2013
---
The circles $\Gamma_1$ and $\Gamma_2$ intersect at $D$ and $P$. The common tangent line of the two circles closest to point $D$ touches $\Gamma_1$ in A and $\Gamma_2$ in $B$. The line $AD$ intersects $\Gamma_2$ for the second time in $C$. Let $M$ be the midpoint of line segment $BC$. Prove that $\angle DPM = \angle BDC$.
