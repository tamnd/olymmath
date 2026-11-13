---
tag: YBH6E7RF52
kind: problem
type: answer
answer: a) n = 11; b) 7921
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 74th Romanian Mathematical Olympiad
---
Consider a positive integer $n$ and the set $A_n = \{1, 3, 5, \dots, 2n - 1\}$. For each pair $(a, b)$, where $a, b \in A_n$ we construct the concatenated number $m = \overline{ab}$, obtained by joining the numbers $a$ and $b$. For instance, for $19, 37 \in A_{30}$, the concatenated number is $m = 1937$.

a) What is the smallest number $n \in \mathbb{N}^*$ for which we get at least a perfect square?

b) Find the largest perfect square that can be obtained for $n = 50$.
