---
tag: ZRK9W1W08P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $v > 1$, a positive integer. Each cell of a $v \times v$ table contains one integer. Suppose that the following conditions are satisfied:

a. Each number in the table is congruent to $1$ modulo $v$.

b. The sum of numbers in any row, as well the sum of numbers in any column is congruent to $v$ modulo $v^2$.

Let $\Gamma_i$ be the product of numbers in the $i^{\text{th}}$ row, and $\Sigma_j$ be the product of numbers in the $j^{\text{th}}$ column. Prove that the sums $\Gamma_1 + \Gamma_2 + \dots + \Gamma_v$ and $\Sigma_1 + \Sigma_2 + \dots + \Sigma_v$ are congruent modulo $v^4$. (IMO 2018 shortlist)
