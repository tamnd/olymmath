---
tag: YH07YKBZ9M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=54
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2008
    source: hf-mathnet
    label: Ukraine Ukrajina 2008
---
Let's examine all the possible sequences $a_1, a_2, ..., a_{2008}$ of non-negative integers where $a_1 \le a_2 \le ... \le a_{2008}$ and $a_k \le (k-1)$ for all values of $k$ from $1$ to $2008$. Prove that the number of such sequences exceeds

a) $2^{2007}$;
b) $2^{2008}$.
