---
tag: YY1X0D0RHY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h3033414
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1186
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204842
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 1
---
Given some monic polynomials $P_1, \ldots, P_n$ with real coefficients, for any real number $y$ , let $S_y$ be the set of real number $x$ such that $y = P_i(x)$ for some $i = 1, 2, ..., n$ . If the sets $S_{y_1}, S_{y_2}$ have the same size for any two real numbers $y_1, y_2$ , show that $P_1, \ldots, P_n$ have the same degree.
*Proposed by usjl*
