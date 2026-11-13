---
tag: S5T8JYT1BW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each $\alpha\in \mathbb{R}$ define $f_{\alpha}(x)=\lfloor{\alpha x}\rfloor$. Let $n\in \mathbb{N}$. Show there exists a real $\alpha$ such that for $1\le \ell \le n$ :
$$ f_{\alpha}^{\ell}(n^2)=n^2-\ell=f_{\alpha^{\ell}}(n^2).$$
Here $f^{\ell}_{\alpha}(x)=(f_{\alpha}\circ f_{\alpha}\circ \cdots \circ f_{\alpha})(x)$ where the composition is carried out $\ell$ times.
