---
tag: KV9GNK0M0A
kind: problem
type: answer
answer: a_i = \frac{7^{2^i} - 1}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there exists an infinite sequence of positive integers $ a_1, a_2, ... $ such that for all positive integers $ i $, \\
i) $ a_{i + 1} $ is divisible by $ a_{i} $.\\
ii) $ a_i $ is not divisible by $ 3 $.\\
iii) $ a_i $ is divisible by $ 2^{i + 2} $ but not $ 2^{i + 3} $.\\
iv) $ 6a_i + 1 $ is a prime power.\\
v) $ a_i $ can be written as the sum of the two perfect squares.
