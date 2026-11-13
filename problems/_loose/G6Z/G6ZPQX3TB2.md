---
tag: G6ZPQX3TB2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place $n$ distinct balls into $r(n \geqslant r)$ identical boxes, assuming no box is empty, then the number of ways to place the balls $S(n, r)$ is called the second kind of Stirling number. Prove:
$$
S(n, r)=\frac{1}{r!}\left[r^{n}-C_{r}^{1}(r-1)^{n}+C_{r}^{2}(r-2)^{n}-\cdots+(-1)^{r-1} C_{r}^{r-1} \cdot 1^{n}\right] .
$$
