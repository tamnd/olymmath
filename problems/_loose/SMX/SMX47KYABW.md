---
tag: SMX47KYABW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h1626545
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61187
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Taiwan TST Round 3
---
There are $m$ real numbers $x_i \geq 0$ ( $i=1,2,...,m$ ), $n \geq 2$ , $\sum_{i=1}^{m} x_i=S$ . Prove that
$$
\sum_{i=1}^{m} \sqrt[n]{\frac{x_i}{S-x_i}} \geq 2,
$$
The equation holds if and only if there are exactly two of $x_i$ are equal(not equal to $0$ ), and the rest are equal to $0$ .
