---
tag: YXF6MF68YS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h446301
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40567
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2008
    source: hf-ai-mo-aops
    label: 2008 Greece National Olympiad
---
A computer generates all pairs of real numbers $x, y \in (0, 1)$ for which the numbers $a = x+my$ and $b = y+mx$ are both integers, where $m$ is a given positive integer. Finding one such pair $(x, y)$ takes $5$ seconds. Find $m$ if the computer needs $595$ seconds to find all possible ordered pairs $(x, y)$ .
