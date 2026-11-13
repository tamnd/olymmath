---
tag: 60VZDTBACJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220583
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $p_k>0,a_k\ge2~(k=1,2,\ldots,n)$ and
$$S_n=\sum_{k=1}^na_k,A_n=\prod_{\text{cyc}}a_1^{p_2+p_3+\ldots+p^n},B_n=\prod_{k=1}^na_k^{p_k},$$
then prove that
$$\sum_{k=1}^np_k\log_{S_n-a_k}a_k\ge\left(\sum_{k=1}^np_k\right)\log_{A_n}B_n$$

*Proposed by Mihály Bencze*
