---
tag: RBSZXE4N1A
kind: problem
type: answer
answer: C_{n+}^{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23946
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) From a box containing $n$ white and $m$ black balls, $k$ balls are drawn at random. What is the probability that exactly $r$ of the drawn balls will be white?

b) Apply the result of part a) to find the value of the sum

$$
C_{n}^{0} C_{m}^{k}+C_{n}^{1} C_{m}^{k-1}+C_{n}^{2} C_{m}^{k-2}+\ldots+C_{n}^{k} C_{m}^{0}
$$

Note. Other methods for finding this sum are discussed in the solutions to problems $55 m), 58$ ), 59 v).
