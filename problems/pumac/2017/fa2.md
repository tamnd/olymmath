---
tag: G7Y7SRCFY5
kind: problem
appearances:
  - at: pumac/2017/fa2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Finals_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1918657
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15952
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1, a_2, a_3, ...$ be a monotonically decreasing sequence of positive real numbers converging to zero. Suppose that $\Sigma_{i=1}^{\infty}\frac{a_i}{i}$ diverges. Show that $\Sigma_{i=1}^{\infty}a_i^{2^{2017}}$ also diverges. You may assume in your proof that $\Sigma_{i=1}^{\infty}\frac{1}{i^p}$ converges for all real numbers $p > 1$ . (A sum $\Sigma_{i=1}^{\infty}b_i$ of positive real numbers $b_i$ diverges if for each real number $N$ there is a positive integer $k$ such that $b_1+b_2+...+b_k > N$ .)
