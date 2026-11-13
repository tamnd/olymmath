---
tag: AYJJP2HAJP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h426479
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6497
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-ai-mo-aops
    label: 2011 Harvard-MIT Mathematics Tournament
---
Nathaniel and Obediah play a game in which they take turns rolling a fair six-sided die and keep a
running tally of the sum of the results of all rolls made. A player wins if, after he rolls, the number on the running tally is a multiple of 7. Play continues until either player wins, or else indenitely. If Nathaniel goes first, determine the probability that he ends up winning.
