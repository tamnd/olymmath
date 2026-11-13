---
tag: AEWPK9HSG2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0000.parquet#row=45
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union 4th ASU
---
Given $n$ odd and a set of integers $\{a_1\}$, $\{a_2\}$, ..., $\{a_n\}$, derive a new set $(\{a_1\} + \{a_2\}) / 2$, $(\{a_2\} + \{a_3\}) / 2$, ..., $(\{a_{n - 1}\} + \{a_n\}) / 2$, $(\{a_n\} + \{a_1\}) / 2$. However many times we repeat this process for a particular starting set we always get integers. Prove that all the numbers in the starting set are equal.

For example, if we started with $5, 9, 1$, we would get $7, 5, 3$, and then $6, 4, 5$, and then $5, 4, 5, 5.5$. The last set does not consist entirely of integers.
