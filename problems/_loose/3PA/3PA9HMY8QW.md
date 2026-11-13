---
tag: 3PA9HMY8QW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1981 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2927905
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39284
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1981
    source: hf-ai-mo-aops
    label: 1981 Bundeswettbewerb Mathematik
---
A sequence $a_1, a_2, a_3, \ldots $ is defined as follows: $a_1$ is a positive integer and $$ a_{n+1} = \left\lfloor \frac{3}{2} a_n \right\rfloor +1 $$ for all $n \in \mathbb{N}$ . Can $a_1$ be chosen in such a way that the first $100000$ terms of the sequence are even, but the $100001$ -th term is odd?
