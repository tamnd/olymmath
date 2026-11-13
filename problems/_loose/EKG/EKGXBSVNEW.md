---
tag: EKGXBSVNEW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2520815
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48646
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244559
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Mongolian Mathematical Olympiad
---
Let $n=p_1^{\alpha_1}\cdots p_s^{\alpha_s}\ge2$ . If for any $\alpha\in\mathbb N$ , $p_i-1\nmid\alpha$ , where $i=1,2,\ldots,s$ , prove that $n\mid\sum_{\alpha\in\mathbb Z^*_n}\alpha^{\alpha}$ where $\mathbb Z^*_n=\{a\in\mathbb Z_n:\gcd(a,n)=1\}$ .
