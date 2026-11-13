---
tag: TVQDR5NDTH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77636
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades Françaises de Mathématiques
---
Let $n$ be an integer and $0<u_{1}<u_{2}<\ldots<u_{n}$ be real numbers such that

$$
u_{1}+u_{2}+\ldots+u_{n}=\frac{1}{u_{1}^{2}}+\frac{1}{u_{2}^{2}}+\ldots+\frac{1}{u_{n}^{2}}
$$

Show that for any integer $k$ less than or equal to $n$, there exist $k$ real numbers among $u_{1}, u_{2}, \ldots, u_{n}$ whose sum is greater than or equal to $k$.
