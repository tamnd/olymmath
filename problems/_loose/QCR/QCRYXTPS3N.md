---
tag: QCRYXTPS3N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h86793
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22951
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1993
    source: hf-ai-mo-aops
    label: 1993 IberoAmerican
---
Two nonnegative integers $a$ and $b$ are *tuanis* if the decimal expression of $a+b$ contains only $0$ and $1$ as digits. Let $A$ and $B$ be two infinite sets of non negative integers such that $B$ is the set of all the *tuanis* numbers to elements of the set $A$ and $A$ the set of all the *tuanis* numbers to elements of the set $B$ . Show that in at least one of the sets $A$ and $B$ there is an infinite number of pairs $(x,y)$ such that $x-y=1$ .
