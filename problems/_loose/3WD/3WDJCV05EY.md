---
tag: 3WDJCV05EY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h380218
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44015
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1991
    source: hf-ai-mo-aops
    label: 1991 Iran MO (2nd round)
---
Triangle $ABC$ is inscribed in circle $C.$ The bisectors of the angles $A,B$ and $C$ meet the circle $C$ again at the points $A', B', C'$ . Let $I$ be the incenter of $ABC,$ prove that
$$\frac{IA'}{IA} + \frac{IB'}{IB}+\frac{IC'}{IC} \geq 3$$$$, IA'+IB'+IC' \geq IA+IB+IC$$
