---
tag: M7D2EJYA5N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Competitions
---
Let $n$ be a positive integer. Prove that there is only one tuple of $n+2$ real numbers $(\alpha_1, \alpha_2, \alpha_3, \dots, \alpha_n, \alpha_{n+1})$ such that $\alpha_0 = \alpha_{n+1} = 0$, $|\alpha_i| \le \frac{\pi}{6}$ and
$$
1 + \sin \alpha_{i+1} + 3 \sin \alpha_{i-1} = 10 \sin \alpha_i - 2 \sin 3\alpha_i
$$
for all $i = 1, 2, 3, \dots, n$.
