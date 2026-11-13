---
tag: 1YE4KZGC1B
kind: problem
type: answer
answer: 1236, 1248, 1284, 1296, 1326, 1428, 1498, 2163, 2184, 2346, 2369, 3162, 3264, 3296, 3468, 4182, 4386
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2025
    source: hf-mathnet
    label: Mongolia MMO2025 Round 2
---
Let a four digit number $ABCD$ be called a *good number* if all its digits are distinct and nonzero, and the following are all integers: $\frac{CD}{AB}$, $\frac{C}{A}$, $\frac{D}{B}$. For example, the number $1284$ is good because all its digits are distinct, nonzero, and $\frac{84}{12} = 7$, $\frac{8}{1} = 8$, $\frac{4}{2} = 2$. Find all good numbers. It is not required to prove that there are no other good numbers.
