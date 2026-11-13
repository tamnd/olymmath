---
tag: 7A3KV5CZE0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585528
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11653
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213610
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Let $b = \tfrac 12 (-1 + 3\sqrt{5})$ . Determine the number of rational numbers which can be written in the form $$ a_{2014}b^{2014} + a_{2013}b^{2013} + \dots + a_1b + a_0 $$ where $a_0, a_1, \dots, a_{2014}$ are nonnegative integers less than $b$ .

*Proposed by Michael Kural and Evan Chen*
