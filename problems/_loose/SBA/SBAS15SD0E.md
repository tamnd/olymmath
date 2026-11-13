---
tag: SBAS15SD0E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h84884
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22975
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1997
    source: hf-ai-mo-aops
    label: 1997 IberoAmerican
---
Let $n$ be a positive integer. Consider the sum $x_1y_1 + x_2y_2 +\cdots + x_ny_n$ , where that values of the variables $x_1, x_2,\ldots, x_n, y_1, y_2,\ldots, y_n$ are either 0 or 1.

Let $I(n)$ be the number of 2 $n$ -tuples $(x_1, x_2,\ldots, x_n, y_1, y_2,\ldots, y_n)$ such that the sum of the number is odd, and let $P(n)$ be the number of 2 $n$ -tuples $(x_1, x_2,\ldots, x_n, y_1, y_2,\ldots, y_n)$ such that the sum is an even number. Show that: $$ \frac{P(n)}{I(n)}=\frac{2^n+1}{2^n-1} $$
