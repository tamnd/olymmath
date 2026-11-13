---
tag: BBAM0T114J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $m, n \in \mathbf{N}^{*}, \ln g_{m}(x)=x+m \ln 3, f_{n+1}(x)=f_{1}\left(f_{n}(x)\right)$, where $f_{1}(x)=$ $3 x+2$. Prove:
(1) For any $x \geqslant 2, \sum_{i=1}^{2014} \frac{1}{g_{i}(x)-f_{i}(x)}<\frac{1}{2}$;
(2) For any integer $k \geqslant 7$, there must exist a $\delta_{k} \in\{0,1,2, \cdots, 2013\}$ uniquely determined by $k$, such that $f_{k}\left(\delta_{k}\right)$ is a multiple of 2014.
