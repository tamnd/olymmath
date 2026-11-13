---
tag: FZPQYM2R2E
kind: problem
type: answer
answer: "33340000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135545
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest real number $C$ such that the inequality
$$
\sum_{k=1}^{100} \frac{1}{x_{k}} \sum_{k=1}^{100}\left(x_{k}^{3}+2 x_{k}\right)-\left(\sum_{k=1}^{100} \sqrt{x_{k}^{2}+1}\right)^{2} \geqslant C
$$

holds for any 100 distinct positive integers $x_{1}, x_{2}, \cdots, x_{100}$.
