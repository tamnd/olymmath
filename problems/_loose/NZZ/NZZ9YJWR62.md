---
tag: NZZ9YJWR62
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13741
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an internet community of 20 participants, there are friends. Any two participants A and B are either friends themselves or there exists a chain

$\mathrm{A}-\mathrm{C}_{1}-\ldots-\mathrm{C}_{\mathrm{k}}-\mathrm{B}$

where adjacent participants in the chain are friends, that is, $\mathrm{C}_{1}$ is a friend of $\mathrm{A}, \mathrm{C}_{2}$ is a friend of $\mathrm{C}_{1}, \ldots$ and B is a friend of $\mathrm{C}_{\mathrm{k}}$. Prove that it is possible to select 6 participants from the community such that any of the remaining fourteen is either a friend or a friend of a friend of someone among these six.
