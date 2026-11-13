---
tag: AGM53PYNMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2485129
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28110
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1990 Tournament Of Towns
---
A set of $61$ coins that look alike is given. Two coins (whose weights are equal) are counterfeit. The other $59$ (genuine) coins also have the same weight, but a different weight from that of the counterfeit coins. However it is not known whether it is the genuine coins or the counterfeit coins which are heavier. How can this question be resolved by three weighings on the one balance? (It is not required to separate the counterfeit coins from the genuine ones.)

(D. Fomin, Leningrad)
