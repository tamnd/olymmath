---
tag: YPN2D3W79H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 ISL
    url: https://artofproblemsolving.com/community/c6h3610468
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25637
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/IMO/train/0000.parquet#row=363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/2024
    source: hf-ai-mo-aops
    label: 2024 ISL
  - at: isl/2024
    source: hf-mathnet
    label: IMO IMO2024 Shortlisted Problems
---
Let $ABC$ be a triangle with incentre $I$ , and let $\Omega$ be the circumcircle of triangle $BIC$ . Let $K$ be a point in the interior of segment $BC$ such that $\angle BAK < \angle KAC$ . The angle bisector of $\angle BKA$ intersects $\Omega$ at points $W$ and $X$ such that $A$ and $W$ lie on the same side of $BC$ , and the angle bisector of $\angle CKA$ intersects $\Omega$ at points $Y$ and $Z$ such that $A$ and $Y$ lie on the same side of $BC$ .

Prove that $\angle WAY = \angle ZAX$ .

*Proposed by David Brodsky, Uzbekistan*
