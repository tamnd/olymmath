---
tag: SBS80RS25G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237539
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f(x) = c_m x^m + c_{m-1} x^{m-1} +...+ c_1 x + c_0$, where each $ c_i$ is a non-zero integer. Define a sequence $ \{ a_n \}$ by $ a_1 = 0$ and $ a_{n+1} = f(a_n)$ for all positive integers $ n$.

(a) Let $ i$ and $ j$ be positive integers with $ i<j$. Show that $ a_{j+1} - a_j$ is a multiple of $ a_{i+1} - a_i$.

(b) Show that $ a_{2008} \neq 0$
