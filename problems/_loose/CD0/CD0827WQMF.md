---
tag: CD0827WQMF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h2118754
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19493
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221032
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Taiwan TST Round 3
---
There are $N$ monsters, each with a positive weight. On each step, two of the monsters are merged into one, whose weight is the sum of weights for the two original monsters. At the end, all monsters will be merged into one giant monster. During this process, if at any mergence, one of the two monsters has a weight greater than $2.020$ times the other monster's weight, we will call this mergence **dangerous**. The dangerous level of a sequence of mergences is the number of dangerous mergence throughout its process.

Prove that, no matter how the weights being distributed among the monsters, "for every step, merge the lightest two monsters" is always one of the merging sequences that obtain the minimum possible dangerous level.

*Proposed by houkai*
