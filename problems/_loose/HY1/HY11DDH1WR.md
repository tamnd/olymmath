---
tag: HY11DDH1WR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1528859
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25946
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226655
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2007
    source: hf-ai-mo-aops
    label: 2007 JBMO Shortlist
---
Let $n > 1$ be a positive integer and $p$ a prime number such that $n | (p - 1) $ and $p | (n^6 - 1)$ . Prove that at least one of the numbers $p- n$ and $p + n$ is a perfect square.
