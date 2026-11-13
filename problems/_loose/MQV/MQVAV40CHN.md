---
tag: MQVAV40CHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ibero-American_Mathematical_Olympiad/train/0000.parquet#row=44
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero
    source: hf-mathnet
    label: Ibero-American Mathematical Olympiad Iberoamerican Mathematical Olympiad
---
We say that two non-negative integers are related if their sum uses only the digits $0$ and $1$. For example, $22$ and $79$ are related. Let $A$ and $B$ be two infinite sets of non-negative integers such that:

(1) if $a \in A$ and $b \in B$, then $a$ and $b$ are related,

(2) if $c$ is related to every member of $A$, then it belongs to $B$,

(3) if $c$ is related to every member of $B$, then it belongs to $A$.

Show that in one of the sets $A$, $B$ we can find an infinite number of pairs of consecutive numbers.
