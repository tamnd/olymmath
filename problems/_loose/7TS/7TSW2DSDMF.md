---
tag: 7TSW2DSDMF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250837
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $ABC$ be an acute nonisosceles triangle with incenter $I$ and $(d)$ is an arbitrary line tangent to $(I)$ at $K$. The lines passes through $I$, perpendicular to $IA, IB, IC$ cut $(d)$ at $A_1, B_1,C_1$ respectively. Suppose that $(d)$ cuts $BC, CA, AB$ at $M,N, P$ respectively. The lines through $M,N,P$ and respectively parallel to the internal bisectors of $A, B, C$ in triangle $ABC$ meet each other to define a triange $XYZ$. Prove that three lines $AA_1, BB_1, CC_1$ are concurrent and $IK$ is tangent to the circle $(XY Z)$
