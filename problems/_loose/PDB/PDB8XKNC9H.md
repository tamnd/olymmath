---
tag: PDB8XKNC9H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h590970
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73864
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2001
    source: hf-ai-mo-aops
    label: 2001 Stanford Mathematics Tournament
---
You have 2 six-sided dice. One is a normal fair die, while the other has 2 ones, 2 threes, and 2 ﬁves. You pick a die and roll it. Because of some secret magnetic attraction of the unfair die, you have a 75% chance of picking the unfair die and a 25% chance of picking the fair die. If you roll a three, what is the probability that you chose the fair die?
