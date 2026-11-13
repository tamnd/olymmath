---
tag: D69CY3W4NT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given the finite sets $ X$, $ A_1$, $ A_2$, $ \dots$, $ A_{n - 1}$ and the functions $ f_i: \ X\rightarrow A_i$. A vector $ (x_1,x_2,\dots,x_n)\in X^n$ is called *nice*, if $ f_i(x_i) = f_i(x_{i + 1})$, for each $ i = 1,2,\dots,n - 1$. Prove that the number of nice vectors is at least
$$ \frac {|X|^n}{\prod\limits_{i = 1}^{n - 1} |A_i|}.
$$
