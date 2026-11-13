---
tag: 8YB8G0CMDD
kind: problem
type: answer
answer: x = 0 for n = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th Romanian Mathematical Olympiad
---
Let $n \in \mathbb{N}$, $n \ge 2$. Consider the equation:
$$
\{x\} + \{2x\} + \dots + \{nx\} = [x] + [2x] + \dots + [2nx].
$$

a) Solve the equation in $\mathbb{R}$ for $n = 2$.
b) Prove that the equation has at most two real solutions for any $n \ge 2$.
