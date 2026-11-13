---
tag: BDA0DFKTY2
kind: problem
type: answer
answer: "632"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any nonnegative integer $n$, let $S(n)$ be the sum of the digits of $n$. Let $K$ be the number of nonnegative integers $n \le 10^{10}$ that satisfy the equation
$$
S(n) = (S(S(n)))^2.
$$
Find the remainder when $K$ is divided by $1000$.
