---
tag: QXY3BFHV65
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1947341
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18181
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219756
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
An ant starts at the origin of the Cartesian coordinate plane. Each minute it moves randomly one unit in one of the directions up, down, left, or right, with all four directions being equally likely; its direction each minute is independent of its direction in any previous minutes. It stops when it reaches a point $(x,y)$ such that $|x|+|y|=3$ . The expected number of moves it makes before stopping can be expressed as $\frac{m}{n}$ for relatively prime positive integers $m$ and $n$ . Compute $100m+n$ .

*Proposed by Yannick Yao*
