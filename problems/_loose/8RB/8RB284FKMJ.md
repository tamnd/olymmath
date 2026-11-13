---
tag: 8RB284FKMJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Six students sit in a group and chat during a complicated mathematical lecture. The professor, annoyed by the chatter, splits the group into two or more smaller groups. However, the smaller groups with at least two members continue to produce chatter, so the professor again chooses one noisy group and splits it into smaller groups. This process continues until the professor achieves the silence he needs to teach Algebraic Combinatorics. Suppose the procedure can be carried out in $N$ ways, where the order of group breaking matters (if A and B are disjoint groups, then breaking up group A and then B is considered different form breaking up group B and then A even if the resulting partitions are identical) and where a group of students is treated as an unordered set of people. Compute the remainder obtained when $N$ is divided by $2006$.
