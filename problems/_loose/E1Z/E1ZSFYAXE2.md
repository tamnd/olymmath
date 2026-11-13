---
tag: E1ZSFYAXE2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339698
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14543
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216337
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Kevin is in first grade, so his teacher asks him to calculate $20+1\cdot 6+k$ , where $k$ is a real number revealed to Kevin. However, since Kevin is rude to his Aunt Sally, he instead calculates $(20+1)\cdot (6+k)$ . Surprisingly, Kevin gets the correct answer! Assuming Kevin did his computations correctly, what was his answer?

*Proposed by James Lin*
