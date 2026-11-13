---
tag: HDHDE949WH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Serbia National Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2560875
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20480
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rs-smo/2021
    source: hf-ai-mo-aops
    label: 2021 Serbia National Math Olympiad
---
In a triangle $ABC$ , let $AB$ be the shortest side. Points $X$ and $Y$ are given on the circumcircle of $\triangle ABC$ such that $CX=AX+BX$ and $CY=AY+BY$ . Prove that $\measuredangle XCY<60^{o}$ .
