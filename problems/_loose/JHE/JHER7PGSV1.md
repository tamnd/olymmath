---
tag: JHER7PGSV1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For non-negative integer $k$, denote the decimal representation of $1987^{k}$ as $\overline{a_{k, n_{k}} a_{k}, n_{k}-1 \cdots a_{k, 0}}\left(a_{k}, n_{k} \neq 0\right)$. Clearly, $a_{0, n_{0}}=1987^{0}=1, \overline{a_{1, n_{1}} a_{1, n_{1}-1} \cdots a_{1,0}}=1987, \cdots$. Form an infinite decimal (in decimal notation) from these numbers:
$$
x=0.11987 a_{2, n_{2}} a_{2, n_{2}-1} \cdots a_{2,0} \cdots a_{k, n_{k}} a_{k, n_{k}-1} \cdots a_{k, 0} \cdots
$$

Prove: $x$ is an irrational number.
