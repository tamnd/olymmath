---
tag: KHX2J7W0PS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h2123123
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19480
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221021
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Taiwan TST Round 1
---
Let $N>2^{5000}$ be a positive integer. Prove that if $1\leq a_1<\cdots<a_k<100$ are distinct positive integers then the number
$$\prod_{i=1}^{k}\left(N^{a_i}+a_i\right)$$
has at least $k$ distinct prime factors.

Note. Results with $2^{5000}$ replaced by some other constant $N_0$ will be awarded points depending on the value of $N_0$ .

*Proposed by Evan Chen*
