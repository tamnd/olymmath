---
tag: 2T1K9NDCD6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1814864
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18138
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219713
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
In triangle $ABC$ , $BC=3, CA=4$ , and $AB=5$ . For any point $P$ in the same plane as $ABC$ , define $f(P)$ as the sum of the distances from $P$ to lines $AB, BC$ , and $CA$ . The area of the locus of $P$ where $f(P)\leq 12$ is $\frac{m}{n}$ for relatively prime positive integers $m$ and $n$ . Compute $100m+n$ .

*Proposed by Yannick Yao*
