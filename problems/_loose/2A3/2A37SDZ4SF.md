---
tag: 2A37SDZ4SF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734489
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16849
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Jay has a $24\times 24$ grid of lights, all of which are initially off. Each of the $48$ rows and columns has a switch that toggles all the lights in that row and column, respectively, i.e. it switches lights that are on to off and lights that are off to on. Jay toggles each of the $48$ rows and columns exactly once, such that after each toggle he waits for one minute before the next toggle. Each light uses no energy while off and 1 kiloJoule of energy per minute while on. To express his creativity, Jay chooses to toggle the rows and columns in a random order. Compute the expected value of the total amount of energy in kiloJoules which has been expended by all the lights after all $48$ toggles.

*Proposed by James Lin
