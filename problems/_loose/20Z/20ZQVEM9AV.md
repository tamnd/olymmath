---
tag: 20ZQVEM9AV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h2820940
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61171
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Taiwan TST Round 2
---
Let $N>s$ be positive integers. Electricity park has a number of buildings; exactly $N$ of them are power plants, and another one of them is the headquarter. Some pairs of buildings have one-way power cables between them, satisfying:
(i) The cables connected to a power plant will only send the power out of the plant.
(ii) For each non-headquarter building, there is a unique sequence of cables that can transport the power from that building to the headquarter.
A building is **$s$ -electrifed** if, after removing any one cable from the park, the building can still receive power from at least $s$ different power plants. Find the maximum possible number of $s$ -electrifed buildings.

*Note: There seems to be confusion about whether a power plant is $1$ -electrified. For the sake of simplicity let's say that any power plant is not $s$ -electrified for any $s\geq 1$ .*

*Proposed by usjl*
