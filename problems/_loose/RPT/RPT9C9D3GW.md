---
tag: RPT9C9D3GW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a function $f_{n}(x)$ defined on $\mathbf{R}$ with the following properties:
(1) $f_{n}(0)=\frac{1}{2}$; (2) $n\left[f_{n}\left(\frac{k+1}{n}\right)-f_{n}\left(\frac{k}{n}\right)\right]=\left[f_{n}\left(\frac{k}{n}\right)-1\right]$.
$$
f_{n}\left(\frac{k+1}{n}\right), k=0,1,2,3, \cdots \text {. }
$$
(1) For a fixed $n$, let $a_{k}=\frac{1}{f_{n}\left(\frac{k}{n}\right)}$, find the expression for $a_{k}$; (2) For $n \in \mathbf{N}^{*}$, prove: $\frac{1}{4}<f_{n}(1) \leqslant \frac{1}{3}$.
