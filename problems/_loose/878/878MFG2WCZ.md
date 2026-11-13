---
tag: 878MFG2WCZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471726
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70597
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261884
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
Bill Gates and Jeff Bezos are playing a game. Each turn, a coin is flipped, and if Bill and Jeff have $m,n>0$ dollars, respectively, the winner of the coin toss will take $\min{(m,n)}$ from the loser. Given that Bill starts with $20$ dollars and Jeff starts with $21$ dollars, what is the probability that Bill ends up with all of the money?

*Proposed by Daniel Li*
