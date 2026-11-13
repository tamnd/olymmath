---
tag: X8D1JZATK9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2038252
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28997
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2012 Tournament of Towns
---
There are $1 000 000$ soldiers in a line. The sergeant splits the line into $100$ segments (the length of different segments may be different) and permutes the segments (not changing the order of soldiers in each segment) forming a new line. The sergeant repeats this procedure several times (splits the new line in segments of the same lengths and permutes them in exactly the same way as the first time). Every soldier originally from the first segment recorded the number of performed procedures that took him to return to the first segment for the first time. Prove that at most $100$ of these numbers are different.
