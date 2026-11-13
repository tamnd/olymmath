---
tag: ZNFTMSPXBJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A team contest between $n$ participants is to be held. Each of these participants has exactly $k$ enemies among the other participants. (If $A$ is an enemy of $B$, then $B$ is an enemy of $A$. Nobody is his own enemy.) Assume that there are no three participants such that every two of them are enemies of each other.

A *subversive enmity* will mean an (un-ordered) pair of two participants which are enemies of each other and which belong to one and the same team. Show that one can divide the participants into two teams such that the number of subversive enmities is $\leq\frac{k\left(n-2k\right)}{2}$. (The teams need not be of equal size.)

*Note.* The actual source of this problem is:
Glenn Hopkins, William Staton, *Maximal Bipartite Subgraphs*, Ars Combinatoria 13 (1982), pp. 223-226.
