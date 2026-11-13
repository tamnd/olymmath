---
tag: X301RJR4QT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239623
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the sum of integer weights that come with a two pan balance Scale, say $\omega_1 \le \omega_2 \le \omega_3 \le ... \le\omega_n$. Show that all integer-weighted objects in the range $1$ to $S$ can be weighed exactly if and only if $\omega_1=1$ and $$\omega_{j+1} \le 2 \left( \sum_{l=1}^{j} \omega_l\right) +1$$
