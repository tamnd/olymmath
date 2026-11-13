---
tag: HCTW74MHWV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90228
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Acute triangle $A B C$ is made of solid metal, and it is on top of a wooden table. Points $P$ on $A B$ and $Q$ on $A C$ are such that the perpendicular to $A B$ through $P$ intersects the perpendicular to $A C$ through $Q$ inside the triangle. Nails are hammered into the table at $P$ and $Q$. (The nails do not go through the triangle but are at its edges, bounding the triangle.) Prove that there is a unique position $R$ on $B C$ such that, if a nail is hammered into the table at $R$, the triangle will no longer be able to move (within the plane of the table).
