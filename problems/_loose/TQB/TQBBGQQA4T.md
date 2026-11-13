---
tag: TQBBGQQA4T
kind: problem
type: answer
answer: (n + 1) * C(2n, n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=121
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 66th Czech and Slovak Mathematical Olympiad
---
To a sequence of $n$ zeros and $n$ ones, we assign the number of maximal contiguous runs of equal digits in it. (For instance, sequence $00111001$ has four such runs: $00$, $111$, $00$, and $1$.) For a given $n$ we sum up all the numbers assigned to all such sequences. Prove that the resulting sum is equal to
$$
(n + 1) \binom{2n}{n}.
$$
