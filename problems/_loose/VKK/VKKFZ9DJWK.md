---
tag: VKKFZ9DJWK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2016
    source: hf-mathnet
    label: Argentina Argentine National Olympiad 2016
---
Alex and Bibi play the following game. Alex chooses a natural number $k$ not exceeding $1000$. Then Bibi chooses a collection $B$ of $n$ integers in $\{0,1,...,1000\}$, not necessarily distinct, where $n > k$. Now Alex is allowed to apply repeatedly the following operation on $B$: choosing $k$ numbers $b_1, ..., b_k$ from $B$ and changing them as follows. For each $i = 1, ..., k$ the number $b_i$ is replaced by $b_i + 1$ if $b_i < 1000$ and by $0$ if $b_i = 1000$.

Alex wins if via several operations he succeeds in making all numbers in $B$ equal to $0$; if he fails then Bibi wins. Find all $k$ that guarantee Alex a win, regardless of the collection $B$ chosen by Bibi.
