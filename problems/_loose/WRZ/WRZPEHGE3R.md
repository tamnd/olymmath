---
tag: WRZPEHGE3R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=83
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2008
    source: hf-mathnet
    label: India Indija TS 2008
---
Let $r$, $t$ and $a$ be three positive integers such that $r \le t$ and let
$$
A = \{1, 2, 3, \dots, r\}, B = \{a+r+1, a+r+2, a+r+3, \dots, a+r+t\}.
$$
For any set $P$ of integers and any integer $x$, we define $P + x = \{p + x : p \in P\}$, called the translate of $P$ by $x$.

a. If $r = t$, prove that $Z$ (the set of all integers) is a union of a certain class of mutually disjoint translates of $A \cup B$ if and only if $a = kr$ for some positive integer $k$.

b. If $r < t$, prove that $Z$ is a union of a certain class of mutually disjoint translates of $A \cup B$ if and only if $a = k(r + t)$ for some positive integer $k$.
