---
tag: T7XFWE1CY8
kind: problem
type: answer
answer: \frac{(n-1)!(2^{n}-n-1)}{\prod_{r=1}^{n}(2^{r}-1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A machine is programmed to output a sequence of positive integers $a_{1}, a_{2}, a_{3}, \ldots$ It outputs the integers independently, one at a time, and at each step the probability that it outputs the integer $k$ is equal to $\frac{1}{2^{k}}$. The machine stops when it outputs an integer that it has already output before.

Prove that the probability that the machine stops when it has output exactly $n$ integers is
$$
\frac{(n-1)!\left(2^{n}-n-1\right)}{\prod_{r=1}^{n}\left(2^{r}-1\right)}
$$
