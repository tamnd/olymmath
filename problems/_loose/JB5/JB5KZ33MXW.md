---
tag: JB5KZ33MXW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let integer $n \geqslant 2$, for any permutation $\sigma=(\sigma(1), \sigma(2), \cdots, \sigma(n))$ of $\{1,2, \cdots, n\}$, denote $S=\{\sigma \mid \sigma(i) \neq i$, $i=1,2, \cdots, n\}$, find the value of $\min _{\sigma \in S} \sum_{i=1}^{n}|\sigma(i)-i|$, and calculate the number of permutations $\sigma$ that achieve this minimum value.
