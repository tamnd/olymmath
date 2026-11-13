---
tag: MQ6FZQT33H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Canadian Mathematical Olympiad Qualification Repechage
    url: https://artofproblemsolving.com/community/c6h588446
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4722
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206890
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2010
    source: hf-ai-mo-aops
    label: 2010 Canadian Mathematical Olympiad Qualification Repechage
---
If $(a,~b,~c)$ is a triple of real numbers, define

- $g(a,~b,~c)=(a+b,~b+c,~a+c)$ , and
- $g^n(a,~b,~c)=g(g^{n-1}(a,~b,~c))$ for $n\ge 2$

Suppose that there exists a positive integer $n$ so that $g^n(a,~b,~c)=(a,~b,~c)$ for some $(a,~b,~c)\neq (0,~0,~0)$ . Prove that $g^6(a,~b,~c)=(a,~b,~c)$
