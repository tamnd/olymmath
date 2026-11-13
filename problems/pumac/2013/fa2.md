---
tag: 1B0H8J04RB
kind: problem
appearances:
  - at: pumac/2013/fa2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_FinalsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563010
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10137
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\gamma$ be the incircle of $\triangle ABC$ (i.e. the circle inscribed in $\triangle ABC$ ) and $I$ be the center of $\gamma$ . Let $D$ , $E$ and $F$ be the feet of the perpendiculars from $I$ to $BC$ , $CA$ , and $AB$ respectively. Let $D'$ be the point on $\gamma$ such that $DD'$ is a diameter of $\gamma$ . Suppose the tangent to $\gamma$ through $D$ intersects the line $EF$ at $P$ . Suppose the tangent to $\gamma$ through $D'$ intersects the line $EF$ at $Q$ . Prove that $\angle PIQ + \angle DAD' = 180^{\circ}$ .
