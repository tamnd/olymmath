---
tag: 65JDENG86Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38423
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35722
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234233
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
For every permutation $ \tau$ of $ 1, 2, \ldots, 10$ , $ \tau = (x_1, x_2, \ldots, x_{10})$ , define $ S(\tau) = \sum_{k = 1}^{10} |2x_k - 3x_{k - 1}|$ . Let $ x_{11} = x_1$ . Find

**I.** The maximum and minimum values of $ S(\tau)$ .

**II.** The number of $ \tau$ which lets $ S(\tau)$ attain its maximum.

**III.** The number of $ \tau$ which lets $ S(\tau)$ attain its minimum.
