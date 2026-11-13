---
tag: YSF8CSHK9B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241625
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ X: = \{x_1,x_2,\ldots,x_{29}\}$ be a set of $ 29$ boys: they play with each other in a tournament of Pro Evolution Soccer 2009, in respect of the following rules:

i) every boy play one and only one time against each other boy (so we can assume that every match has the form $ (x_i \text{ Vs } x_j)$ for some $ i \neq j$);
ii) if the match $ (x_i \text{ Vs } x_j)$, with $ i \neq j$, ends with the win of the boy $ x_i$, then $ x_i$ gains $ 1$ point, and $ x_j$ doesn't gain any point;
iii) if the match $ (x_i \text{ Vs } x_j)$, with $ i \neq j$, ends with the parity of the two boys, then $ \frac {1}{2}$ point is assigned to both boys.

(We assume for simplicity that in the imaginary match $ (x_i \text{ Vs } x_i)$ the boy $ x_i$ doesn't gain any point).
Show that for some positive integer $ k \le 29$ there exist a set of boys $ \{x_{t_1},x_{t_2},\ldots,x_{t_k}\} \subseteq X$ such that, for all choice of the positive integer $ i \le 29$, the boy $ x_i$ gains always a integer number of points in the total of the matches $ \{(x_i \text{ Vs } x_{t_1}),(x_i \text{ Vs } x_{t_2}),\ldots, (x_i \text{ Vs } x_{t_k})\}$.
*(Paolo Leonetti)*
