---
tag: B9DN6RHA5Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h2940283
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34075
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232976
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2022
    source: hf-ai-mo-aops
    label: 2022 Canadian Mathematical Olympiad Qualification
---
Alice has four boxes, $327$ blue balls, and $2022$ red balls. The blue balls are labeled $1$ to $327$ . Alice first puts each of the balls into a box, possibly leaving some boxes empty. Then, a random label between $1$ and $327$ (inclusive) is selected, Alice finds the box the ball with the label is in, and selects a random ball from that box. What is the maximum probability that she selects a red ball?
