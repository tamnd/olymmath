---
tag: MZEP956SDG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h3062580
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1205
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204861
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 3
---
Given triangle $ABC$ with $A$ -excenter $I_A$ , the foot of the perpendicular from $I_A$ to $BC$ is $D$ . Let the midpoint of segment $I_AD$ be $M$ , $T$ lies on arc $BC$ (not containing $A$ ) satisfying $\angle BAT=\angle DAC$ , $I_AT$ intersects the circumcircle of $ABC$ at $S\neq T$ . If $SM$ and $BC$ intersect at $X$ , the perpendicular bisector of $AD$ intersects $AC,AB$ at $Y,Z$ respectively, prove that $AX,BY,CZ$ are concurrent.
