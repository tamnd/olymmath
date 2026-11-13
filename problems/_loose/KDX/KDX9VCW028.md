---
tag: KDX9VCW028
kind: problem
type: answer
answer: \max\left\{2, \frac{2m}{n} + 1\right\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208831
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ boys $a_1, a_2, \ldots, a_n$ and $n$ girls $b_1, b_2, \ldots, b_n $. Some pairs of them are connected. Any two boys or two girls are not connected, and $a_i$ and $b_i$ are not connected for all $i \in \{ 1,2,\ldots,n\}$. Now all boys and girls are divided into several groups satisfying two conditions:
(i) Every groups contains an equal number of boys and girls.
(ii) There is no connected pair in the same group.
Assume that the number of connected pairs is $m$. Show that we can make the number of groups not larger than $\max\left \{2, \dfrac{2m}{n} +1\right \}$.
