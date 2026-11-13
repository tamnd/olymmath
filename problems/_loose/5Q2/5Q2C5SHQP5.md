---
tag: 5Q2C5SHQP5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2522174
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39135
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/2000
    source: hf-ai-mo-aops
    label: 2000 French Mathematical Olympiad
---
We are given $b$ white balls and $n$ black balls ( $b,n>0$ ) which are to be distributed among two urns, at least one in each. Let $s$ be the number of balls in the first urn, and $r$ the number of white ones among them. One randomly chooses an urn and randomly picks a ball from it.

(a) Compute the probability $p$ that the drawn ball is white.
(b) If $s$ is fixed, for which $r$ is $p$ maximal?
(c) Find the distribution of balls among the urns which maximizes $p$ .
(d) Give a generalization for larger numbers of colors and urns.
