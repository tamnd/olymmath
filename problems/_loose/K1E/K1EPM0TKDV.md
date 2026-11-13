---
tag: K1EPM0TKDV
kind: problem
type: answer
answer: "2187"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The infinite sequence of numbers

$$
0,1,2,2,1,-1,-2,-1,1,3, \ldots
$$

satisfies the following rule. For each quadruple of consecutive numbers $\ldots, a, b, c, d, \ldots$ in the sequence, it always holds that $d$ is equal to $c$ minus the smallest of the two numbers $a$ and $b$. Thus, the ninth number in the sequence is equal to $-1-(-2)=1$ and the tenth number is equal to $1-(-2)=3$. Calculate the 100th number in the sequence.
