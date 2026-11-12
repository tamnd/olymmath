---
tag: 9EWRDEYE0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2973244
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27620
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2022
    source: hf-ai-mo-aops
    label: 2022 Rioplatense Mathematical Olympiad
---
Let $n$ be a positive integer. Given a sequence of nonnegative real numbers $x_1,\ldots ,x_n$ we define the *transformed sequence* $y_1,\ldots ,y_n$ as follows: the number $y_i$ is the greatest possible value of the average of consecutive terms of the sequence that contain $x_i$ . For example, the transformed sequence of $2,4,1,4,1$ is $3,4,3,4,5/2$ .
Prove that
a) For every positive real number $t$ , the number of $y_i$ such that $y_i>t$ is less than or equal to $\frac{2}{t}(x_1+\cdots +x_n)$ .
b) The inequality $\frac{y_1+\cdots +y_n}{32n}\leq \sqrt{\frac{x_1^2+\cdots +x_n^2}{32n}}$ holds.
