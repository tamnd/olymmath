---
tag: GAJFVK2D06
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest natural number nonzero n so that it exists in real numbers $x_1, x_2,..., x_n$ which simultaneously check the conditions:
1) $x_i \in [1/2 , 2]$ , $i = 1, 2,... , n$
2) $x_1+x_2+...+x_n \ge \frac{7n}{6}$
3) $\frac{1}{x_1}+\frac{1}{x_2}+...+\frac{1}{x_n}\ge \frac{4n}{3}$
