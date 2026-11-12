---
tag: RFD0H4BMES
kind: problem
type: answer
answer: "0.93"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32465
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two controllers $A$ and $B$ arranged samples of products made by nine masters in the order of decreasing quality (in parentheses are the ordinal numbers of products of the same quality):
(A)
$\begin{array}{llll}\text { (A) } & 1 & 2 \\ \text { (B) } & 2 & 1\end{array}$
$\left.\begin{array}{ccc}(3, & 4 & 5 \\ 4 & 3 & 5\end{array}\right)$
$(6$,
$7,8,9)$
$(6,7) 8 9$

Find the sample rank correlation coefficient of Spearman between the ranks of the products assigned by the two controllers.
