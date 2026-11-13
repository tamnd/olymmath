---
tag: X3KERP44QB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h500631
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8472
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210536
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
Let $ABC$ be a triangle with $AB = 4024$ , $AC = 4024$ , and $BC=2012$ . The reflection of line $AC$ over line $AB$ meets the circumcircle of $\triangle{ABC}$ at a point $D\ne A$ . Find the length of segment $CD$ .

*Ray Li.*
