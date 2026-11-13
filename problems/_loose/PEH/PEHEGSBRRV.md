---
tag: PEHEGSBRRV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h460005
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8417
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
Suppose $x,y,z$ , and $w$ are positive reals such that
$$ x^2 + y^2 - \frac{xy}{2} = w^2 + z^2 + \frac{wz}{2} = 36 $$ $$ xz + yw = 30. $$ Find the largest possible value of $(xy + wz)^2$ .

*Author: Alex Zhu*
