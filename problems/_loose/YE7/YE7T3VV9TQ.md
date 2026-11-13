---
tag: YE7T3VV9TQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3045607
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54937
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2018
    source: hf-ai-mo-aops
    label: 2018 239 Open Mathematical Olympiad
---
On a straight road, points $1, 2, \ldots, n$ are marked. The distance between any two adjacent points is 1. A "placement" refers to the arrangement of $n$ cars, numbered with the same numbers, at the marked points (there can be multiple cars at one point). The "distance" between two placements is defined as the minimum total length of sections that need to be paved so that cars from the first placement can drive on the asphalt, forming the second one (cars can change places on the road). Prove that for any $\alpha<1$ , there exists an integer number $n$ for which there are $100^n$ placements, the pairwise distances between which are greater than $\alpha n$ .

*Proposed by Ilya Bogdanov*
