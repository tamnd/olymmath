---
tag: CP6SY5NE90
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38425
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35723
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1999
    source: hf-ai-mo-aops
    label: 1999 China Team Selection Test
---
For a fixed natural number $m \geq 2$ , prove that

**a.)** There exists integers $x_1, x_2, \ldots, x_{2m}$ such that $$x_i x_{m + i} = x_{i + 1} x_{m + i - 1} + 1, i = 1, 2, \ldots, m \hspace{2cm}(*)$$

**b.)** For any set of integers $\lbrace x_1, x_2, \ldots, x_{2m}$ which fulfils (*), an integral sequence $\ldots, y_{-k}, \ldots, y_{-1}, y_0, y_1, \ldots, y_k, \ldots$ can be constructed such that $y_k y_{m + k} = y_{k + 1} y_{m + k - 1} + 1, k = 0, \pm 1, \pm 2, \ldots$ such that $y_i = x_i, i = 1, 2, \ldots, 2m$ .
