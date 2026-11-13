---
tag: PX6SN5PRX1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h357598
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5991
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2010
    source: hf-ai-mo-aops
    label: 2010 Tuymaada Olympiad
---
Let $ABC$ be a triangle, $I$ its incenter, $\omega$ its incircle, $P$ a point such that $PI\perp BC$ and $PA\parallel BC$ , $Q\in (AB), R\in (AC)$ such that $QR\parallel BC$ and $QR$ tangent to $\omega$ .
Show that $\angle QPB = \angle CPR$ .
