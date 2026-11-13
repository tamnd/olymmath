---
tag: MW150HQZA1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113535
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there are $p$ teams ($p \geqslant 5$) participating in a round-robin tournament (i.e., each pair of teams plays exactly one match). Also suppose:
(1) There are no ties in any match.
(2) For any two teams $x$ and $y$, if $x$ beats $y$, then among the remaining $p-2$ teams, the number of teams that beat $x$ and lose to $y$ is not less than the number of teams that beat $y$ and lose to $x$.
Prove that for any two teams $A$ and $B$, if $A$ beats $B$, then
(a) There must be two teams $C$ and $D$ such that the match results are: $B$ beats $C$, $C$ beats $D$, and $D$ beats $A$.
(b) The number of teams that beat $A$ plus the number of teams that lose to $B$ is not less than $p-2$.
