---
tag: PYCZJE76R6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h555559
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9995
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Let $a$ , $b$ , $c$ , $d$ , $e$ be positive reals satisfying \begin{align*} a + b &= c a + b + c &= d a + b + c + d &= e.\end{align*} If $c=5$ , compute $a+b+c+d+e$ .

*Proposed by Evan Chen*
