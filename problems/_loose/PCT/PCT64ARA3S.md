---
tag: PCT64ARA3S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2964372
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39367
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236667
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1992
    source: hf-ai-mo-aops
    label: 1992 Bundeswettbewerb Mathematik
---
A finite set $\{a_1, a_2, ... a_k\}$ of positive integers with $a_1 < a_2 < a_3 < ... < a_k$ is named *alternating* if $i+a$ for $i = 1, 2, 3, ..., k$ is even. The empty set is also considered to be alternating. The number of alternating subsets of $\{1, 2, 3,..., n\}$ is denoted by $A(n)$ .
Develop a method to determine $A(n)$ for every $n \in N$ and calculate hence $A(33)$ .
