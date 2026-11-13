---
tag: WYN5GWWA7B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h481893
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7567
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2012
    source: hf-ai-mo-aops
    label: 2012 All-Russian Olympiad
---
Given is a pyramid $SA_1A_2A_3\ldots A_n$ whose base is convex polygon $A_1A_2A_3\ldots A_n$ . For every $i=1,2,3,\ldots ,n$ there is a triangle $X_iA_iA_{i+1} $ congruent to triangle $SA_iA_{i+1}$ that lies on the same side from $A_iA_{i+1}$ as the base of that pyramid. (You can assume $a_1$ is the same as $a_{n+1}$ .) Prove that these triangles together cover the entire base.
