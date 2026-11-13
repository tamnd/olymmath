---
tag: E7RYS2B3F2
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178264
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Olimpiada Naţională de Matematică
---
Let $f:[0,1] \rightarrow[0,1]$ be an increasing function and let

$$
a_{n}=\int_{0}^{1} \frac{1+(f(x))^{n}}{1+(f(x))^{n+1}} \mathrm{~d} x, n \in \mathbb{N}^{*}
$$

Show that the sequence $\left(a_{n}\right)_{n \in \mathbb{N}^{*}}$ is convergent and calculate its limit.
