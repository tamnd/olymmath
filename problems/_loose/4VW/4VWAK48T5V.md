---
tag: 4VWAK48T5V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 27th Philippine MO Area Stage
    url: https://artofproblemsolving.com/community/c6h3487343
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 27th Philippine MO Area Stage
---
The sequence of real numbers $x_1, x_2, \dots$ , satisfies the recurrence relation
$$ \frac{x_{n+1}}{x_n} = \frac{(x_{n+1})^2 + 27}{x_n^2 + 27} $$
for all positive integers $n$ . Suppose that $x_{20} = x_{25} = 3$ . Let $M$ be the maximum value of
$$ \sum_{n=1}^{2025} x_n. $$
What is $M \pmod{1000}$ ?
