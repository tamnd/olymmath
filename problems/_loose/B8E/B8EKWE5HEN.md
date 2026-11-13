---
tag: B8EKWE5HEN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A town has $2 \mathrm{k}\left(\mathrm{k} \in \mathrm{Z}^{+}\right)$ people, and any two people are either friends or enemies. For some positive integer $\mathrm{t}$, each person has at most $\mathrm{t}$ enemies, and there exists one person who has exactly $\mathrm{t}$ enemies. If a group satisfies that any two people in the group are friends, then the group is called "friendly." It is known that there is no friendly group with more than $\mathrm{k}$ people, and all the people can be divided into two disjoint friendly groups, each with $\mathrm{k}$ people. Prove: the number of friendly groups with $\mathrm{k}$ people does not exceed $2^{\mathrm{k}-1}+2^{\mathrm{k}-\mathrm{t}}$.
