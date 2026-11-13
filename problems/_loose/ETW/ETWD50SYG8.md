---
tag: ETWD50SYG8
kind: problem
type: answer
answer: d_{BC}+d_{AC}+d_{AB}=R+r
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For example, $\triangle ABC$ is inscribed in a circle with radius $R$ and center $O$. If $O$ and $A$ are on the same side of line $BC$, let $d_{BC}$ be the distance from $O$ to $BC$; otherwise, $d_{BC}$ is the negative of the distance from $O$ to $BC$. The same applies to the others. If the inradius of $\triangle ABC$ is $r$, then $d_{BC} + d_{AC} + d_{AB} = R + r$.
