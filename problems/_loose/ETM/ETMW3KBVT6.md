---
tag: ETMW3KBVT6
kind: problem
type: answer
answer: "12504"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of 5-digit numbers that contain at least one 6 and are divisible by 3. For a $k$-digit number $a_{k-1} a_{k-2} \cdots a_{1} a_{0}$ $\equiv a_{k} \times 10^{k-1}+a_{k-2} \times 10^{k-2}+\cdots+a_{1} \times 10+a_{0}$, since $10 \equiv 1 \bmod 3,10^{2} \equiv 1 \bmod 3, \cdots$, $10^{k} \equiv 1 \bmod 3$. Therefore, the necessary condition for $a_{k-1} a_{k-2} \cdots a_{1} a_{0}$ to be divisible by 3 is
$$
a_{k-1}+a_{k-2}+\cdots+a_{1}+a_{0} \equiv 0 \bmod 3
$$
