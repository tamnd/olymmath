---
tag: AKEJ1HRWSR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Peru MO (ONEM)
    url: https://artofproblemsolving.com/community/c6h2967783
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50667
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-mo/2015
    source: hf-ai-mo-aops
    label: 2015 Peru MO (ONEM)
---
Let $b$ be an odd positive integer. The sequence $a_1, a_2, a_3, a_4$ , is definedin the next way: $a_1$ and $a_2$ are positive integers and for all $k \ge 2$ , $$ a_{k+1}= \begin{cases} \frac{a_k + a_{k-1}}{2} \,\, if \,\, a_k + a_{k-1} \,\, is \,\, even \frac{a_k + a_{k-1+b}}{2}\,\, if \,\, a_k + a_{k-1}\,\, is \,\, odd\end{cases} $$ a) Prove that if $b = 1$ , then after a certain term, the sequence will become constant.
b) For each $b \ge 3$ (odd), prove that there exist values of $a_1$ and $a_2$ for which the sequence will become constant after a certain term.
