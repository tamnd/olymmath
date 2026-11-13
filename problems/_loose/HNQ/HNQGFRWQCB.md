---
tag: HNQGFRWQCB
kind: problem
type: answer
answer: 2^{n(n-1)/2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Let $A = \{a_1, a_2, \dots, a_n\}$ be a set of positive integers with $n \ge 1$ elements. The set $A$ is called good if, for any two distinct subsets $X$ and $Y$ of $A$ (i.e., $X \neq Y$), the difference $S(X) - S(Y)$ is not divisible by $2^n$. Here, $S(X) = \sum_{a \in X} a$ denotes the sum of the elements in the subset $X \subseteq A$, and $S(\emptyset) = 0$ by definition.
Determine the number of good sets $A$ such that all elements in $A$ are less than $2^n$.
(Bayarmagnai Gombodorj)
