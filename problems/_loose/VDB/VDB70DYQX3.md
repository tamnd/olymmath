---
tag: VDB70DYQX3
kind: problem
type: answer
answer: "32"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An 8-by-8 square is divided into 64 unit squares in the usual way. Each unit square is colored black or white. The number of black unit squares is even. We can take two adjacent unit squares (forming a 1-by-2 or 2-by-1 rectangle), and flip their colors: black becomes white and white becomes black. We call this operation a *step*. If $C$ is the original coloring, let $S(C)$ be the least number of steps required to make all the unit squares black. Find with proof the greatest possible value of $S(C)$.
