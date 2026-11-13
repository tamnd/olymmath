---
tag: TKFM1CNKJN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250590
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=59
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions
---
Let $ABCD$ be a square of center $O$. The parallel to $AD$ through $O$ intersects $AB$ and $CD$ at $M$ and $N$ and a parallel to $AB$ intersects diagonal $AC$ at $P$. Prove that $$OP^4 + \left(\frac{MN}{2} \right)^4 = MP^2 \cdot NP^2$$
