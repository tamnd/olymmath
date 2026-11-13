---
tag: KGYVNX8EDH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h392375
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5957
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
The exchange rate in a Funny-Money machine is $s$ McLoonies for a Loonie or $\frac{1}{s}$ Loonies for a McLoonie, where $s$ is a positive real number. The number of coins returned is rounded off to the nearest integer. If it is exactly in between two integers, then it is rounded up to the greater integer. $(a)$ Is it possible to achieve a one-time gain by changing some Loonies into McLoonies and changing all the McLoonies back to Loonies? $(b)$ Assuming that the answer to $(a)$ is "yes", is it possible to achieve multiple gains by repeating this procedure, changing all the coins in hand and back again each time?
