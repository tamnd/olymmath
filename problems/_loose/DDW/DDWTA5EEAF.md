---
tag: DDWTA5EEAF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h367768
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3679
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2009
    source: hf-ai-mo-aops
    label: 2009 Iran MO (2nd Round)
---
Let $ ABC $ be a triangle and the point $ D $ is on the segment $ BC $ such that $ AD $ is the interior bisector of $ \angle A $ . We stretch $ AD $ such that it meets the circumcircle of $ \Delta ABC $ at $ M $ . We draw a line from $ D $ such that it meets the lines $ MB,MC $ at $ P,Q $ , respectively ( $ M $ is not between $ B,P $ and also is not between $ C,Q $ ).
Prove that $ \angle PAQ\geq\angle BAC $ .
