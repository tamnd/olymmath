---
tag: 5GBZ9FP0RJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a village with a finite number of people, the friendship relationship is mutual. Each person wears a black or white hat. We call a person $A$ undergoing a "blackening" as follows: if there exists a friend $B$ of $A$, $B$ wears a black hat, and among $B$'s friends, only $A$ wears a white hat, then $A$'s hat is changed to black; if such a $B$ does not exist, $A$'s hat color remains unchanged. Similarly, we can define "whitening".

Every morning, all the people in the village simultaneously blacken once, and every evening, all the people in the village simultaneously whiten once. Let $S_{i}$ be the set of all people wearing black hats at noon on the $i$-th day. Is there a village (with an arbitrary number of people and friendship relationships), an initial hat color, and a set $P$ of 2021 people in the village, such that for any subset $Q$ of $P$, there are infinitely many positive integers $i$ for which $S_{i} \cap P=Q$?
