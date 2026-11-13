---
tag: CHKZD6VN7Q
kind: problem
appearances:
  - at: pumac/2017/ca5
    primary: true
  - at: pumac/2017/cb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1564392
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15918
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
*Greedy Algorithms, Inc.* offers the following string-processing service. Each string submitted for processing has a starting price of $1$ dollar. The customer can then ask for any two adjacent characters in the string to be swapped. This may be done an arbitrary number of times, but each swap doubles the price for processing the string. Then the company returns the modified string and charges the customer $2^S$ dollars, where $S$ is the number of swaps executed. If a customer submits **all**permutations of the string $\text{PUMAC}$ for processing and wants all of the strings to be identical after processing, what is the lowest price, in dollars, she could pay?
