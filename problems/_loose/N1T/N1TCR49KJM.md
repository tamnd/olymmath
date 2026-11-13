---
tag: N1TCR49KJM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h598545
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39347
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1989
    source: hf-ai-mo-aops
    label: 1989 Bundeswettbewerb Mathematik
---
Positive integers $x_1, x_2, \dots, x_n$ ( $n \ge 4$ ) are arranged in a circle such that each $x_i$ divides the sum of the neighbors; that is $$ \frac{x_{i-1}+x_{i+1}}{x_i} = k_i $$ is an integer for each $i$ , where $x_0 = x_n$ , $x_{n+1} = x_1$ . Prove that $$ 2n \le k_1 + k_2 + \dots + k_n < 3n. $$
