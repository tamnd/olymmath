---
tag: DMF4C1TEQ5
kind: problem
type: answer
answer: \left| \sum_{k=0}^{n-1} f\left( \frac{k}{n} \right) \right| < \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206978
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Let $ f: [0,1]\rightarrow \mathbb{R}$ a derivable function such that $ f(0)=f(1)$, $ \int_0^1f(x)dx=0$ and $ f^{\prime}(x) \neq 1\ ,\ (\forall)x\in [0,1]$.

i)Prove that the function $ g: [0,1]\rightarrow \mathbb{R}\ ,\ g(x)=f(x)-x$ is strictly decreasing.

ii)Prove that for each integer number $ n\ge 1$, we have:

$ \left|\sum_{k=0}^{n-1}f\left(\frac{k}{n}\right)\right|<\frac{1}{2}$
