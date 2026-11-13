---
tag: MEXM117VFG
kind: problem
type: answer
answer: "984374748"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(This sub-question is worth 20 points) It is known that any positive integer $n$ can be uniquely represented as
$$
n=a_{0}+a_{1} 9+a_{2} 9^{2}+\cdots+a_{m} 9^{m}
$$

where $m$ is a non-negative integer, $a_{j} \in\{0,1, \cdots, 8\}(j=0,1, \cdots, m-1), a_{m} \in\{1, \cdots, 8\}$. Find the sum of all positive integers $n$ for which the sequence $a_{0}, a_{1}, a_{2}, \cdots, a_{m}$ in $(*)$ is strictly increasing or strictly decreasing.
