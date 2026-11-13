---
tag: D0HYJSWC02
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=2
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any two finite sets $X$ and $Y$ of positive integers, define:
(1) $f_X(1) = \min\{n : n \in \mathbb{N}, n \notin X\}$, where $\mathbb{N}$ denotes the set of all positive integers;
(2) $\forall k > 1$, $f_X(k) = \min\{n : n > f_X(k-1), n \notin X\}$;
(3) $X \star Y = X \cup \{f_X(y) : y \in Y\}$.

Let $a, b$ be positive integers, $A$ a set of $a$ positive integers, and $B$ a set of $b$ positive integers.
Prove: If $A \star B = B \star A$, then
$$
A \star (A \star \cdots \star (A \star (A \star A)) \cdots) = B \star (B \star \cdots \star (B \star (B \star B)) \cdots),
$$
where the left side has $b$ $A$'s and the right side has $a$ $B$'s.
