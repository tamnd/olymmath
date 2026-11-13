---
tag: SNQ4BABYKA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $\mathrm{n}$ lamps, numbered $1, 2, \ldots, n$, and $2^{\mathrm{n}}-1$ switches $\mathrm{B}_{1}, \mathrm{~B}_{2}, \ldots, \mathrm{B}_{2^{\mathrm{n}}-1}$. Each switch controls the on and off states of some of the lamps, and the sets of lamps controlled by any two different switches are distinct. It is unknown which switch corresponds to which set of lamps. Each operation is defined as pressing one of the switches, and after each operation, the state of all lamps can be observed. Initially, all the lamps are off. How many operations are needed at least to ensure that all the lamps are turned on?
