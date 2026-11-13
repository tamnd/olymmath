---
tag: GVQ8Q7MJE0
kind: problem
type: answer
answer: No for n = 1; Yes for n > 1.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan
    source: hf-mathnet
    label: Balkan Mathematical Olympiad 41st Balkan Mathematical Olympiad
---
Let $n$ be a fixed natural number and
$$
S_n = \{\overline{c_n c_{n-1} \dots c_1}_{(10)} \mid c_1, \dots, c_{n-1}, c_n \in \{1, 2, 3, 4\}\}.
$$
Are there distinct numbers $x$ and $y$, $x, y \in S_n$, such that $4^n \mid x - y$?
