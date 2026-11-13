---
tag: M66TYDXEPB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a group of $2n$ students, each student has exactly $3$ friends within the group. The friendships are mutual and for each two students $A$ and $B$ which are not friends, there is a sequence $C_1, C_2, ..., C_r$ of students such that $A$ is a friend of $C_1$, $C_1$ is a friend of $C_2$, et cetera, and $C_r$ is a friend of $B$.
Every student was asked to assess each of his three friendships with: "acquaintance", "friend" and "BFF". It turned out that each student either gave the same assessment to all of his friends or gave every assessment exactly once.
We say that a pair of students is in conflict if they gave each other different assessments. Let $D$ be the set of all possible values of the total number of conflicts.

Prove that $|D| \geq 3n$ with equality if and only if the group can be partitioned into two subsets such that each student is separated from all of his friends.
