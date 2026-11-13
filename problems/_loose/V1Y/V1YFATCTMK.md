---
tag: V1YFATCTMK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h498976
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8364
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2012
    source: hf-ai-mo-aops
    label: 2012 NIMO Problems
---
A square is called *proper* if its sides are parallel to the coordinate axes. Point $P$ is randomly selected inside a proper square $S$ with side length 2012. Denote by $T$ the largest proper square that lies within $S$ and has $P$ on its perimeter, and denote by $a$ the expected value of the side length of $T$ . Compute $\lfloor a \rfloor$ , the greatest integer less than or equal to $a$ .

*Proposed by Lewis Chen*
