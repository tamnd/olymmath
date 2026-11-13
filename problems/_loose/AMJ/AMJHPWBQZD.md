---
tag: AMJHPWBQZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h494346
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8347
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210412
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
A set of lattice points is called *good* if it does not contain two points that form a line with slope $-1$ or slope $1$ . Let $S = \{(x, y)\ |\ x, y \in \mathbb{Z}, 1 \le x, y \le 4\}$ . Compute the number of non-empty good subsets of $S$ .

*Proposed by Lewis Chen*
