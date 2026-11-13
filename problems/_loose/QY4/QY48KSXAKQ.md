---
tag: QY48KSXAKQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h604619
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11318
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2014
    source: hf-ai-mo-aops
    label: 2014 Iran MO (3rd Round)
---
We say $p(x,y)\in \mathbb{R}\left[x,y\right]$ is *good* if for any $y \neq 0$ we have $p(x,y) = p\left(xy,\frac{1}{y}\right)$ . Prove that there are good polynomials $r(x,y) ,s(x,y)\in \mathbb{R}\left[x,y\right]$ such that for any good polynomial $p$ there is a $f(x,y)\in \mathbb{R}\left[x,y\right]$ such that $$f(r(x,y),s(x,y))= p(x,y)$$

*Proposed by Mohammad Ahmadi*
