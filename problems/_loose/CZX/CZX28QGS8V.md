---
tag: CZX28QGS8V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 JBMO ShortLists
    url: https://artofproblemsolving.com/community/c6h374879
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25879
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226592
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2001
    source: hf-ai-mo-aops
    label: 2001 JBMO ShortLists
---
Find the positive integers $n$ that are not divisible by $3$ if the number $2^{n^2-10}+2133$ is a perfect cube.
