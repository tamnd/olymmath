---
tag: 1JZDG515TY
kind: problem
type: answer
answer: 5^{1008}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154354
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=3
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 19th Philippine Mathematical Olympiad
---
Define $f: \mathbb{R}^{2} \rightarrow \mathbb{R}^{2}$ by $f(x, y)=(2 x-y, x+2 y)$. Let $f^{0}(x, y)=(x, y)$ and, for each $n \in \mathbb{N}$, $f^{n}(x, y)=f\left(f^{n-1}(x, y)\right)$. Determine the distance between $f^{2016}\left(\frac{4}{5}, \frac{3}{5}\right)$ and the origin.
