---
tag: N4J0ETA85G
kind: problem
type: answer
answer: '{1, 2, 3, 5, 7}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th NMO
---
Determine the sets $A$ of positive natural numbers, with at least four elements $a_1 < a_2 < a_3 < \dots$, such that:
$$
\bullet \ a_1 = 1, a_2 = 2;
$$
$$
\bullet \ a_i a_{i+3} + 1 = a_{i+1} a_{i+2}, \text{ for every positive integer } i;
$$
$$
\bullet \ A \text{ contains exactly four prime numbers.}
$$
