---
tag: 1CGC6M5VHX
kind: problem
type: answer
answer: (-2, 0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the set of real values of $x$ for which the following series converges, and find its sum:
$$\sum_{n=1}^{\infty} \left(\sum_{\substack{k_1, k_2,\ldots , k_n \geq 0\\ 1\cdot k_1 + 2\cdot k_2+\ldots +n\cdot k_n = n}} \frac{(k_1+\ldots+k_n)!}{k_1!\cdot \ldots \cdot k_n!} x^{k_1+\ldots +k_n} \right) \ . $$
