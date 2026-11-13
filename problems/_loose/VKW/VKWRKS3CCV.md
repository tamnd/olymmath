---
tag: VKWRKS3CCV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Flanders Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2984023
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31722
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230920
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: be-vwo/2022
    source: hf-ai-mo-aops
    label: 2022 Flanders Math Olympiad
---
Arne has $2n + 1$ tickets. Each card has one number on it. One card has the number $0$ on it. The natural numbers $1, 2, . . . , n$ occur on exactly two cards each. Prove that Arne can arrange cards in a row so that there are exactly $m$ cards between the two cards with the number $m$ , for every $m \in \{1, 2, . . . , n\}$ .
