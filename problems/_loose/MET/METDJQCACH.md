---
tag: METDJQCACH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1999
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
Given two points $\mathrm{A}$ and $\mathrm{B}$, take $\mathrm{C}$ on the perpendicular bisector of $\mathrm{AB}$. Define the sequence $C_{1}, C_{2}, C_{3}, \ldots$ as follows. $C_{1}=C$. If $C_{n}$ is not on $A B$, then $C_{n+1}$ is the circumcenter of the triangle $\mathrm{ABC}_{\mathrm{n}}$. If $\mathrm{C}_{\mathrm{n}}$ lies on $\mathrm{AB}$, then $\mathrm{C}_{\mathrm{n}+1}$ is not defined and the sequence terminates. Find all points $\mathrm{C}$ such that the sequence is periodic from some point on.
