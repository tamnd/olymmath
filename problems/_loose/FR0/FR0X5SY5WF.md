---
tag: FR0X5SY5WF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan Mathematics Olympiad
    url: https://artofproblemsolving.com/community/c6h3021144
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1183
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204839
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan Mathematics Olympiad
---
Let $n$ and $m$ be positive integers. The daycare nanny uses $n \times m$ square floor mats to construct an $n \times m$ rectangular area, with a baby on each of the mats. Each baby initially faces toward one side of the rectangle. When the nanny claps, all babies crawl one mat forward in the direction it is facing at, and then turn 90 degrees clockwise. If a baby crawls outside of the rectangle, it cries. If two babies simultaneously crawl onto the same
mat, they bump into each other and cry.

Suppose that it is possible for the nanny to arrange the initial direction of each baby so that, no matter how many times she claps, no baby would cry. Find all possible values of $n$ and $m$ .

*Proposed by Chu-Lan Kao*
