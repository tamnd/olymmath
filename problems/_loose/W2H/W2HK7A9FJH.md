---
tag: W2HK7A9FJH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are p ministers, each of whom has issued a (unique) decree. To acquaint everyone with the decrees, the ministers send each other telegrams. No two telegrams can be sent simultaneously. When a minister receives a telegram, he reads it immediately. When sending a telegram, a minister includes his decree, as well as all the other ministers' decrees known to him at that moment.

After sending a certain number of telegrams, it turned out that all ministers had acquainted themselves with all the decrees. In addition, no minister received any foreign decree more than once in a telegram. However, some ministers received telegrams that included their own decree among others. Prove that there were no fewer than $n-1$ such ministers.
