---
tag: QRSP9MMAV0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h397009
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24376
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225061
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1982
    source: hf-ai-mo-aops
    label: 1982 IMO Longlists
---
Given $n$ points $X_1,X_2,\ldots, X_n$ in the interval $0 \leq X_i \leq 1, i = 1, 2,\ldots, n$ , show that there is a point $y, 0 \leq y \leq 1$ , such that
$$\frac{1}{n} \sum_{i=1}^{n} | y - X_i | = \frac 12.$$
