---
tag: F4VBN13VSW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0002.parquet#row=183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt
    source: hf-mathnet
    label: United States Harvard-MIT Mathematics Tournament
---
Let $S=\{s_{0}, \ldots, s_{n}\}$ be a finite set of integers, and define $S+k=\{s_{0}+k, \ldots, s_{n}+k\}$. We say that $S$ and $T$ are equivalent, written $S \sim T$, if $T=S+k$ for some $k$. Given a (possibly infinite) set of integers $A$, we say that $S$ tiles $A$ if $A$ can be partitioned into subsets equivalent to $S$. Such a partition is called a tiling of $A$ by $S$.

Find all sets $S$ with minimum element $1$ that tile $A=\{1, \ldots, 12\}$.
