---
tag: DGX4DRSB6V
kind: problem
type: answer
answer: DE^{2}=DP\cdotPE
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90236
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Equilateral triangle $A B C$ is inscribed in a circle. Let $D$ be the midpoint of $A B$, and let $E$ be the midpoint of $A C$. The ray $\overrightarrow{D E}$ meets the circle at $P$. Prove that $D E^{2}=D P \cdot P E$.
