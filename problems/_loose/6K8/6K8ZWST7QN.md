---
tag: 6K8ZWST7QN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=91
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Denote by $\sigma(n)$ the sum of divisors of $n$. A positive integer $n$ ($n \ge 2$) is redundant if for any integer $k$, with $k < n$, we have $\frac{\sigma(k)}{k} < \frac{\sigma(n)}{n}$. (For instance if $n = 1, 2, 3, 4, 5$, then $\frac{\sigma(n)}{n} = 1, \frac{3}{2}, \frac{4}{3}, \frac{7}{4}, \frac{6}{5}$ respectively. Hence, $2$ and $4$ are redundant, $3$ and $5$ are not.) Show that there exist infinitely many redundant numbers.
