---
tag: 5GRA8CQZPM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077907
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78514
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Let $ABC$ be a scalene triangle whose side lengths are positive integers. It is called *stable* if its three side lengths are multiples of 5, 80, and 112, respectively. What is the smallest possible side length that can appear in any stable triangle?

*Proposed by Evan Chen*
