---
tag: RM9C6NTP57
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h465237
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8345
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210410
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
A convex 2012-gon $A_1A_2A_3 \dots A_{2012}$ has the property that for every integer $1 \le i \le 1006$ , $\overline{A_iA_{i+1006}}$ partitions the polygon into two congruent regions. Show that for every pair of integers $1 \le j < k \le 1006$ , quadrilateral $A_jA_kA_{j+1006}A_{k+1006}$ is a parallelogram.

*Proposed by Lewis Chen*
